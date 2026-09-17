window.RADAR_TODAY = [];
window.RADAR_PORTFOLIO = [
  {
    "portfolio_id":"zhugan.public_portfolio","portfolio_kind":"LIVE_PUBLIC","context":"PORTFOLIO","classification":"NONE","status":"NO_DECISION","action":"HOLD","priority":"NONE","why":"Подтверждённый PORTFOLIO_STATE получен, но правило инвестиционного действия не авторизовано.","quality":"LIVE","risk":"NO_PORTFOLIO_RULE","published_at":"2026-09-15T13:53:01+00:00","source_ref":"https://t.me/clubwinwin/9180","title":"Публичный портфель Жугана","short_title":"Жуган",
    "portfolio":{"value_rub":114005,"cash_rub":1564,"contributed_rub":141000,"dividends_rub":7979,"drawdown_rub":27285,"week":141,"positions":[["Артген","20"],["Астра","60"],["ВК","38"],["М.Видео","5"],["Мечел","6"],["ММК","270"],["НМТП","2 200"],["Новатэк","28"],["Роснефть","50"],["Россети","280 000"],["ТГК-1","600 000"],["ЦИАН","9"],["Фонд Тинькофф Индекс Мосбиржи","44 лота"]],"last_operation":null,"source_target":null,"source_targets":{"NMTP":{"target_price_rub":11,"source":"zhugan_public_portfolio_operation_2026-09-15","semantic_class":"SOURCE_TARGET"}}}
  },
  {
    "portfolio_id":"alfa_capital.top10.2026-09-16","portfolio_kind":"MODEL_TARGET","context":"PORTFOLIO","classification":"MODEL","status":"SOURCE_MODEL","action":"INFORMATION","priority":"NONE","why":"Модельный TOP-10 портфель аналитиков Альфа-Капитала по данным, предоставленным владельцем RADAR.","quality":"SOURCE_REPORTED","risk":"SOURCE_MODEL_NOT_OWNER_PORTFOLIO","published_at":"2026-09-16T00:00:00+03:00","source_ref":null,"title":"TOP-10 акций РФ — Альфа-Капитал","short_title":"Альфа-Капитал",
    "portfolio":{"as_of":"2026-09-16","horizon":"1 год","positions":[
      {"rank":1,"name":"Сбербанк","ticker":"SBER","target_price":400,"target_weight_pct":17,"change":"UP"},
      {"rank":2,"name":"Лукойл","ticker":"LKOH","target_price":5824,"target_weight_pct":13,"change":"UP"},
      {"rank":3,"name":"Татнефть ао","ticker":"TATN","target_price":700,"target_weight_pct":12,"change":"SAME"},
      {"rank":4,"name":"Новатэк","ticker":"NVTK","target_price":1430,"target_weight_pct":10,"change":"SAME"},
      {"rank":5,"name":"Т-Технологии","ticker":"T","target_price":452,"target_weight_pct":10,"change":"UP"},
      {"rank":6,"name":"Яндекс","ticker":"YDEX","target_price":5900,"target_weight_pct":10,"change":"SAME"},
      {"rank":7,"name":"Хэдхантер","ticker":"HEAD","target_price":4400,"target_weight_pct":9,"change":"DOWN"},
      {"rank":8,"name":"Озон","ticker":"OZON","target_price":5500,"target_weight_pct":7,"change":"DOWN"},
      {"rank":9,"name":"Группа Позитив","ticker":"POSI","target_price":1500,"target_weight_pct":7,"change":"NEW"},
      {"rank":10,"name":"КЦ ИКС 5","ticker":"X5","target_price":4000,"target_weight_pct":5,"change":"DOWN"}
    ],"changes":"Лукойл поднялся с 9-го на 2-е место; Сбер — со 2-го на 1-е; Т-Технологии — с 6-го на 5-е; Группа Позитив вошла в портфель; Аэрофлот выбыл.","excluded":[{"name":"Аэрофлот","ticker":"AFLT"}]}
  }
];
