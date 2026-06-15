export const TRIP_DATA = {
  meta: {
    title: "2026 大阪獨旅",
    dateRange: "06/18 ~ 06/21",
    updatedAt: "2026-06-14 20:13",
    departureDate: "2026-06-18T18:15:00",
  },

  checklist: [
    { id: 1, text: "手機辦好 ICOCA 卡", done: true },
    {
      id: 2,
      text: "Visit Japan Web 登錄",
      done: true,
      url: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/",
    },
    {
      id: 3,
      text: "出國登錄（外交部）",
      done: true,
      url: "https://www.boca.gov.tw/sp-abre-main-1.html",
    },
    { id: 4, text: "辦理 e-SIM (DJB)", done: true },
    { id: 5, text: "準備清水寺門票現金 (500日圓)", done: true },
    { id: 6, text: "購買大阪城電子票 (Trip.com)", done: true },
    { id: 7, text: "確認 INNN 接駁車訂單（2026-1588***）", done: true },
    { id: 8, text: "確認 Peach MM028 & MM023 電子登機證", done: true },
    { id: 9, text: "換日幣 / 確認海外刷卡手續費", done: true },
    { id: 10, text: "下載 Google Maps 大阪離線地圖", done: true },
    { id: 11, text: "下載 Google 翻譯日文離線包", done: true },
    { id: 12, text: "下載日本計程車 GO App 並綁定信用卡（清水寺備用方案）", done: true },
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
          activity:
            "[桃園 T1](https://maps.app.goo.gl/dzmAMSbdhjswSMUd6) 搭乘 MM028 起飛",
          notes: [{ type: "info", text: "航班：MM028 (樂桃) T1 | 預訂編號：KTK***" }],
          todo: null,
        },
        {
          time: "22:00 左右",
          activity:
            "抵達 [關西機場 T2](https://maps.app.goo.gl/5Zq5tejrX3wrYNDW9)，辦理入境 / 領行李",
          notes: [
            {
              type: "warn",
              text: "入境審查 20–60 分鐘浮動，遇高峰請多預留時間",
            },
          ],
          todo: null,
        },
        {
          time: "22:30 左右",
          activity: "INNN 接駁專車（訂單 2026-1588***）→ 前往市區",
          notes: [
            {
              type: "info",
              text: "出關後依序：➞ 前往 INNN 櫃台核對（T2 國際線到達口左側黃色沙發區）➞ 等候接駁（每 30 分一班，發車前 10 分在櫃台集合）",
            },
            {
              type: "warn",
              text: "若錯過會順延至下一班；櫃台營業：07:00–00:10",
            },
            {
              type: "ok",
              text: "系統單號：P2026031318****** (施*勲 / 1人)",
            },
          ],
          todo: null,
          images: [
            {
              src: "images/INNN_機場T2接機處路線圖.png",
              alt: "關西機場 T2 平面圖，INNN 櫃台位於國際線到着口左側",
            },
            {
              src: "images/INNN_路線環境圖.png",
              alt: "T2 航廈實景，出口左轉即可看到 INNN",
            },
          ],
        },
        {
          time: "23:30 左右",
          activity:
            "抵達 [東橫INN大阪日本橋文樂劇場前](https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8) 辦理入住",
          notes: [
            { type: "info", text: "視出關與等車時間而定" },
            { type: "ok", text: "預訂確認碼：5581.***.*** (PIN: ****)" }
          ],
          todo: null,
        },
        {
          time: "深夜",
          activity: "[道頓堀](https://maps.app.goo.gl/bvfxbKrwDbBgiV23A)",
          notes: [{ type: "ok", text: "不需預約／僅人多" }],
          todo: "宵夜：待選",
        },
      ],
      subsections: [
        {
          type: "risks",
          title: "🏨 住宿確認資訊（已去識別化）",
          items: [
            {
              title: "飯店與聯絡資訊",
              detail:
                "東橫INN 大阪日本橋文樂劇場前 (東横INN大阪日本橋文楽劇場前)\n地址：[Chuo-ku Nipponbashi 1-13-2, Chuo Ward, Osaka, 542-0073, 日本](https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8)\n電話：+81 6 7668 4045",
            },
            {
              title: "入住與退房時間",
              detail:
                "入住：6/18（四）15:00 起\n退房：6/20（六）10:00 前（共 2 晚）\n⚠️ 特殊要求：已向飯店告知預計於 23:00~00:00 (深夜 0 點) 之間辦理入住",
            },
            {
              title: "房型與費用",
              detail:
                "雙人房－禁菸 (1 間客房，房價包含早餐)\n現場付款金額：JPY 15,978 (約 TWD 3,153，不含城市稅)",
            },
            {
              title: "預訂與個人資訊 (去識別化)",
              detail:
                "預訂確認碼：5581.***.*** / PIN 碼：****\n住客姓名：S*** H*** H*** / 電子信箱：o***@gmail.com",
            },
          ],
        },
        {
          type: "risks",
          title: "✈️ 機票確認資訊（已去識別化）",
          items: [
            {
              title: "航空公司與預訂編號",
              detail: "樂桃航空 (Peach)\n預訂編號：KTK***",
            },
            {
              title: "航班細節",
              detail:
                "去程 (MM028)：6/18（四）18:15 台北桃園 (T1) ➔ 22:00 大阪關西 (T2)\n回程 (MM023)：6/21（日）07:50 大阪關西 (T2) ➔ 09:55 台北桃園 (T1)",
            },
            {
              title: "旅客與行李 (去識別化)",
              detail:
                "乘客人數：2 人訂單，但**僅限 S*** H******* 獨自出發** (另一旅客 H*** Y******* 未同行)\n託運行李：1 件 (S*** H******* 加購 1 件)",
            },
            {
              title: "聯絡人資訊 (去識別化)",
              detail:
                "聯絡人：H*** Y******* / 信箱：i***@gmail.com / 電話：0928***397",
            },
          ],
        },
        {
          type: "risks",
          title: "🚗 接機服務確認資訊（已去識別化）",
          items: [
            {
              title: "服務項目",
              detail:
                "日本-INNN機場交通 | 關西機場往返大阪市區 (單程接機)",
            },
            {
              title: "訂單編號",
              detail:
                "訂單編號：2026-1588***\n系統單號：P2026031318******",
            },
            {
              title: "乘客與航班資訊 (去識別化)",
              detail:
                "乘客：施*勲 (1人)\n對應航班：6/18（四）22:00 抵達之 MM028 班機",
            },
            {
              title: "乘車指引與行李限制",
              detail:
                "1. 出關後前往 **T2 國際線到達口左側黃色沙發區** 的 INNN 櫃台核對資訊。\n2. 出示訂購憑證之 QR Code 進行核銷乘車。\n3. 行李限制：免費攜帶 1 件 32 吋行李箱 (三邊和 < 170cm) 與 1 件 20 吋登機箱 (三邊和 < 115cm)。\n4. 下車地點：東橫INN大阪日本橋文樂劇場前",
            },
          ],
        },
        {
          type: "risks",
          title: "INNN 接駁風險與應對",
          items: [
            {
              title: "入境 + 領行李超過 60 分",
              detail:
                "可能錯過某班並順延。建議在飛機上先打開 INNN 確認訊息、記下櫃台位置與營業時間；若預期要等較久，心理先預期等下一班。",
            },
            {
              title: "超額行李無法登車",
              detail:
                "現場因空間不足被退件。建議出發前確認行李件數與尺寸，若有大件行李請事先加購行李券或聯絡業者確認車種。",
            },
            {
              title: "深夜不熟櫃台位置",
              detail:
                "把櫃台位置（T2 國際線到達口左側黃色沙發區）截圖存入手機；飛機上先查好到達口路線，出關後直接前往櫃台位置。",
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
          activity:
            "從 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197) 2 番月台搭堺筋線（往北千里）→ [淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941) 換阪急京都線特急 → [烏丸](https://www.google.com/maps/search/?api=1&query=烏丸站&q=35.0036744,135.7605895)（約 55 分，¥650）",
          notes: [{ type: "info", text: "刷 ICOCA 即可，無需買紙票" }],
          todo: "前往京都並在烏丸下車，步行 10 分鐘至咖啡廳",
        },
        {
          time: "08:00",
          activity:
            "[INODA咖啡 本店](https://maps.app.goo.gl/vpBvQCnQtD7jsNk69) 享用早餐",
          notes: [
            { type: "info", text: "08:00–08:50 用餐" },
            {
              type: "info",
              text: "🚗 早餐後至清水寺銜接方案：<br>• Plan A (207 公車)：於 [四條高倉公車站](https://maps.app.goo.gl/92Qkp99nk13GCpje9?q=35.0037313,135.7616107) 搭乘 207 路至 [清水道公車站](https://maps.app.goo.gl/V9BbPGyWTHi9db199?q=34.9965046,135.7768302) 下車，步行 750 公尺上坡至仁王門。<br>• Plan B (計程車備案)：若時間落後，使用 GO App 叫車直達 [清水寺](https://maps.app.goo.gl/Kv3RuMopX8dmE4Cg8?q=34.9946662,135.784661) 仁王門（可直接載到門口，避開 Plan A 最累的 12 分鐘上坡路段）",
            },
            { type: "warn", text: "需提前下載 GO App 以防萬一" },
          ],
          todo: "早餐：[INODA咖啡 本店](https://maps.app.goo.gl/vpBvQCnQtD7jsNk69)",
        },
        {
          time: "09:15",
          activity:
            "[清水寺](https://maps.app.goo.gl/iyK9fv1AT5nYJVXx5?q=34.9946662,135.784661)",
          notes: [
            {
              type: "warn",
              text: "趁人少；選「二年坂往上拍」清水舞台視角最佳",
            },
          ],
          todo: "現場售票處排隊購買，僅收現金（成人 500 日圓）",
        },
        {
          time: "11:00",
          activity:
            "[二寧坂](https://maps.app.goo.gl/uoMtMkpQHuZc43J9A) / [三年坂](https://maps.app.goo.gl/74xPSBCa5ovELvNT9?q=34.9966644,135.781008) ➞ [花見小路](https://maps.app.goo.gl/mR8HnRpf8NuKE4mP8?q=35.0014922,135.7746403) 散步",
          notes: [
            {
              type: "info",
              text: "從三年坂走下來後，往西北方向步行約 10-15 分鐘即可抵達花見小路，先欣賞古色古香的茶屋建築（不安排大餐，避免與下午漢堡排衝突）",
            },
          ],
          todo: null,
        },
        {
          time: "13:00",
          activity:
            "[八坂神社 西樓門](https://maps.app.goo.gl/Gbyrfude4JBfyX78A?q=35.0037437,135.7775306)",
          notes: [
            {
              type: "info",
              text: "花見小路走到盡頭就是四條通，右轉步行不到 5 分鐘即可抵達八坂神社正門（西樓門）",
            },
          ],
          todo: null,
        },
        {
          time: "13:40",
          activity:
            "祇園散步吃東西：[GION GOZU 四条店](https://maps.app.goo.gl/ZwnESJTGKBdykDGY6?q=35.0036644,135.7762665) ➞ [鳴門鯛燒本舖](https://maps.app.goo.gl/wLq1fBpu3CZv3WiE8?q=35.003997,135.772745) ➞ [京都漢堡排 Conel（已更名：京都ハンバーグ食堂 コネル）](https://maps.app.goo.gl/227vkH3jeeyYBCiL8?q=35.0042233,135.7706292)",
          notes: [
            {
              type: "info",
              text: "從八坂神社往西（往鴨川/車站方向）沿著四條通走，順路吃回車站：布丁 ➞ 鯛魚燒 ➞ 漢堡排，完全不走回頭路",
            },
            {
              type: "info",
              text: "京都漢堡排 Conel 已於 2026 年 2 月更名為「京都ハンバーグ食堂 コネル」並重新裝修開幕，主打 100% 牛肉漢堡排",
            },
          ],
          todo: "點心：布丁、鯛魚燒\n下午餐：漢堡排",
        },
        {
          time: "15:30",
          activity:
            "至 [祇園四條站](https://maps.app.goo.gl/5BAJeMgCNPaT6YPs8?q=35.0033014,135.7719122) 搭乘京阪本線前往 [伏見稻荷站](https://maps.app.goo.gl/4V97VPTXq3NBCk2A8?q=34.9687187,135.7693455)",
          notes: [
            { type: "info", text: "步行與車程約 10 分鐘，刷 ICOCA 即可" },
          ],
          todo: null,
          mapQuery: "祇園四條站",
          mapLink:
            "https://maps.app.goo.gl/5BAJeMgCNPaT6YPs8?q=35.0033014,135.7719122",
        },
        {
          time: "15:50",
          activity: "[伏見稻荷大社](https://maps.app.goo.gl/Hp9iJ5RnUasTqLrv5)",
          notes: [
            { type: "info", text: "從伏見稻荷大社大鳥居開始進去" },
            {
              type: "warn",
              text: "建議往鳥居深處走（遠離入口人少出片）；6 梅雨季建議帶折疊傘",
            },
          ],
          todo: null,
        },
        {
          time: "17:30",
          activity: "搭京阪返回大阪",
          notes: [
            {
              type: "warn",
              text: "預留 5–10 分鐘容錯緩衝；從 [伏見稻荷站](https://maps.app.goo.gl/4V97VPTXq3NBCk2A8?q=34.9687187,135.7693455)（京阪本線普通/準急）→ [丹波橋站](https://maps.app.goo.gl/EytrhYxPTbmms9tP8)內換乘同線特急列車（往大阪方向）→ [北濱站](https://maps.app.goo.gl/ZHWQPQmYiGVjqgau7)下車，站內轉乘地鐵堺筋線（北濱 K14）→ 搭至 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)（K17）",
            },
          ],
          todo: null,
        },
        {
          time: "18:30",
          activity:
            "抵達大阪 [日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)",
          notes: [],
          todo: null,
        },
        {
          time: "19:00",
          activity: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) 晚餐",
          notes: [
            {
              type: "info",
              text: "[千代松勝蓋飯](https://maps.app.goo.gl/KyAtYvBUzZ43kCRS6)（特厚切豬排蓋飯，千日前）",
            },
            {
              type: "info",
              text: "[吉次牛舌](https://maps.app.goo.gl/o8NTGnrBovVjvsgE7)（炭火燒牛舌，心齋橋）",
            },
            {
              type: "info",
              text: "[大阪鐵板燒居酒屋 Dorajyu](https://maps.app.goo.gl/CPbFXVQtjxGGDVzeA)（大阪燒/鐵板燒）",
            },
            {
              type: "info",
              text: "[新宿燒肉 牛舌的檸檬 大阪本店](https://maps.app.goo.gl/WTQmxqLaD7CFb2Cq9)（極厚切牛舌）",
            },
          ],
          todo: "晚餐：待選",
        },
      ],
      routes: [
        {
          title: "去程路線：日本橋 → 烏丸（NAVITIME 確認版）",
          segments: [
            {
              segment: 1,
              route:
                "OsakaMetro 堺筋線（往北千里）→ 直通阪急千里線（同車廂，坐著不動）",
              from: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197) 2 番月台",
              to: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941)",
              duration: "約 17 分",
              cost: "¥240",
              note: "",
            },
            {
              segment: 2,
              route: "阪急京都線特急（往京都河原町）",
              from: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941) 2・3 番月台",
              to: "[烏丸](https://www.google.com/maps/search/?api=1&query=烏丸站&q=35.0036744,135.7605895)",
              duration: "約 30 分",
              cost: "¥410",
              note: "",
            },
          ],
          summary:
            "總計：約 55 分鐘（不含步行）　¥650　換乘 1 次（淡路站換月台）",
          tips: [
            "上車前確認車頭方向牌寫「北千里」或「高槻市」，兩個都會經過淡路",
            "全程刷 ICOCA，不需買紙票",
          ],
        },
        {
          title: "回程路線：京都河原町 → 日本橋飯店",
          segments: [
            {
              segment: 1,
              route: "阪急京都線特急（往大阪梅田）",
              from: "[京都河原町](https://maps.app.goo.gl/APvfnTQbSnzSSRsQA)",
              to: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941)",
              duration: "約 35 分",
              cost: "",
              note: "",
            },
            {
              segment: 2,
              route: "阪急千里線 → 直通堺筋線（同車廂，坐著不動）",
              from: "[淡路](https://maps.app.goo.gl/vTQwZzBUuwFVaGxd9?q=34.7393654,135.5169941)",
              to: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)（K17）",
              duration: "約 20 分",
              cost: "",
              note: "",
            },
            {
              segment: 3,
              route: "步行",
              from: "[日本橋](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)（K17）",
              to: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) / [難波](https://maps.app.goo.gl/6BJv4MGhXyZNv2daA)",
              duration: "約 10 分",
              cost: "",
              note: "吃晚餐逛街",
            },
            {
              segment: 4,
              route: "步行",
              from: "[道頓堀](https://maps.app.goo.gl/JfTtUShoXsFDNsLaA) / [難波](https://maps.app.goo.gl/6BJv4MGhXyZNv2daA)",
              to: "[日本橋飯店](https://maps.app.goo.gl/fTt5JfTcHRqiNL1A8)",
              duration: "約 8 分",
              cost: "",
              note: "逛完後步行回飯店",
            },
          ],
          summary: "總計：約 55 分鐘（不含逛街）　換乘 1 次（淡路站換月台）",
          tips: ["全程刷 ICOCA，不需買紙票"],
        },
      ],
    },

    {
      day: 3,
      date: "6/20（六）",
      theme: "購物馬拉松：電電街 ➔ 百貨大採購",
      dateStr: "2026-06-20",
      events: [
        {
          time: "08:00",
          activity: "起床整理、打包行李",
          notes: [{ type: "info", text: "整理行李，準備退房" }],
          todo: null,
        },
        {
          time: "08:30",
          activity: "退房並寄放行李",
          notes: [
            {
              type: "info",
              text: "辦理退房，行李寄放在「東橫INN 大阪日本橋文樂劇場前」櫃台",
            },
            { type: "warn", text: "⚠️ 需確認飯店同意寄放至 19:30" },
          ],
          todo: null,
        },
        {
          time: "08:45–10:00",
          activity: "[黑門市場](https://maps.app.goo.gl/zKjNxecm8j4Rrny89)",
          notes: [
            {
              type: "info",
              text: "步行前往，完成早午餐；吃快一點就能收掉（ex: 明石燒）",
            },
          ],
          todo: "早午餐：待選（邊走邊吃）",
        },
        {
          time: "10:00",
          activity: "交通：黑門市場 ➞ 大阪城",
          notes: [
            {
              type: "info",
              text: "堺筋線（日本橋 ➞ [堺筋本町](https://maps.app.goo.gl/qGbYpBdXChLRxotX9)）➞ 站內轉乘中央線（➞ [谷町四丁目車站](https://maps.app.goo.gl/wux2cBwcoCqNQr2C7)（走樓梯 · 從9出站））➞ 步行至大阪城（約 30 分，¥190）",
            },
          ],
          todo: "刷 ICOCA 即可",
        },
        {
          time: "10:30–12:30",
          activity: "[大阪城](https://maps.app.goo.gl/tB9Agj857Rj2F3va7)",
          notes: [
            {
              type: "ok",
              text: "公園免費開放　天守閣 9:00–18:00（最晚入場 17:30）",
            },
            {
              type: "info",
              text: "跑完唯一較遠的景點；提早出發可避開中午最熱與最擠的登天守閣人潮",
            },
          ],
          todo: null,
        },
        {
          time: "12:30",
          activity: "交通：大阪城 ➞ 電器街",
          notes: [
            {
              type: "info",
              text: "步行至 [森之宮](https://maps.app.goo.gl/diD9Mw19MSaHp5F78) ➞ 搭中央線（➞ [堺筋本町](https://maps.app.goo.gl/qGbYpBdXChLRxotX9)）➞ 站內轉乘堺筋線（➞ [惠美須町](https://maps.app.goo.gl/z8Et7FF39bbqNARg8)）➞ 步行至[電器街](https://maps.app.goo.gl/Vp8Szq7hudPXo1878)（約 37 分，¥240）",
            },
          ],
          todo: "刷 ICOCA 即可",
        },
        {
          time: "13:00–15:00",
          activity:
            "[日本橋電器街](https://maps.app.goo.gl/Vp8Szq7hudPXo1878) / [千日前道具屋筋](https://maps.app.goo.gl/5gokAdbwdQ4Sp1gC6)",
          notes: [
            { type: "ok", text: "不需預約" },
            {
              type: "info",
              text: "從惠美須町站出發，由南往北逛回飯店方向，採買模型或電器",
            },
          ],
          todo: "逛街：電器 / 模型 / 廚具",
        },
        {
          time: "15:00–18:00",
          activity: "[難波](https://maps.app.goo.gl/6BJv4MGhXyZNv2daA)百貨大採購",
          notes: [
            {
              type: "info",
              text: "步行至 [高島屋](https://maps.app.goo.gl/FZJJxx5jNE9AviDo6)、[Namba Parks](https://maps.app.goo.gl/ZfReR9W9E2CEvvZ2A) 或 [難波CITY 本館](https://maps.app.goo.gl/Lst1Jbs3hmwBf7577)，亦可順路逛 [Edion 愛電王 難波總店](https://maps.app.goo.gl/4bxavCUCPaJaqNo16)（模型電器種類極多，退稅便利）",
            },
            { type: "warn", text: "2026 年退稅人潮較多，請預留退稅手續時間" },
          ],
          todo: "專櫃退稅、日系服飾、電器模型採購",
        },
        {
          time: "18:00–19:15",
          activity: "最後晚餐",
          notes: [
            {
              type: "info",
              text: "於 [難波站](https://maps.app.goo.gl/6BJv4MGhXyZNv2daA)周邊或百貨內用餐，避免人擠人，保存體力，且離飯店較近",
            },
          ],
          todo: "晚餐：待選（建議吃好）",
        },
        {
          time: "19:15–19:30",
          activity: "回飯店取行李",
          notes: [
            { type: "info", text: "從 [難波](https://maps.app.goo.gl/6BJv4MGhXyZNv2daA) 步行回飯店提領行李，確保在飯店櫃台要求的時間前領回" },
          ],
          todo: "取回寄放行李",
        },
        {
          time: "19:30–19:50",
          activity: "大廳戰利品裝箱",
          notes: [
            {
              type: "tip",
              text: "於飯店大廳整理行李，將下午採購的模型、衣物等戰利品塞入大行李箱，確保能順利關上",
            },
          ],
          todo: "整理戰利品進大行李箱",
        },
        {
          time: "19:50–20:10",
          activity: "交通：前往 [南海難波站](https://maps.app.goo.gl/VDgx7G3ZTtAmHUNN8)",
          notes: [
            {
              type: "info",
              text: "從飯店步行前往 [南海難波站](https://maps.app.goo.gl/VDgx7G3ZTtAmHUNN8)（約 1.1 公里，負重移動預留 20 分鐘以保安全）",
            },
          ],
          todo: "步行前往 [南海難波站](https://maps.app.goo.gl/VDgx7G3ZTtAmHUNN8)",
        },
        {
          time: "20:10",
          activity: "交通：[難波](https://maps.app.goo.gl/6BJv4MGhXyZNv2daA) ➞ 關西機場",
          notes: [
            {
              type: "info",
              text: "從 [南海難波站](https://maps.app.goo.gl/VDgx7G3ZTtAmHUNN8) 搭乘南海電鐵空港急行（約 44 分鐘，¥970）前往關西機場",
            },
          ],
          todo: "刷 ICOCA 即可",
        },
        {
          time: "21:00 左右",
          activity:
            "抵達 [關西機場站](https://maps.app.goo.gl/8zbuZeHNSWzNMvFZ6)，前往 [Aeroplaza](https://maps.app.goo.gl/ppZCDxsuGTNFmJL88)",
          notes: [
            {
              type: "info",
              text: "關西機場站與 [Aeroplaza](https://maps.app.goo.gl/ppZCDxsuGTNFmJL88) 為相連動線，準備前往 2F NODOKA",
            },
          ],
          todo: null,
        },
        {
          time: "21:00–05:15",
          activity:
            "[NODOKA](https://maps.app.goo.gl/QWkiNYRwmSsQ7LHn7) 洗澡／休息／整理行李",
          notes: [
            {
              type: "tip",
              text: "關鍵行動：抵達 [Aeroplaza](https://maps.app.goo.gl/ppZCDxsuGTNFmJL88) 2F 的 NODOKA，優先排隊洗澡並休息",
            },
            { type: "warn", text: "24 小時營業，使用 ICOCA 或卡片付費（淋浴 40 分鐘 1,500 日圓，毛巾另購 ¥440）" },
            { type: "tip", text: "持有 Priority Pass、LoungeKey 或指定 JCB 金卡以上，可享免費 2-3 小時休息，部分卡片亦能折抵淋浴費" },
          ],
          todo: null,
        },
      ],
      routes: [
        {
          title: "交通路線：黑門市場 → 大阪城",
          segments: [
            {
              segment: 1,
              route: "步行",
              from: "[黑門市場](https://maps.app.goo.gl/zKjNxecm8j4Rrny89)",
              to: "[日本橋站](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197)",
              duration: "約 4 分 (220m)",
              cost: "",
              note: "",
            },
            {
              segment: 2,
              route: "OsakaMetro 堺筋線普通（往北千里）",
              from: "[日本橋站](https://maps.app.goo.gl/kCabn4TkMCpc28f2A?q=34.6669677,135.5061197) 2 番月台 (K17)",
              to: "[堺筋本町站](https://maps.app.goo.gl/qGbYpBdXChLRxotX9)",
              duration: "約 3 分 (2站)",
              cost: "¥190 (包含段次3)",
              note: "車站 ID：K17",
            },
            {
              segment: 3,
              route: "站內轉乘中央線，搭乘中央線普通（往學研奈良登美丘）",
              from: "[堺筋本町站](https://maps.app.goo.gl/qGbYpBdXChLRxotX9) 1 番月台 (C17)",
              to: "[谷町四丁目站](https://maps.app.goo.gl/wux2cBwcoCqNQr2C7)",
              duration: "約 1 分 (1站)",
              cost: "",
              note: "轉乘步行約 1 分",
            },
            {
              segment: 4,
              route: "步行",
              from: "[谷町四丁目站](https://maps.app.goo.gl/wux2cBwcoCqNQr2C7) (C18)",
              to: "[大阪城](https://maps.app.goo.gl/tB9Agj857Rj2F3va7)",
              duration: "約 19 分 (1.3km)",
              cost: "",
              note: "",
            },
          ],
          summary:
            "總計：約 30 分鐘（乘車 24 分鐘）　¥190　換乘 1 次（堺筋本町站站內轉乘）",
          tips: [
            "黑門市場到地鐵站步行僅 220 公尺",
            "在堺筋本町站換乘中央線僅需步行約 1 分鐘，非常方便",
            "從 [谷町四丁目站](https://maps.app.goo.gl/wux2cBwcoCqNQr2C7)（走樓梯 · 從9出站）至大阪城天守閣步行約 19 分鐘 (約 1.3 公里)，全程刷 ICOCA 即可",
          ],
        },
        {
          title: "交通路線：大阪城 → 電器街",
          segments: [
            {
              segment: 1,
              route: "步行",
              from: "[大阪城](https://maps.app.goo.gl/tB9Agj857Rj2F3va7)",
              to: "[森之宮站](https://maps.app.goo.gl/diD9Mw19MSaHp5F78) (C19)",
              duration: "約 19 分 (1.4km)",
              cost: "",
              note: "",
            },
            {
              segment: 2,
              route: "OsakaMetro 中央線普通（往夢洲）",
              from: "[森之宮站](https://maps.app.goo.gl/diD9Mw19MSaHp5F78) 3 番月台 (C19)",
              to: "[堺筋本町站](https://maps.app.goo.gl/qGbYpBdXChLRxotX9)",
              duration: "約 4 分 (2站)",
              cost: "¥240 (包含段次4)",
              note: "車站 ID：C19",
            },
            {
              segment: 3,
              route: "站內轉乘堺筋線，搭乘堺筋線普通（往天下茶屋）",
              from: "[堺筋本町站](https://maps.app.goo.gl/qGbYpBdXChLRxotX9) 1 番月台 (K15)",
              to: "[惠美須町站](https://maps.app.goo.gl/z8Et7FF39bbqNARg8)",
              duration: "約 5 分 (3站)",
              cost: "",
              note: "轉乘步行約 1 分",
            },
            {
              segment: 4,
              route: "步行",
              from: "[惠美須町站](https://maps.app.goo.gl/z8Et7FF39bbqNARg8) (K18)",
              to: "[日本橋電電街](https://maps.app.goo.gl/Vp8Szq7hudPXo1878)",
              duration: "約 6 分 (500m)",
              cost: "",
              note: "",
            },
          ],
          summary:
            "總計：約 37 分鐘（乘車 26 分鐘）　¥240　換乘 1 次（堺筋本町站站內轉乘）",
          tips: [
            "從大阪城天守閣步行至 [森之宮站](https://maps.app.goo.gl/diD9Mw19MSaHp5F78) 約 1.4 公里，可沿途欣賞大阪城公園 green",
            "堺筋本町站轉乘僅需步行約 1 分鐘",
            "全程刷 ICOCA 即可",
          ],
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
          activity: "收拾、離開 [NODOKA](https://maps.app.goo.gl/QWkiNYRwmSsQ7LHn7)",
          notes: [],
          todo: "早餐：可在便利商店或 NODOKA 隨手帶解決",
        },
        {
          time: "04:30–04:57",
          activity: "[Aeroplaza](https://maps.app.goo.gl/ppZCDxsuGTNFmJL88) 1F 搭免費接駁車前往第二航廈 [T2](https://maps.app.goo.gl/5Zq5tejrX3wrYNDW9)",
          notes: [
            {
              type: "info",
              text: "免費接駁車車程約 7 分鐘；出關西機場站驗票口右轉，穿過 [Aeroplaza](https://maps.app.goo.gl/ppZCDxsuGTNFmJL88) 下至 1F 前方",
            },
            {
              type: "info",
              text: "接駁巴士為 24 小時免費運行，清晨班次約 10–20 分鐘一班（原規畫 04:50 班次，約 04:57 抵達 T2，時間非常充裕安全）",
            },
          ],
          todo: null,
          images: [
            {
              src: "images/接駁巴士（免費）乘車處位置第1航廈、關西機場站→前往第2航廈.png",
              alt: "Aeroplaza 1F / 關西機場站 ➞ 前往第 2 航廈接駁巴士乘車處",
            },
            {
              src: "images/Peach_接駁巴士乘車處指南.jpg",
              alt: "Peach 官方：前往 T2 接駁巴士乘車處指南",
            },
            {
              src: "images/From Terminal 1, Aeroplaza → To Terminal 2 時刻表.png",
              alt: "第 1 航廈 / Aeroplaza → 第 2 航廈接駁巴士時刻表",
            },
          ],
        },
        {
          time: "05:00–07:00",
          activity: "第二航廈 [T2](https://maps.app.goo.gl/5Zq5tejrX3wrYNDW9) 辦理 Peach 報到／託運行李／安檢前準備",
          notes: [
            {
              type: "warn",
              text: "Peach 國際線報到時間為起飛前 120 至 50 分鐘，07:00 截止報到（極重要，逾時無法登機）",
            },
            {
              type: "info",
              text: "報到櫃台：T2 1F，接駁車下車後左側入口進入。先至 BAGGAGE TAG KIOSK 列印行李條，再前往行李託運處辦理",
            },
            {
              type: "warn",
              text: "安檢截止：起飛前 25 分鐘（07:25）前必須通過安全檢查",
            },
            {
              type: "tip",
              text: "約 05:00 抵達排隊，預留充足的託運與安檢時間",
            },
            {
              type: "ok",
              text: "航班：MM023 (樂桃) T2 | 預訂編號：KTK*** | 託運行李：1 件",
            },
          ],
          todo: "07:00 前完成報到手續",
          images: [
            {
              src: "images/Peach_T2報到櫃台位置圖.png",
              alt: "Peach T2 報到櫃台位置圖（T2 1F，接駁車下車後左側入口）",
            },
          ],
        },
        {
          time: "07:50",
          activity: "起飛",
          notes: [{ type: "info", text: "抵達台北桃園 T1 (09:55)" }],
          todo: null,
        },
      ],
    },
  ],

  requiredActions: [
    { priority: "強烈建議", action: "準備清水寺門票現金 (500日圓，現場購票)" },
    { priority: "強烈建議 (已完成)", action: "大阪城電子票 (已透過 Trip.com 購買)" },
    {
      priority: "行為策略（最重要）",
      action: "NODOKA → 一到機場直接去排（這是唯一會真的影響你流程的點）",
    },
  ],

  bottleneck:
    "唯一真正的 bottleneck 是「機場淋浴資源競爭」，其次才是「觀景台黃金時段流量控制」。",

  packing: [
    { id: 101, category: "🛂 證件與貴重物品", text: "護照正本（確認效期）", done: false },
    { id: 102, category: "🛂 證件與貴重物品", text: "日幣現金 & 海外刷卡信用卡", done: false },
    { id: 103, category: "🛂 證件與貴重物品", text: "機票、飯店與接送確認單（紙本或存手機）", done: false },
    { id: 104, category: "🔋 3C 與隨身電器", text: "手機與充電線", done: false },
    { id: 105, category: "🔋 3C 與隨身電器", text: "行動電源 (必須隨身登機)", done: false },
    { id: 106, category: "🔋 3C 與隨身電器", text: "e-SIM QR Code 或安裝說明", done: false },
    { id: 107, category: "👕 衣物盥洗與生活", text: "換洗衣物兩天份 (短袖、內著、襪子等)", done: false },
    { id: 108, category: "👕 衣物盥洗與生活", text: "折疊雨傘 (6月梅雨季必備)", done: false },
    { id: 109, category: "👕 衣物盥洗與生活", text: "個人盥洗用品與小保養品", done: false },
    { id: 113, category: "👕 衣物盥洗與生活", text: "電動刮鬍刀", done: false },
    { id: 114, category: "👕 衣物盥洗與生活", text: "乳液", done: false },
    { id: 110, category: "💊 常用藥品與雜物", text: "安眠藥", done: false },
    { id: 112, category: "💊 常用藥品與雜物", text: "衛生紙", done: false },
    { id: 115, category: "💊 常用藥品與雜物", text: "打火機 (⚠️ 僅限隨身攜帶 1 個)", done: false },
  ],
};
