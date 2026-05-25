# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案簡介

此為 2026 年 6/18～6/21 大阪獨旅行程規劃文件庫，核心檔案為 [journey.md](journey.md)。配套圖片存放於 [public/images/](public/images/)。

## 文件結構與格式慣例

[journey.md](journey.md) 由以下固定區塊組成（順序不變）：

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

## 更新原則

- 修改任何行程細節後，同步更新檔案頂部的「更新日期」時間戳
- 待辦事項完成後，將 `- [ ]` 改為 `- [x]`
- 新增景點或餐廳選項時，維持既有圖示與縮排風格
- 行程表格欄位順序：`時間 | 活動 / 地點 | 備註 | 待辦`

## Git Commit 慣例

Commit 訊息格式：`docs(journey.md): 中文描述`

範例：
- `docs(journey.md): 更新 Day 3 行程與細節`
- `docs(journey.md): 新增清水寺電子票待辦事項`
