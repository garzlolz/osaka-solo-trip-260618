# 2026 大阪獨旅 06/18 ~ 06/21

行程規劃文件庫，包含視覺化網頁與純文字行程兩種格式。

## 核心檔案

| 檔案                            | 說明                                 |
| ------------------------------- | ------------------------------------ |
| [journey.md](public\journey.md) | 行程主文件（Markdown，純文字閱讀用） |
| [index.html](index.html)        | 視覺化網頁入口                       |

## 開啟視覺化網頁

專案使用 ES Modules，需透過本地伺服器開啟，不可直接雙擊 `index.html`。

**VS Code（推薦）**：安裝 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 擴充功能，右鍵點選 `index.html` → **Open with Live Server**。

**Python**：

```bash
python -m http.server 8080
# 瀏覽器開啟 http://localhost:8080
```

## 網頁功能

- **行程**：Day 1–4 頁籤切換，時間軸卡片，備註依類型顯色（⚠️ 黃、❌ 灰、✔ 綠）；Day 1 含機場接駁圖片與風險說明，Day 2 含去回程路線表
- **準備清單**：可勾選核取方塊，狀態透過 `localStorage` 持久化（重新整理不會重置）
- **必要行動**：優先行動表格 + Bottleneck 分析

## 更新行程

編輯 [journey.md](journey.md) 後，同步更新 [js/data.js](js/data.js) 中對應的資料即可。格式慣例詳見 [CLAUDE.md](CLAUDE.md)。
