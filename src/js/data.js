export const TRIP_DATA = {
  meta: {
    title: "2026 大阪獨旅",
    dateRange: "06/18 ~ 06/21",
    updatedAt: "2026-05-28 10:35",
    departureDate: "2026-06-18T18:15:00",
  },

  checklist: [
    { id: 1,  text: "手機辦好 ICOCA 卡",                       done: true  },
    { id: 2,  text: "Visit Japan Web 登錄",                    done: false, url: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/" },
    { id: 3,  text: "出國登錄（外交部）",                      done: false, url: "https://www.boca.gov.tw/sp-abre-main-1.html" },
    { id: 4,  text: "辦理 e-SIM",                              done: false },
    { id: 5,  text: "購買清水寺電子票",                        done: false },
    { id: 6,  text: "購買大阪城電子票",                        done: false },
    { id: 7,  text: "確認 INNN 接駁車訂單（2026-1588178）",    done: true },
    { id: 8,  text: "確認 Peach MM028 電子登機證",             done: false },
    { id: 9,  text: "換日幣 / 確認海外刷卡手續費",            done: true },
    { id: 10, text: "下載 Google Maps 大阪離線地圖",           done: false },
    { id: 11, text: "下載 Google 翻譯日文離線包",              done: false },
    { id: 12, text: "下載日本計程車 GO App 並綁定信用卡",       done: false },
  ],

  itinerary: [
    {
      day: 1,
      date: "6/18（四）",
      theme: "深夜抵達",
      dateStr: "2026-06-18",
      events: [
        {
          time: "18:15",
          activity: "[桃園 T1](https://maps.app.goo.gl/dzmAMSbdhjswSMUd6) 搭乘 MM028 起飛",
          notes: [],
          todo: null,
        },
        {
          time: "22:00 左右",
          activity: "抵達 [關西機場 T2](https://maps.app.goo.gl/5Zq5tejrX3wrYNDW9)，辦理入境 / 領行李",
          notes: [
            { type: "warn", text: "入境審查 20–60 分鐘浮動，遇高峰請多預留時間" },
          ],
          todo: null,
        },
        {
          time: "22:30 左右",
          activity: "INNN 接駁專車（訂單 2026-1588178）→ 前往市區",
          notes: [
            { type: "info", text: "出關後依序：➞ 前往 INNN 櫃台核對（T2 國際線到達口左側黃色沙發區）➞ 等候接駁（每 30 分一班，發車前 10 分在櫃台集合）" },
            { type: "warn", text: "若錯過會順延至下一班；櫃台營業：07:00–00:10" },
          ],
          todo: null,
          images: [
            { src: "images/INNN_機場T2接機處路線圖.png", alt: "關西機場 T2 平面圖，INNN 櫃台位於國際線到着口左側" },
            { src: "images/INNN_路線環境圖.png",         alt: "T2 航廈實景，出口左轉即可看到 INNN" },
          ],
        },
        {
          time: "23:30 左右",
          activity: "抵達 [東橫INN大阪日本橋文樂劇場前](https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8) 辦理入住",
          notes: [
            { type: "info", text: "視出關與等車時間而定" },
          ],
          todo: null,
        },
        {
          time: "深夜",
          activity: "[道頓堀](https://maps.app.goo.gl/bvfxbKrwDbBgiV23A)",
          notes: [
            { type: "ok", text: "不需預約／僅人多" },
          ],
          todo: "宵夜：待選",
        },
      ],
      subsections: [
        {
          type: "risks",
          title: "INNN 接駁風險與應對",
          items: [
            {
              title: "入境 + 領行李超過 60 分",
              detail: "可能錯過某班並順延。建議在飛機上先打開 INNN 確認訊息、記下櫃台位置與營業時間；若預期要等較久，心理先預期等下一班。",
            },
            {
              title: "超額行李無法登車",
              detail: "現場因空間不足被退件。建議出發前確認行李件數與尺寸，若有大件行李請事先加購行李券或聯絡業者確認車種。",
            },
            {
              title: "深夜不熟櫃台位置",
              detail: "把櫃台位置（T2 國際線到達口左側黃色沙發區）截圖存入手機；飛機上先查好到達口路線，出關後直接前往櫃台位置。",
            },
          ],
        },
      ],
    },

    {
      day: 2,
      date: "6/19（五）",
      theme: "京都一日遊",
      dateStr: "2026-06-19",
      events: [
        {
          time: "07:00",
          activity: "從 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197) 2 番月台搭堺筋線（往北千里）→ [淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941) 換阪急京都線特急 → [烏丸](https://www.google.com/maps/search/?api=1&query=烏丸站)（約 55 分，¥650）",
          notes: [
            { type: "info", text: "刷 ICOCA 即可，無需買紙票" },
          ],
          todo: "前往京都並在烏丸下車，步行 10 分鐘至咖啡廳",
        },
        {
          time: "08:00",
          activity: "[INODA咖啡 本店](https://maps.app.goo.gl/vpBvQCnQtD7jsNk69) 享用早餐",
          notes: [
            { type: "info", text: "08:00–08:50 用餐" },
            { type: "info", text: "🚗 早餐後至清水寺銜接方案：<br>• Plan A (207 公車)：於 [四條高倉公車站](https://maps.app.goo.gl/92Qkp99nk13GCpje9?q=35.0037313,135.7616107) 搭乘 207 路至 [清水道公車站](https://maps.app.goo.gl/V9BbPGyWTHi9db199?q=34.9965046,135.7768302) 下車，步行 750 公尺上坡至仁王門。<br>• Plan B (計程車備案)：若時間落後，使用 GO App 叫車直達 [清水寺](https://maps.app.goo.gl/Kv3RuMopX8dmE4Cg8?q=34.9946662,135.784661) 仁王門（可直接載到門口，避開 Plan A 最累的 12 分鐘上坡路段）" },
            { type: "warn", text: "需提前下載 GO App 以防萬一" }
          ],
          todo: "早餐：[INODA咖啡 本店](https://maps.app.goo.gl/vpBvQCnQtD7jsNk69)",
        },
        {
          time: "09:15",
          activity: "[清水寺](https://maps.app.goo.gl/iyK9fv1AT5nYJVXx5?q=34.9946662,135.784661)",
          notes: [
            { type: "warn", text: "趁人少；選「二年坂往上拍」清水舞台視角最佳" },
          ],
          todo: "可提前購買電子票避免排隊",
        },
        {
          time: "11:00",
          activity: "[二寧坂](https://maps.app.goo.gl/uoMtMkpQHuZc43J9A) / [三年坂](https://maps.app.goo.gl/74xPSBCa5ovELvNT9) ➞ [花見小路](https://maps.app.goo.gl/mR8HnRpf8NuKE4mP8?q=35.0014922,135.7746403) 散步",
          notes: [
            { type: "info", text: "從三年坂走下來後，往西北方向步行約 10-15 分鐘即可抵達花見小路，先欣賞古色古香的茶屋建築（不安排大餐，避免與下午漢堡排衝突）" }
          ],
          todo: null,
        },
        {
          time: "13:00",
          activity: "[八坂神社 西樓門](https://maps.app.goo.gl/Gbyrfude4JBfyX78A?q=35.0037437,135.7775306)",
          notes: [
            { type: "info", text: "花見小路走到盡頭就是四條通，右轉步行不到 5 分鐘即可抵達八坂神社正門（西樓門）" }
          ],
          todo: null,
        },
        {
          time: "13:40",
          activity: "祇園散步吃東西：[GION GOZU 四条店](https://maps.app.goo.gl/ZwnESJTGKBdykDGY6?q=35.0036644,135.7762665) ➞ [鳴門鯛燒本舖](https://maps.app.goo.gl/wLq1fBpu3CZv3WiE8?q=35.003997,135.772745) ➞ [京都漢堡排 Conel](https://maps.app.goo.gl/227vkH3jeeyYBCiL8?q=35.0042233,135.7706292)",
          notes: [
            { type: "info", text: "從八坂神社往西（往鴨川/車站方向）沿著四條通走，順路吃回車站：布丁 ➞ 鯛魚燒 ➞ 漢堡排，完全不走回頭路" }
          ],
          todo: "點心：布丁、鯛魚燒\n下午餐：漢堡排",
        },
        {
          time: "15:30",
          activity: "至 [祇園四條站](https://maps.app.goo.gl/5BAJeMgCNPaT6YPs8?q=35.0033014,135.7719122) 搭乘京阪本線前往 [伏見稻荷站](https://maps.app.goo.gl/4V97VPTXq3NBCk2A8?q=34.9687187,135.7693455)",
          notes: [
            { type: "info", text: "步行與車程約 10 分鐘，刷 ICOCA 即可" }
          ],
          todo: null,
          mapQuery: "祇園四條站",
          mapLink: "https://maps.app.goo.gl/5BAJeMgCNPaT6YPs8?q=35.0033014,135.7719122",
        },
        {
          time: "15:50",
          activity: "[伏見稻荷大社](https://maps.app.goo.gl/Hp9iJ5RnUasTqLrv5)",
          notes: [
            { type: "info", text: "從伏見稻荷大社大鳥居開始進去" },
            { type: "warn", text: "建議往鳥居深處走（遠離入口人少出片）；6 梅雨季建議帶折疊傘" }
          ],
          todo: null,
        },
        {
          time: "17:30",
          activity: "搭京阪返回大阪",
          notes: [
            { type: "warn", text: "預留 5–10 分鐘容錯緩衝；從 [伏見稻荷站](https://maps.app.goo.gl/4V97VPTXq3NBCk2A8?q=34.9687187,135.7693455)（京阪本線普通/準急）→ [丹波橋站](https://maps.app.goo.gl/EytrhYxPTbmms9tP8)內換乘同線特急列車（往大阪方向）→ [北濱站](https://maps.app.goo.gl/ZHWQPQmYiGVjqgau7)下車，站內轉乘地鐵堺筋線（北濱 K14）→ 搭至日本橋（K17）" }
          ],
          todo: null,
        },
        {
          time: "18:30",
          activity: "抵達大阪 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)",
          notes: [],
          todo: null,
        },
        {
          time: "19:00",
          activity: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) 晚餐",
          notes: [
            { type: "info", text: "[串家物語 Namba Parks](https://maps.app.goo.gl/wCm3k29WWo5fgsPK8)（自助炸串，無需預約）" },
          ],
          todo: "晚餐：待選",
        },
      ],
      routes: [
        {
          title: "去程路線：日本橋 → 烏丸（NAVITIME 確認版）",
          segments: [
            { segment: 1, route: "OsakaMetro 堺筋線（往北千里）→ 直通阪急千里線（同車廂，坐著不動）", from: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197) 2 番月台",  to: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941)",       duration: "約 17 分", cost: "¥240",  note: "" },
            { segment: 2, route: "阪急京都線特急（往京都河原町）",                                         from: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941) 2・3 番月台", to: "[烏丸](https://www.google.com/maps/search/?api=1&query=烏丸站)", duration: "約 30 分", cost: "¥410",  note: "" },
          ],
          summary: "總計：約 55 分鐘（不含步行）　¥650　換乘 1 次（淡路站換月台）",
          tips: [
            "上車前確認車頭方向牌寫「北千里」或「高槻市」，兩個都會經過淡路",
            "全程刷 ICOCA，不需買紙票",
          ],
        },
        {
          title: "回程路線：京都河原町 → 日本橋飯店",
          segments: [
            { segment: 1, route: "阪急京都線特急（往大阪梅田）",              from: "[京都河原町](https://maps.app.goo.gl/APvfnTQbSnzSSRsQA)",    to: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941)",         duration: "約 35 分", cost: "",      note: "" },
            { segment: 2, route: "阪急千里線 → 直通堺筋線（同車廂，坐著不動）", from: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941)",          to: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)（K17）", duration: "約 20 分", cost: "",      note: "" },
            { segment: 3, route: "步行",                                         from: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)（K17）", to: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) / 難波", duration: "約 10 分", cost: "",      note: "吃晚餐逛街" },
            { segment: 4, route: "步行",                                         from: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) / 難波", to: "[日本橋飯店](https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8)",    duration: "約 8 分",  cost: "",      note: "逛完後步行回飯店" },
          ],
          summary: "總計：約 55 分鐘（不含逛街）　換乘 1 次（淡路站換月台）",
          tips: [
            "全程刷 ICOCA，不需買紙票",
          ],
        },
      ],
    },

    {
      day: 3,
      date: "6/20（六）",
      theme: "南區掃街，機場過夜",
      dateStr: "2026-06-20",
      events: [
        {
          time: "09:00",
          activity: "起床整理、打包行李",
          notes: [],
          todo: null,
        },
        {
          time: "09:45",
          activity: "退房，寄放行李",
          notes: [],
          todo: null,
        },
        {
          time: "10:00–10:45",
          activity: "[黑門市場](https://maps.app.goo.gl/zKjNxecm8j4Rrny89)",
          notes: [
            { type: "ok",   text: "不需預約" },
            { type: "warn", text: "以早午餐為主，吃快一點就能收掉（ex: 明石燒）" },
          ],
          todo: "早午餐：待選（邊走邊吃）",
        },
        {
          time: "11:00–13:00",
          activity: "[大阪城](https://maps.app.goo.gl/tB9Agj857Rj2F3va7)",
          notes: [
            { type: "ok",   text: "公園免費開放　天守閣 9:00–18:00（最晚入場 17:30）" },
            { type: "warn", text: "上天守閣建議抓 1.5–2 小時" },
          ],
          todo: null,
        },
        {
          time: "13:15–14:00",
          activity: "[日本橋電電街](https://maps.app.goo.gl/qzQ9jbrmuSyZkKLKA) / [千日前道具屋筋](https://maps.app.goo.gl/5gokAdbwdQ4Sp1gC6)",
          notes: [
            { type: "ok", text: "不需預約　保持短逛，避免壓縮後面行程" },
          ],
          todo: "逛街：電器 / 模型 / 廚具",
        },
        {
          time: "14:15–15:15",
          activity: "[通天閣](https://maps.app.goo.gl/eFswsy7cd3cw8VyA9)",
          notes: [
            { type: "ok",   text: "不需預約" },
            { type: "warn", text: "上塔與拍照抓 1 小時較穩" },
          ],
          todo: "小食：新世界串炸（待選）",
        },
        {
          time: "15:30–18:30",
          activity: "[心齋橋](https://maps.app.goo.gl/pRQToFCrVxBBiFHs7) / [道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA)",
          notes: [
            { type: "ok",   text: "不需預約" },
            { type: "warn", text: "人潮極多；購物 / 晚餐留彈性，此段不要壓縮" },
          ],
          todo: "逛街：藥妝 / 雜貨 / 伴手禮\n晚餐：待選（大阪最後一頓正餐，建議吃好）",
        },
        {
          time: "20:00",
          activity: "回飯店拿行李",
          notes: [],
          todo: null,
        },
        {
          time: "21:00",
          activity: "[南海難波站](https://maps.app.goo.gl/VDgx7G3ZTtAmHUNN8)搭南海電鐵空港急行（走南海本線直通機場線）前往關西機場站",
          notes: [
            { type: "warn", text: "南海難波站 ≠ 地鐵難波站，需步行前往搭車（約 ¥970，44 分）　21:30 出發亦可，21:00 更穩" },
          ],
          todo: null,
        },
        {
          time: "21:44 左右",
          activity: "抵達[關西機場站](https://maps.app.goo.gl/8zbuZeHNSWzNMvFZ6)，前往 Aeroplaza",
          notes: [
            { type: "info", text: "關西機場站與 Aeroplaza 為相連動線，準備前往 2F NODOKA" },
          ],
          todo: null,
        },
        {
          time: "22:00–05:15",
          activity: "[NODOKA](https://maps.app.goo.gl/QWkiNYRwmSsQ7LHn7) 洗澡／休息／整理行李",
          notes: [
            { type: "warn", text: "先看 NODOKA 現場排隊狀況，優先處理淋浴或休息位；Aeroplaza 2F，24 小時，¥1,400 / 40 分鐘（含備品）" },
          ],
          todo: null,
        },
      ],
    },

    {
      day: 4,
      date: "6/21（日）",
      theme: "滿載而歸",
      dateStr: "2026-06-21",
      events: [
        {
          time: "04:15–04:30",
          activity: "收拾、離開 NODOKA",
          notes: [],
          todo: "早餐：可在便利商店或 NODOKA 隨手帶解決",
        },
        {
          time: "04:30–04:57",
          activity: "Aeroplaza 1F 搭免費接駁車前往第二航廈 T2",
          notes: [
            { type: "info", text: "免費接駁車車程約 7 分鐘；出關西機場站驗票口右轉，穿過 Aeroplaza 下至 1F 前方" },
            { type: "info", text: "4 時班次：04:00 / 04:50（搭 04:50 班，約 04:57 抵達 T2）" },
          ],
          todo: null,
          images: [
            { src: "images/接駁巴士（免費）乘車處位置第1航廈、關西機場站→前往第2航廈.png", alt: "Aeroplaza 1F / 關西機場站 ➞ 前往第 2 航廈接駁巴士乘車處" },
            { src: "images/Peach_接駁巴士乘車處指南.jpg", alt: "Peach 官方：前往 T2 接駁巴士乘車處指南" },
            { src: "images/From Terminal 1, Aeroplaza → To Terminal 2 時刻表.png", alt: "第 1 航廈 / Aeroplaza → 第 2 航廈接駁巴士時刻表" },
          ],
        },
        {
          time: "05:00–07:00",
          activity: "第二航廈 T2 辦理 Peach 報到／託運行李／安檢前準備",
          notes: [
            { type: "warn", text: "Peach 國際線報到時間為起飛前 120 至 50 分鐘，07:00 截止報到（極重要，逾時無法登機）" },
            { type: "info", text: "報到櫃台：T2 1F，接駁車下車後左側入口進入。先至 BAGGAGE TAG KIOSK 列印行李條，再前往行李託運處辦理" },
            { type: "warn", text: "安檢截止：起飛前 25 分鐘（07:25）前必須通過安全檢查" },
            { type: "tip",  text: "約 05:00 抵達排隊，預留充足的託運與安檢時間" },
          ],
          todo: "07:00 前完成報到手續",
          images: [
            { src: "images/Peach_T2報到櫃台位置圖.png", alt: "Peach T2 報到櫃台位置圖（T2 1F，接駁車下車後左側入口）" },
          ],
        },
        {
          time: "07:50",
          activity: "起飛",
          notes: [],
          todo: null,
        },
      ],
    },
  ],

  requiredActions: [
    { priority: "強烈建議",           action: "清水寺電子票（避免排隊）" },
    { priority: "強烈建議",           action: "大阪城電子票（避免排隊）" },
    { priority: "行為策略（最重要）", action: "NODOKA → 一到機場直接去排（這是唯一會真的影響你流程的點）" },
  ],

  bottleneck: "唯一真正的 bottleneck 是「機場淋浴資源競爭」，其次才是「觀景台黃金時段流量控制」。",
};
