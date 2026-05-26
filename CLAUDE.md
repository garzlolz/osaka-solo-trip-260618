# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案簡介

此為 2026 年 6/18～6/21 大阪獨旅行程規劃文件庫。核心文件為 [public/journey.md](public/journey.md)，配套圖片存放於 [public/images/](public/images/)。另有靜態前端視覺化網頁（`index.html` + `js/`），無任何後端或雲端依賴。

## journey.md 文件結構與格式慣例

[public/journey.md](public/journey.md) 由以下固定區塊組成（順序不變）：

1. **出發前待辦清單**：`- [ ]` / `- [x]` 核取方塊，跨日期的前置準備事項
2. **Day 1–4 行程區塊**：每天以 `## Day N：日期（星期）—— 主題` 為標題
   - 主體為 `時間 / 活動·地點 / 備註 / 待辦` 四欄 markdown 表格
   - 可附子章節說明路線細節或風險（以 `###` 標題分隔）
3. **必要行動**：`# 📌 必要行動` 優先度表格，列出強烈建議的票務或策略行動
4. **Bottleneck**：`# 🧠 bottleneck` 文字段落，點出行程中唯一真正的瓶頸

**圖示慣例**（備註欄使用）：

| 符號 | 意義 |
|------|------|
| `⚠️` | 需注意的風險、排隊或時間壓力 |
| `❌` | 不需預約 |
| `✔` | 建議行動 |

**檔案開頭** 需包含更新日期，格式：`> 更新日期: YYYY-MM-DD HH:mm`

## 前端網頁架構

```
index.html                   # Vue 3 CDN 入口（Tailwind Import Map）
js/
├── main.js                  # createApp 掛載
├── data.js                  # 所有旅行資料（硬編碼，無 API）
├── components/
│   ├── Tabs.js              # 頁籤導覽（行程 / 準備清單 / 必要行動 / Bottleneck）
│   ├── Icons.js             # SVG 圖示（具名 export）
│   └── BackgroundEffects.js # 裝飾浮動元素
└── views/
    ├── App.js               # 主殼層（含倒數計時）
    ├── ItineraryView.js     # 行程時間軸（EventCard + Day 頁籤）
    ├── RouteTable.js        # Day 2 路線子表格
    ├── ChecklistView.js     # 出發前清單（localStorage 持久化）
    ├── ActionsView.js       # 必要行動列表
    └── BottleneckView.js    # Bottleneck 獨立頁籤
```

### data.js 事件欄位

`itinerary[].events[]` 每個事件可含以下欄位：

| 欄位 | 類型 | 說明 |
|------|------|------|
| `time` | string | 時間（如 `"09:00"` 或 `"10:00–11:00"`） |
| `activity` | string | 活動名稱 |
| `notes` | `{type, text}[]` | 備註陣列；`type` 為 `"warn"` / `"ok"` / `"tip"` / `"info"` |
| `todo` | string \| null | 待辦事項（多行用 `\n` 分隔） |
| `mapQuery` | string | Google Maps 搜尋字串（用於 embed iframe） |
| `mapLink` | string | Google Maps 外部連結（`maps/search/?api=1&query=...`） |

`mapQuery` 與 `mapLink` 為選填；有值時 EventCard 自動顯示地圖切換按鈕。

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
- `feat(js): 新增 Bottleneck 獨立頁籤`
