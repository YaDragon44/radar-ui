window.RADAR_TODAY = [];
window.RADAR_PORTFOLIO = [
  {
    "portfolio_id": "zhugan.public_portfolio",
    "portfolio_kind": "LIVE_PUBLIC",
    "short_title": "Жуган",
    "context": "PORTFOLIO",
    "asset_id": null,
    "classification": "NONE",
    "status": "NO_DECISION",
    "action": "HOLD",
    "priority": "NONE",
    "why": "Подтверждённый PORTFOLIO_STATE получен, но правило инвестиционного действия не авторизовано.",
    "quality": "LIVE",
    "risk": "NO_PORTFOLIO_RULE",
    "published_at": "2026-09-15T13:53:01+00:00",
    "source_ref": "https://t.me/clubwinwin/9180",
    "title": "Публичный портфель Жугана",
    "portfolio": {
      "value_rub": 114005,
      "cash_rub": 1564,
      "contributed_rub": 141000,
      "dividends_rub": 7979,
      "drawdown_rub": 27285,
      "week": 141,
      "positions": [
        {
          "name": "Артген",
          "ticker": "ABIO",
          "boardid": "TQBR",
          "quantity": 20,
          "unit": "shares",
          "quantity_label": "20"
        },
        {
          "name": "Астра",
          "ticker": "ASTR",
          "boardid": "TQBR",
          "quantity": 60,
          "unit": "shares",
          "quantity_label": "60"
        },
        {
          "name": "ВК",
          "ticker": "VKCO",
          "boardid": "TQBR",
          "quantity": 38,
          "unit": "shares",
          "quantity_label": "38"
        },
        {
          "name": "М.Видео",
          "ticker": "MVID",
          "boardid": "TQBR",
          "quantity": 5,
          "unit": "shares",
          "quantity_label": "5"
        },
        {
          "name": "Мечел",
          "ticker": "MTLR",
          "boardid": "TQBR",
          "quantity": 6,
          "unit": "shares",
          "quantity_label": "6"
        },
        {
          "name": "ММК",
          "ticker": "MAGN",
          "boardid": "TQBR",
          "quantity": 270,
          "unit": "shares",
          "quantity_label": "270"
        },
        {
          "name": "НМТП",
          "ticker": "NMTP",
          "boardid": "TQBR",
          "quantity": 2200,
          "unit": "shares",
          "quantity_label": "2 200"
        },
        {
          "name": "Новатэк",
          "ticker": "NVTK",
          "boardid": "TQBR",
          "quantity": 28,
          "unit": "shares",
          "quantity_label": "28"
        },
        {
          "name": "Роснефть",
          "ticker": "ROSN",
          "boardid": "TQBR",
          "quantity": 50,
          "unit": "shares",
          "quantity_label": "50"
        },
        {
          "name": "Россети",
          "ticker": "FEES",
          "boardid": "TQBR",
          "quantity": 280000,
          "unit": "shares",
          "quantity_label": "280 000"
        },
        {
          "name": "ТГК-1",
          "ticker": "TGKA",
          "boardid": "TQBR",
          "quantity": 600000,
          "unit": "shares",
          "quantity_label": "600 000"
        },
        {
          "name": "ЦИАН",
          "ticker": "CNRU",
          "boardid": "TQBR",
          "quantity": 9,
          "unit": "shares",
          "quantity_label": "9"
        },
        {
          "name": "Фонд Тинькофф Индекс Мосбиржи",
          "ticker": "TMOS",
          "boardid": "TQBR",
          "quantity": 44,
          "unit": "lots",
          "quantity_label": "44 лота"
        }
      ],
      "last_operation": null,
      "source_target": null,
      "source_targets": {
        "NVTK":{"target_price_rub":1400,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED_LATEST","note":"Последняя подтверждённая цель; заменяет более раннюю цель 2000 ₽"},
        "ROSN":{"target_price_rub":600,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED"},
        "ASTR":{"target_price_rub":300,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED"},
        "CNRU":{"target_price_rub":1000,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED"},
        "NMTP":{"target_price_rub":11,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED"},
        "FEES":{"target_price_rub":0.12,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED"},
        "TGKA":{"target_price_rub":0.012,"semantic_class":"SOURCE_TARGET","status":"CONFIRMED"}
      }
    }
  },
  {
    "portfolio_id":"alfa_capital.top10.2026-09-16",
    "portfolio_kind":"MODEL_TARGET",
    "context":"PORTFOLIO",
    "classification":"MODEL",
    "status":"SOURCE_MODEL",
    "action":"INFORMATION",
    "priority":"NONE",
    "why":"Модельный TOP-10 портфель аналитиков Альфа-Капитала по данным, предоставленным владельцем RADAR.",
    "quality":"SOURCE_REPORTED",
    "risk":"SOURCE_MODEL_NOT_OWNER_PORTFOLIO",
    "published_at":"2026-09-16T00:00:00+03:00",
    "source_ref":null,
    "title":"TOP-10 акций РФ — Альфа-Капитал",
    "short_title":"Альфа-Капитал",
    "portfolio":{
      "as_of":"2026-09-16",
      "horizon":"1 год",
      "positions":[
        {"rank":1,"name":"Сбербанк","ticker":"SBER","boardid":"TQBR","target_price":400,"target_weight_pct":17,"change":"UP"},
        {"rank":2,"name":"Лукойл","ticker":"LKOH","boardid":"TQBR","target_price":5824,"target_weight_pct":13,"change":"UP"},
        {"rank":3,"name":"Татнефть ао","ticker":"TATN","boardid":"TQBR","target_price":700,"target_weight_pct":12,"change":"SAME"},
        {"rank":4,"name":"Новатэк","ticker":"NVTK","boardid":"TQBR","target_price":1430,"target_weight_pct":10,"change":"SAME"},
        {"rank":5,"name":"Т-Технологии","ticker":"T","boardid":"TQBR","target_price":452,"target_weight_pct":10,"change":"UP"},
        {"rank":6,"name":"Яндекс","ticker":"YDEX","boardid":"TQBR","target_price":5900,"target_weight_pct":10,"change":"SAME"},
        {"rank":7,"name":"Хэдхантер","ticker":"HEAD","boardid":"TQBR","target_price":4400,"target_weight_pct":9,"change":"DOWN"},
        {"rank":8,"name":"Озон","ticker":"OZON","boardid":"TQBR","target_price":5500,"target_weight_pct":7,"change":"DOWN"},
        {"rank":9,"name":"Группа Позитив","ticker":"POSI","boardid":"TQBR","target_price":1500,"target_weight_pct":7,"change":"NEW"},
        {"rank":10,"name":"КЦ ИКС 5","ticker":"X5","boardid":"TQBR","target_price":4000,"target_weight_pct":5,"change":"DOWN"}
      ],
      "changes":"Лукойл поднялся с 9-го на 2-е место; Сбер — со 2-го на 1-е; Т-Технологии — с 6-го на 5-е; Группа Позитив вошла в портфель; Аэрофлот выбыл.",
      "excluded":[{"name":"Аэрофлот","ticker":"AFLT"}]
    }
  }
];
