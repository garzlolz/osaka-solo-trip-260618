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

| 頁籤/按鈕 | 說明 |
|------|------|
| **行程** | Day 1–4 頁籤切換；時間軸卡片；備註依類型顯色（⚠️ 黃、❌ 灰、✔ 綠、ℹ 藍）；Day 1 含機場接駁圖片與風險說明。Day 4 (6/21) 行程最上方內嵌了 Bottleneck (行程瓶頸) 紅色警示卡片。 |
| **準備清單** | 可勾選核取方塊，狀態透過 `localStorage` 持久化，重新整理不會重置。 |
| **必要行動** | 優先行動編號列表。 |
| **🚇 交通資訊** | 點選該日行程時，若有定義交通路線，右下角會顯示此浮動按鈕，點擊後會以毛玻璃背景的 Modal 彈出詳細路線表。 |

### 進階連結與地圖支援

- **Markdown 連結渲染**：行程卡片（活動名稱、備註、待辦）與交通路線表中的 `[名稱](網址)` 格式會自動渲染為可點擊的 HTML 外部超連結。
- **多地圖切換預覽**：卡片內如果存在 Google Maps 連結，系統會自動提取並在卡片底部生成 `🗺 景點名` 的按鈕，點擊即可直接在卡片內切換顯示對應的內嵌地圖。

## 更新行程

編輯 [public/journey.md](public/journey.md) 後，同步更新 [js/data.js](js/data.js) 中對應的資料。若要為某事件加入地圖或外部連結，可以直接在 `activity`、`notes` 或 `todo` 欄位中使用 Markdown 語法 `[名稱](連結)`。

格式慣例詳見 [CLAUDE.md](CLAUDE.md)。
