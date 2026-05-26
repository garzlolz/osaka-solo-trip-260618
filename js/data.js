export const TRIP_DATA = {
  meta: {
    title: "2026 大阪獨旅",
    dateRange: "06/18 ~ 06/21",
    updatedAt: "2026-05-26 18:05",
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
          mapQuery: "桃園國際機場+第一航廈",
          mapLink: "https://maps.app.goo.gl/dzmAMSbdhjswSMUd6",
        },
        {
          time: "22:00 左右",
          activity: "抵達 [關西機場 T2](https://maps.app.goo.gl/5Zq5tejrX3wrYNDW9)，辦理入境 / 領行李",
          notes: [
            { type: "warn", text: "入境審查 20–60 分鐘浮動，遇高峰請多預留時間" },
          ],
          todo: null,
          mapQuery: "關西國際機場+第二航廈",
          mapLink: "https://maps.app.goo.gl/5Zq5tejrX3wrYNDW9",
        },
        {
          time: "22:30 左右",
          activity: "INNN 接駁專車（訂單 2026-1588178）→ 前往市區",
          notes: [
            { type: "info", text: "出關後依序：➞ 前往 INNN 櫃台核對（T2 國際線到達口左側黃色沙發區）➞ 等候接駁（每 30 分一班，發車前 10 分在櫃台集合）" },
            { type: "warn", text: "若錯過會順延至下一班；櫃台營業：07:00–00:10" },
          ],
          todo: null,
        },
        {
          time: "23:30 左右",
          activity: "抵達 [東橫INN大阪日本橋文樂劇場前](https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8) 辦理入住",
          notes: [
            { type: "info", text: "視出關與等車時間而定" },
          ],
          todo: null,
          mapQuery: "東橫INN+大阪日本橋文樂劇場前",
          mapLink: "https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8",
        },
        {
          time: "深夜",
          activity: "[道頓堀](https://maps.app.goo.gl/bvfxbKrwDbBgiV23A)",
          notes: [
            { type: "ok", text: "不需預約／僅人多" },
          ],
          todo: "宵夜：待選",
          mapQuery: "道頓堀",
          mapLink: "https://maps.app.goo.gl/bvfxbKrwDbBgiV23A",
        },
      ],
      subsections: [
        {
          type: "images",
          title: "INNN 機場 T2 接機處",
          images: [
            { src: "public/images/INNN_機場T2接機處路線圖.png", alt: "關西機場 T2 平面圖，INNN 櫃台位於國際線到着口左側" },
            { src: "public/images/INNN_路線環境圖.png",         alt: "T2 航廈實景，出口左轉即可看到 INNN" },
          ],
        },
        {
          type: "risks",
          title: "⚠️ INNN 接駁風險與應對",
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
          time: "08:00",
          activity: "從 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A) 搭乘堺筋線 → [淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9) 轉乘阪急京都線特急 → [京都河原町](https://maps.app.goo.gl/APvfnTQbSnzSSRsQA)（約 58 分，¥650）",
          notes: [
            { type: "info", text: "刷 ICOCA 即可，無需買紙票" },
          ],
          todo: "早餐：[丸福珈琲店 千日前本店](https://maps.app.goo.gl/7Ch8e5ETpJLp98x37)（8 點營業，出發前解決）",
          mapQuery: "丸福珈琲店+千日前本店",
          mapLink: "https://maps.app.goo.gl/7Ch8e5ETpJLp98x37",
        },
        {
          time: "09:00",
          activity: "抵達 [京都河原町](https://maps.app.goo.gl/APvfnTQbSnzSSRsQA)",
          notes: [],
          todo: null,
          mapQuery: "京都河原町站",
          mapLink: "https://maps.app.goo.gl/APvfnTQbSnzSSRsQA",
        },
        {
          time: "09:15",
          activity: "[清水寺](https://maps.app.goo.gl/iyK9fv1AT5nYJVXx5)",
          notes: [
            { type: "warn", text: "趁人少；選「二年坂往上拍」清水舞台視角最佳" },
          ],
          todo: "✔ 可提前購買電子票避免排隊",
          mapQuery: "清水寺",
          mapLink: "https://maps.app.goo.gl/iyK9fv1AT5nYJVXx5",
        },
        {
          time: "11:00",
          activity: "[二寧坂](https://maps.app.goo.gl/uoMtMkpQHuZc43J9A) / [三年坂](https://maps.app.goo.gl/74xPSBCa5ovELvNT9)",
          notes: [],
          todo: "午餐：奧丹豆腐料理 / 三年坂茶寮（建議提前記好店名）",
          mapQuery: "二寧坂",
          mapLink: "https://maps.app.goo.gl/uoMtMkpQHuZc43J9A",
        },
        {
          time: "13:00",
          activity: "祇園、[花見小路](https://maps.app.goo.gl/M4rJ6a5v521zZ4ZNA)散步",
          notes: [],
          todo: null,
          mapQuery: "花見小路",
          mapLink: "https://maps.app.goo.gl/M4rJ6a5v521zZ4ZNA",
        },
        {
          time: "14:30",
          activity: "[八坂神社](https://maps.app.goo.gl/wJ5c7b3rL2P6j1aX7)",
          notes: [],
          todo: null,
          mapQuery: "八坂神社",
          mapLink: "https://maps.app.goo.gl/wJ5c7b3rL2P6j1aX7",
        },
        {
          time: "15:15",
          activity: "搭京阪前往伏見稻荷",
          notes: [
            { type: "info", text: "從 [祇園四條站](https://maps.app.goo.gl/yC7L9n9uB1Rk5o3X8) 搭乘京阪，約 5 分鐘" },
          ],
          todo: null,
          mapQuery: "祇園四條站",
          mapLink: "https://maps.app.goo.gl/cG8VV8XZTLheFNFU7",
        },
        {
          time: "15:30",
          activity: "[伏見稻荷大社](https://maps.app.goo.gl/Hp9iJ5RnUasTqLrv5)",
          notes: [
            { type: "info", text: "從伏見稻荷大社大鳥居開始進去" },
            { type: "warn", text: "建議往鳥居深處走（遠離入口人少出片）；6 月梅雨季建議帶折疊傘" },
          ],
          todo: null,
          mapQuery: "伏見稻荷大社 大鳥居(入口)",
          mapLink: "https://maps.app.goo.gl/Hp9iJ5RnUasTqLrv5",
        },
        {
          time: "17:30",
          activity: "搭京阪返回大阪",
          notes: [
            { type: "warn", text: "預留 5–10 分鐘容錯緩衝（梅雨季偶有延誤）；從 [伏見稻荷站](https://maps.app.goo.gl/6t7oEyFVmsKrTsPK6)（京阪普通）→ 丹波橋換特急 → 淀屋橋下車，步行約 3–5 分至北濱站（堺筋線 K14）→ 搭堺筋線至日本橋（K17）" },
          ],
          todo: null,
          mapQuery: "伏見稻荷站",
          mapLink: "https://maps.app.goo.gl/6t7oEyFVmsKrTsPK6",
        },
        {
          time: "18:30",
          activity: "抵達大阪 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A)",
          notes: [],
          todo: null,
          mapQuery: "日本橋站+大阪",
          mapLink: "https://maps.app.goo.gl/kCabn4TkMCpc28f2A",
        },
        {
          time: "19:00",
          activity: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) 晚餐",
          notes: [
            { type: "info", text: "串家物語（自助炸串，無需預約）" },
          ],
          todo: "晚餐：待選",
          mapQuery: "串家物語+道頓堀店",
          mapLink: "https://maps.app.goo.gl/JfTtUShoXsFDNsLaA",
        },
      ],
      routes: [
        {
          title: "去程路線：日本橋 → 京都河原町（NAVITIME 確認版）",
          segments: [
            { segment: 1, route: "OsakaMetro 堺筋線（往北千里）→ 直通阪急千里線（同車廂，坐著不動）", from: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A) 2 番月台",  to: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9)",       duration: "約 17 分", cost: "¥240",  note: "" },
            { segment: 2, route: "阪急京都線特急（往京都河原町）",                                         from: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9) 2・3 番月台", to: "[京都河原町](https://maps.app.goo.gl/APvfnTQbSnzSSRsQA)", duration: "約 35 分", cost: "¥410",  note: "" },
          ],
          summary: "總計：約 58 分鐘　¥650　換乘 1 次（淡路站換月台）",
          tips: [
            "✔ 上車前確認車頭方向牌寫「北千里」或「高槻市」，兩個都會經過淡路",
            "✔ 全程刷 ICOCA，不需買紙票",
          ],
        },
        {
          title: "回程路線：京都河原町 → 日本橋飯店",
          segments: [
            { segment: 1, route: "阪急京都線特急（往大阪梅田）",              from: "[京都河原町](https://maps.app.goo.gl/APvfnTQbSnzSSRsQA)",    to: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9)",         duration: "約 35 分", cost: "",      note: "" },
            { segment: 2, route: "阪急千里線 → 直通堺筋線（同車廂，坐著不動）", from: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9)",          to: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A)（K17）", duration: "約 20 分", cost: "",      note: "" },
            { segment: 3, route: "步行",                                         from: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A)（K17）", to: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) / 難波", duration: "約 10 分", cost: "",      note: "吃晚餐逛街" },
            { segment: 4, route: "步行",                                         from: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) / 難波", to: "日本橋飯店",    duration: "約 8 分",  cost: "",      note: "逛完後步行回飯店" },
          ],
          summary: "總計：約 55 分鐘（不含逛街）　換乘 1 次（淡路站換月台）",
          tips: [
            "✔ 全程刷 ICOCA，不需買紙票",
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
          activity: "黑門市場",
          notes: [
            { type: "ok",   text: "不需預約" },
            { type: "warn", text: "以早午餐為主，吃快一點就能收掉（ex: 明石燒）" },
          ],
          todo: "早午餐：待選（邊走邊吃）",
          mapQuery: "黑門市場",
          mapLink: "https://www.google.com/maps/search/?api=1&query=黑門市場",
        },
        {
          time: "11:00–13:00",
          activity: "大阪城",
          notes: [
            { type: "ok",   text: "公園免費開放　天守閣 9:00–18:00（最晚入場 17:30）" },
            { type: "warn", text: "上天守閣建議抓 1.5–2 小時" },
          ],
          todo: null,
          mapQuery: "大阪城",
          mapLink: "https://www.google.com/maps/search/?api=1&query=大阪城",
        },
        {
          time: "13:15–14:00",
          activity: "日本橋電電街 / 千日前道具屋筋",
          notes: [
            { type: "ok", text: "不需預約　保持短逛，避免壓縮後面行程" },
          ],
          todo: "逛街：電器 / 模型 / 廚具",
          mapQuery: "日本橋電電街",
          mapLink: "https://www.google.com/maps/search/?api=1&query=日本橋電電街",
        },
        {
          time: "14:15–15:15",
          activity: "通天閣",
          notes: [
            { type: "ok",   text: "不需預約" },
            { type: "warn", text: "上塔與拍照抓 1 小時較穩" },
          ],
          todo: "小食：新世界串炸（待選）",
          mapQuery: "通天閣",
          mapLink: "https://www.google.com/maps/search/?api=1&query=通天閣",
        },
        {
          time: "15:30–18:30",
          activity: "心齋橋 / 道頓堀",
          notes: [
            { type: "ok",   text: "不需預約" },
            { type: "warn", text: "人潮極多；購物 / 晚餐留彈性，此段不要壓縮" },
          ],
          todo: "逛街：藥妝 / 雜貨 / 伴手禮\n晚餐：待選（大阪最後一頓正餐，建議吃好）",
          mapQuery: "心齋橋筋商店街",
          mapLink: "https://www.google.com/maps/search/?api=1&query=心齋橋筋商店街",
        },
        {
          time: "20:00",
          activity: "回飯店拿行李",
          notes: [],
          todo: null,
        },
        {
          time: "21:00",
          activity: "南海難波站搭南海電鐵空港急行（走南海本線直通機場線）前往關西機場站",
          notes: [
            { type: "warn", text: "南海難波站 ≠ 地鐵難波站，需步行前往搭車（約 ¥970，44 分）　21:30 出發亦可，21:00 更穩" },
          ],
          todo: null,
          mapQuery: "南海難波站",
          mapLink: "https://www.google.com/maps/search/?api=1&query=南海難波站",
        },
        {
          time: "21:44 左右",
          activity: "抵達關西機場站，前往 Aeroplaza 2F 的 NODOKA（洗澡、休息、安頓）",
          notes: [
            { type: "info", text: "關西機場站與 Aeroplaza 為相連動線" },
          ],
          todo: null,
          mapQuery: "關西國際機場+第一航廈",
          mapLink: "https://www.google.com/maps/search/?api=1&query=關西國際機場+第一航廈",
        },
        {
          time: "22:15–23:00",
          activity: "NODOKA / Aeroplaza 安頓",
          notes: [
            { type: "warn", text: "先看 NODOKA 現場排隊狀況，優先處理淋浴或休息位" },
            { type: "tip",  text: "若 NODOKA 拖太久，改用 Aeroplaza 付費淋浴作備案；NODOKA 位於 Aeroplaza 2F，與 1F 接駁車乘車處在同棟建築的上下樓" },
          ],
          todo: null,
          mapQuery: "KIX+Airport+Lounge+NODOKA",
          mapLink: "https://www.google.com/maps/search/?api=1&query=KIX+Airport+Lounge+NODOKA",
        },
        {
          time: "深夜",
          activity: "休息區",
          notes: [
            { type: "ok",   text: "免費區不需預約" },
            { type: "warn", text: "深夜可能需搶位置" },
          ],
          todo: null,
          mapQuery: "Aeroplaza",
          mapLink: "https://www.google.com/maps/search/?api=1&query=Aeroplaza",
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
          time: "05:00",
          activity: "起床整理",
          notes: [],
          todo: "早餐：機場便利商店隨手帶",
        },
        {
          time: "05:20",
          activity: "由 Aeroplaza 1F 搭免費接駁車前往第二航廈 T2",
          notes: [
            { type: "info", text: "車程約 7～9 分鐘；乘車處與 2F NODOKA 為同一建築" },
          ],
          todo: null,
        },
        {
          time: "05:40",
          activity: "抵達第二航廈 T2 辦理 Peach 報到與後續流程",
          notes: [
            { type: "warn", text: "可能排隊（但時間抓很安全）；回程機票以第二航廈 T2 為準" },
          ],
          todo: null,
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
    { priority: "✔ 強烈建議",           action: "清水寺電子票（避免排隊）" },
    { priority: "✔ 強烈建議",           action: "大阪城電子票（避免排隊）" },
    { priority: "✔ 行為策略（最重要）", action: "NODOKA → 一到機場直接去排（這是唯一會真的影響你流程的點）" },
  ],

  bottleneck: "唯一真正的 bottleneck 是「機場淋浴資源競爭」，其次才是「觀景台黃金時段流量控制」。",
};
