# 2026 大阪獨旅專案：GitHub CI/CD 與 package.json 整合指南

本指南將引導您如何在現有的大阪獨旅專案中引入 `package.json`，使用 **Vite** 作為本地開發伺服器與打包工具，並透過 **GitHub Actions** 實作 CI/CD 自動化部署至 **GitHub Pages**。

---

## 目錄
1. [專案架構變更說明](#1-專案架構變更說明)
2. [步驟一：本地環境設定](#2-步驟一本地環境設定)
3. [步驟二：Vite 設定與「路徑 Gotcha」處置](#3-步驟二vite-設定與路徑-gotcha-處置)
4. [步驟三：設定 GitHub Actions 工作流](#4-步驟三設定-github-actions-工作流)
5. [步驟四：GitHub 倉庫設定與權限調整](#5-步驟四github-倉庫設定與權限調整)
6. [步驟五：本地開發與部署流程](#6-步驟五本地開發與部署流程)

---

## 1. 專案架構變更說明

整合後，專案的結構將保持輕量，僅新增幾個設定檔：

```text
osaka-solo-trip-260618/
├── .github/
│   └── workflows/
│       └── deploy.yml          # <-- [新增] GitHub Actions 部署腳本
├── js/
│   ├── data.js
│   └── main.js
├── public/
│   ├── images/                 # 圖片資源
│   └── journey.md              # 原始 Markdown 行程表
├── index.html
├── vite.config.js              # <-- [新增] Vite 設定檔
├── package.json                # <-- [新增] 專案資訊與指令
├── pnpm-lock.yaml              # <-- [新增] 鎖定套件版本 (pnpm)
└── .gitignore                  # <-- [新增/修改] 排除 node_modules 與 dist
```

---

## 2. 步驟一：本地環境設定

請在專案根目錄下執行以下步驟：

### 1. 初始化 `package.json`
在終端機執行：
```bash
pnpm init -y
```

接著，編輯產生的 `package.json`，將其修改為以下內容：
```json
{
  "name": "osaka-solo-trip-260618",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^8.0.14"
  },
  "dependencies": {
    "vue": "^3.5.34"
  }
}
```
* **關鍵設定：** `"type": "module"` 告訴 Node.js 此專案使用原生 ES Modules (`import`/`export`)，這與您現有的 JS 檔案完全相符。

### 2. 安裝本地相依套件
在終端機執行安裝：
```bash
pnpm install
```

### 3. 設定 `.gitignore`
建立或修改 `.gitignore` 檔案，確保開發工具下載的套件與編譯產物不會被推送到 GitHub：
```text
node_modules/
dist/
.DS_Store
Thumbs.db
```

---

## 3. 步驟二：Vite 設定與「路徑 Gotcha」處置

### 1. 建立 `vite.config.js`
在專案根目錄建立 `vite.config.js`：
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  // 將 base 設為您的 GitHub 倉庫名稱，部署至 Pages 時靜態資源路徑才不會出錯
  base: '/osaka-solo-trip-260618/',
  
  // 停用 Vite 預設將 public/ 內容複製到 dist 根目錄的行為
  // 這樣做是為了維持您程式碼中 `public/images/...` 的路徑對齊
  publicDir: false,
  
  resolve: {
    alias: {
      // 指向含 HTML 編譯器的完整 Vue 版本，解決動態 template 渲染問題
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
});
```

### 💡 關鍵路徑說明 (Gotcha)
Vite 預設會將 `public/` 資料夾下的內容直接複製到 `dist/` 的根目錄（例如 `public/images/1.png` 會變成 `dist/images/1.png`）。
但在您的 `js/data.js` 中，圖片路徑寫的是 `"public/images/..."`。
* **解決方案：**
  1. 我們在 `vite.config.js` 中設定 `publicDir: false`。
  2. 在 GitHub Actions 部署時，我們透過簡單的 Linux 指令將整個 `public` 資料夾完整複製到 `dist/public` 中，使產出的路徑依然是 `dist/public/images/...`，如此便不需要修改任何程式碼與 Markdown 圖片路徑。

---

## 4. 步驟三：設定 GitHub Actions 工作流

建立目錄結構並建立 `.github/workflows/deploy.yml` 檔案：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # 當 main 分支有程式碼推送時自動觸發

# 設定工作流權限以允許部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 避免多個部署衝突
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: 檢出專案程式碼
        uses: actions/checkout@v4

      - name: 安裝 pnpm 工具
        uses: pnpm/action-setup@v3
        with:
          version: 11

      - name: 設定 Node.js 環境
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: 安裝專案相依套件
        # 由於是 CI 環境，使用 frozen-lockfile 確保套件版本一致
        run: pnpm install --frozen-lockfile

      - name: 進行專案建置打包 (Vite)
        run: pnpm run build

      - name: 複製 public 靜態目錄至編譯輸出
        # 這一步將 public 目錄完整複製到 dist 中，確保 data.js 的 public/images/... 路徑在線上能正確運作
        run: cp -R public dist/public

      - name: 配置 GitHub Pages 環境
        uses: actions/configure-pages@v4

      - name: 上傳打包後的網頁產物
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: 部署至 GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 5. 步驟四：GitHub 倉庫設定與權限調整

當您將上述變更推送到 GitHub 後，請到 GitHub 網頁進行以下設定：

1. **進入專案設定**：
   開啟您的 GitHub 倉庫，點擊右上角的 **Settings**。
2. **開啟 Pages 功能**：
   在左側選單中找到 **Code and automation** ➞ 點擊 **Pages**。
3. **切換部署來源**：
   在 **Build and deployment** 區塊下方的 **Source**，預設是 *Deploy from a branch*。
   請將其下拉選單改為 **GitHub Actions**。

*(設定完成後，GitHub 會接管部署流程，您不再需要手動建立 `gh-pages` 分支。)*

---

## 6. 步驟五：本地開發與部署流程

當您完成了以上設定，未來的日常開發流程將變得非常順暢：

### 本地開發 (Local Development)
1. 開啟終端機，執行：
   ```bash
   pnpm dev
   ```
2. 終端機會顯示一個本地網址（通常是 `http://localhost:5173/osaka-solo-trip-260618/`）。
3. 用瀏覽器打開它。當您修改 `journey.md`、`data.js` 或任何前端元件時，瀏覽器會**自動即時更新**（不需要手動重新整理網頁）。

### 部署發佈 (Deployment)
當行程調整好，準備發佈到線上讓手機或其他人查看時：
1. 提交並推送程式碼：
   ```bash
   git add .
   git commit -m "docs(journey): 更新行程明細"
   git push origin main
   ```
2. 剩餘工作由 GitHub Actions 自動完成：
   - 自動啟動 Linux 伺服器
   - 自動安裝套件並進行 Vite 打包
   - 自動將網頁發佈到 `https://<您的帳號>.github.io/osaka-solo-trip-260618/`
3. 您可以到 GitHub 倉庫的 **Actions** 頁籤查看部署進度。
