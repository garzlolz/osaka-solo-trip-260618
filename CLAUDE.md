# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案簡介

此為 2026 年 6/18～6/21 大阪獨旅行程規劃文件庫。核心文件為 [public/journey.md](public/journey.md)，配套圖片存放於 [public/images/](public/images/)。另有 Vite + Vue 3 SFC 靜態前端視覺化網頁，push 到 main 後由 GitHub Actions 自動部署至 GitHub Pages（base: `/osaka-solo-trip-260618/`）。

## 開發指令

套件管理器：**pnpm**

```bash
pnpm dev        # 本地開發伺服器（Vite HMR）
pnpm build      # 打包至 dist/（生產用）
pnpm preview    # 預覽 build 結果
```

## journey.md 文件結構與格式慣例

[public/journey.md](public/journey.md) 由以下固定區塊組成（順序不變）：

1. **出發前待辦清單**：`- [ ]` / `- [x]` 核取方塊，跨日期的前置準備事項
2. **Day 1–4 行程區塊**：每天以 `## Day N：日期（星期）—— 主題` 為標題
   - 主體為 `時間 / 活動·地點 / 備註 / 待辦` 四欄 markdown 表格
   - 可附子章節說明路線細節或風險（以 `###` 標題分隔）
3. **必要行動**：`# 📌 必要行動` 優先度表格，列出強烈建議的票務或策略行動
4. **Bottleneck**：`# 🧠 bottleneck` 文字段落，點出行程中唯一真正的瓶頸（例如機場過夜淋浴限制）

**圖示慣例**（備註欄使用）：

| 符號 | 意義 |
|------|------|
| `⚠️` | 需注意的風險、排隊或時間壓力 |
| `❌` | 不需預約 |
| `✔` | 建議行動 |

**檔案開頭** 需包含更新日期，格式：`> 更新日期: YYYY-MM-DD HH:mm`

## 前端網頁架構

```
index.html                    # HTML 入口（Vite）
js/
├── main.js                   # createApp 掛載
├── data.js                   # 所有旅行資料（硬編碼，無 API）
├── components/
│   ├── Tabs.vue              # 頁籤導覽（行程 / 準備清單 / 必要行動）
│   ├── Icons.js              # SVG 圖示（具名 export，純 JS）
│   └── BackgroundEffects.vue # 裝飾浮動元素
└── views/
    ├── App.vue               # 主殼層（含倒數計時）
    ├── ItineraryView.vue     # 行程時間軸（含 EventCard、Day 頁籤、🚇 交通資訊浮標與彈窗、Day 4 Bottleneck 警示卡片）
    ├── EventCard.vue         # 單一事件卡片（含多地圖按鈕與 iframe）
    ├── RouteTable.vue        # 交通路線表格（在 ItineraryView 的 Modal 中渲染）
    ├── ChecklistView.vue     # 出發前清單（localStorage 持久化）
    └── ActionsView.vue       # 必要行動列表
```

### 資料渲染與連結解析規則

1. **Markdown 連結渲染**：
   - `EventCard.vue` 與 `RouteTable.vue` 均採用 `renderMarkdownLinks(text)` 函式，將文字中的 `[名稱](網址)` 格式 Markdown 連結解析並渲染為帶有 `class="text-blue-400 underline hover:text-blue-300 transition-colors"` 的 HTML `<a>` 超連結。

2. **多地圖解析機制 (Multi-Map Buttons)**：
   - 事件卡片中的活動名稱 (`activity`)、備註 (`notes`)、待辦 (`todo`) 欄位如果包含 Google Maps 連結（網址含 `maps` 或 `google.com/maps`），`EventCard` 會自動提取這些地圖連結並進行去重。
   - 若提取到地圖連結，卡片底部將動態生成 `🗺 景點名` 按鈕，點擊可切換顯示對應的內嵌地圖 (iframe)。
   - 若沒有提取到 Markdown 連結，則自動 Fallback 到 `mapLink` 與 `mapQuery` 欄位。

3. **浮動交通資訊 (Transit Info Modal)**：
   - 當天行程若在 `data.js` 中有定義 `routes` 資料時，畫面右下角會顯示 `🚇 交通資訊` 浮動按鈕。
   - 點擊該按鈕會以毛玻璃背景的 Modal 彈窗呈現該日的路線表（`RouteTable.vue`）。

4. **Bottleneck 提醒**：
   - 移除原先的 Bottleneck 獨立分頁，將瓶頸提示改為在 Day 4（6/21）的行程時間軸最上方，以紅色警告卡片（Alert Card）形式顯眼呈现。

### data.js 事件欄位

`itinerary[].events[]` 每個事件可含以下欄位：

| 欄位 | 類型 | 說明 |
|------|------|------|
| `time` | string | 時間（如 `"09:00"` 或 `"10:00–11:00"`） |
| `activity` | string | 活動名稱（可使用 Markdown 連結） |
| `notes` | `{type, text}[]` | 備註陣列；`type` 為 `"warn"` / `"ok"` / `"tip"` / `"info"`；`text` 可使用 Markdown 連結 |
| `todo` | string \| null | 待辦事項（多行用 `\n` 分隔，可使用 Markdown 連結） |

## 更新原則

- 修改任何行程細節後，同步更新 `public/journey.md` 頂部的「更新日期」時間戳
- 更新 `journey.md` 後，同步修改 `js/data.js` 的對應資料
- 待辦事項完成後，將 `- [ ]` 改為 `- [x]`
- 新增景點時，維持既有圖示與縮排風格
- 行程表格欄位順序：`時間 | 活動 / 地點 | 備註 | 待辦`

## Git Commit 慣例

| 類型 | 格式 | 適用情境 |
|------|------|---------|
| 行程文件 | `docs(journey.md): 中文描述` | 修改 journey.md 行程內容 |
| 資料層 | `feat(data): 中文描述` | 修改 js/data.js（新增地點、連結等） |
| 前端元件 | `feat(js): 中文描述` | 修改 js/ 下的元件或視圖 |

範例：
- `docs(journey.md): 更新 Day 3 行程與細節`
- `feat(data): 新增 Day 3 各景點 Google Maps 連結`
- `feat(js): 支援路線表彈窗中的地圖超連結，並同步更新交通路線資料`
