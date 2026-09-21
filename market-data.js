window.RADAR_MARKET = {
  "type": "MARKET_STATE",
  "published_at": "2026-09-21T00:00:00+03:00",
  "quality": "LIVE",
  "source": {
    "owner": "YaDragon44/moex-crash-radar",
    "ref": "artifacts/market_snapshot.json",
    "provider": "MOEX ISS",
    "secid": "IMOEX"
  },
  "data": {
    "imoex": 2259.15,
    "crash": {
      "score": 31.3,
      "state": "CAUTION",
      "available_weight": 0.72,
      "critical_confirmations": 0,
      "raw_cash_signal": false
    },
    "warning": {
      "exit_gate": {
        "stage": "CASH_CONFIRMED",
        "cash_confirmed": true,
        "latest_5d_return_pct": -4.32,
        "params": {
          "score_threshold": 65.0,
          "early_warning_threshold": 56.0,
          "confirmations": 3,
          "persistence": 2,
          "max_5d_return_pct": -3.0,
          "cooldown_rows": 30,
          "require_breadth_volume": false,
          "rearm_clear_rows": 3
        },
        "last_event_day": "2026-08-17"
      },
      "crash_momentum": 27.16
    },
    "health": {
      "breadth": {
        "universe_size": 24,
        "usable_size": 24,
        "coverage": 1.0,
        "pct_above_ma20": 37.5,
        "pct_above_ma50": 33.33,
        "pct_new_20d_lows": 16.67,
        "pct_new_20d_highs": 4.17,
        "advance_decline_ratio": 0.438,
        "breadth_return_5d": -1.21,
        "index_vs_breadth_divergence": false,
        "failed_secids": []
      }
    },
    "direction": {
      "value": null,
      "quality": "N/A"
    },
    "context": {
      "rate_ofz": {
        "score": 51.29,
        "quality": "LIVE",
        "key_rate": 14.0,
        "key_rate_day": "2026-09-21",
        "median_long_ofz_yield": 16.21,
        "ofz_count": 30,
        "rgbi_return_5d": 0.12,
        "rgbi_return_20d": -0.83,
        "component_coverage": 1.0,
        "note": "Relative Rate/OFZ stress composite; not a probability and not Crowd Score.",
        "sources": [
          "Bank of Russia",
          "MOEX ISS TQOB",
          "MOEX ISS RGBI"
        ]
      },
      "oil_rub": {
        "score": null,
        "quality": "N/A",
        "brent_secid": null,
        "brent_return_5d": null,
        "brent_return_20d": null,
        "cnyrub_return_5d": -0.33,
        "cnyrub_return_20d": 0.26,
        "component_coverage": 0.5,
        "latest_day": null,
        "note": "DATA_INSUFFICIENT: both Brent and CNYRUB, freshness <=5d and >=75% component coverage are required.",
        "sources": [
          "MOEX ISS FORTS Brent",
          "MOEX ISS CNYRUB_TOM"
        ]
      }
    },
    "history": [
      {
        "day": "2026-04-03",
        "score": 68.74,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-06",
        "score": 49.01,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-04-07",
        "score": 40.51,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-04-08",
        "score": 53.26,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-04-09",
        "score": 68.83,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-10",
        "score": 66.5,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-13",
        "score": 76.81,
        "state": "CRASH"
      },
      {
        "day": "2026-04-14",
        "score": 71.24,
        "state": "CRASH"
      },
      {
        "day": "2026-04-15",
        "score": 55.83,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-16",
        "score": 53.14,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-04-17",
        "score": 57.83,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-20",
        "score": 38.83,
        "state": "CAUTION"
      },
      {
        "day": "2026-04-21",
        "score": 38.83,
        "state": "CAUTION"
      },
      {
        "day": "2026-04-22",
        "score": 19.64,
        "state": "NORMAL"
      },
      {
        "day": "2026-04-23",
        "score": 24.03,
        "state": "NORMAL"
      },
      {
        "day": "2026-04-24",
        "score": 58.4,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-27",
        "score": 61.81,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-04-28",
        "score": 76.98,
        "state": "CRASH"
      },
      {
        "day": "2026-04-29",
        "score": 81.84,
        "state": "CRASH"
      },
      {
        "day": "2026-04-30",
        "score": 64.1,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-05-04",
        "score": 76.01,
        "state": "CRASH"
      },
      {
        "day": "2026-05-05",
        "score": 56.4,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-05-06",
        "score": 72.92,
        "state": "CRASH"
      },
      {
        "day": "2026-05-07",
        "score": 71.02,
        "state": "CRASH"
      },
      {
        "day": "2026-05-08",
        "score": 63.03,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-05-11",
        "score": 34.97,
        "state": "CAUTION"
      },
      {
        "day": "2026-05-12",
        "score": 31.35,
        "state": "CAUTION"
      },
      {
        "day": "2026-05-13",
        "score": 26.99,
        "state": "CAUTION"
      },
      {
        "day": "2026-05-14",
        "score": 39.83,
        "state": "CAUTION"
      },
      {
        "day": "2026-05-15",
        "score": 47.3,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-05-18",
        "score": 43.02,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-05-19",
        "score": 47.91,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-05-20",
        "score": 56.72,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-05-21",
        "score": 38.95,
        "state": "CAUTION"
      },
      {
        "day": "2026-05-22",
        "score": 62.17,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-05-25",
        "score": 76.11,
        "state": "CRASH"
      },
      {
        "day": "2026-05-26",
        "score": 83.19,
        "state": "CRASH"
      },
      {
        "day": "2026-05-27",
        "score": 54.67,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-05-28",
        "score": 67.31,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-05-29",
        "score": 77.19,
        "state": "CRASH"
      },
      {
        "day": "2026-06-01",
        "score": 47.97,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-06-02",
        "score": 31.51,
        "state": "CAUTION"
      },
      {
        "day": "2026-06-03",
        "score": 42.86,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-06-04",
        "score": 53.53,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-06-05",
        "score": 67.44,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-06-08",
        "score": 81.11,
        "state": "CRASH"
      },
      {
        "day": "2026-06-09",
        "score": 68.78,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-06-10",
        "score": 72.06,
        "state": "CRASH"
      },
      {
        "day": "2026-06-11",
        "score": 67.76,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-06-15",
        "score": 37.51,
        "state": "CAUTION"
      },
      {
        "day": "2026-06-16",
        "score": 78.19,
        "state": "CRASH"
      },
      {
        "day": "2026-06-17",
        "score": 76.54,
        "state": "CRASH"
      },
      {
        "day": "2026-06-18",
        "score": 84.55,
        "state": "CRASH"
      },
      {
        "day": "2026-06-19",
        "score": 86.63,
        "state": "CRASH"
      },
      {
        "day": "2026-06-22",
        "score": 90.07,
        "state": "CRASH"
      },
      {
        "day": "2026-06-23",
        "score": 67.81,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-06-24",
        "score": 93.68,
        "state": "CRASH"
      },
      {
        "day": "2026-06-25",
        "score": 87.29,
        "state": "CRASH"
      },
      {
        "day": "2026-06-26",
        "score": 68.93,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-06-29",
        "score": 50.69,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-06-30",
        "score": 53.97,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-07-01",
        "score": 53.97,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-07-02",
        "score": 79.31,
        "state": "CRASH"
      },
      {
        "day": "2026-07-03",
        "score": 86.84,
        "state": "CRASH"
      },
      {
        "day": "2026-07-06",
        "score": 90.49,
        "state": "CRASH"
      },
      {
        "day": "2026-07-07",
        "score": 82.06,
        "state": "CRASH"
      },
      {
        "day": "2026-07-08",
        "score": 63.4,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-07-09",
        "score": 82.71,
        "state": "CRASH"
      },
      {
        "day": "2026-07-10",
        "score": 85.24,
        "state": "CRASH"
      },
      {
        "day": "2026-07-13",
        "score": 68.99,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-07-14",
        "score": 64.49,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-07-15",
        "score": 85.97,
        "state": "CRASH"
      },
      {
        "day": "2026-07-16",
        "score": 91.42,
        "state": "CRASH"
      },
      {
        "day": "2026-07-17",
        "score": 89.77,
        "state": "CRASH"
      },
      {
        "day": "2026-07-20",
        "score": 52.82,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-07-21",
        "score": 49.28,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-07-22",
        "score": 38.19,
        "state": "CAUTION"
      },
      {
        "day": "2026-07-23",
        "score": 42.42,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-07-24",
        "score": 34.01,
        "state": "CAUTION"
      },
      {
        "day": "2026-07-27",
        "score": 30.59,
        "state": "CAUTION"
      },
      {
        "day": "2026-07-28",
        "score": 31.91,
        "state": "CAUTION"
      },
      {
        "day": "2026-07-29",
        "score": 18.54,
        "state": "NORMAL"
      },
      {
        "day": "2026-07-30",
        "score": 25.28,
        "state": "CAUTION"
      },
      {
        "day": "2026-07-31",
        "score": 19.38,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-03",
        "score": 14.41,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-04",
        "score": 16.3,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-05",
        "score": 14.41,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-06",
        "score": 17.69,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-07",
        "score": 21.67,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-10",
        "score": 26.08,
        "state": "CAUTION"
      },
      {
        "day": "2026-08-11",
        "score": 16.91,
        "state": "NORMAL"
      },
      {
        "day": "2026-08-12",
        "score": 26.42,
        "state": "CAUTION"
      },
      {
        "day": "2026-08-13",
        "score": 47.53,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-08-14",
        "score": 70.42,
        "state": "CRASH"
      },
      {
        "day": "2026-08-17",
        "score": 75.24,
        "state": "CRASH"
      },
      {
        "day": "2026-08-18",
        "score": 50.33,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-08-19",
        "score": 46.08,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-08-20",
        "score": 59.24,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-08-21",
        "score": 40.56,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-08-24",
        "score": 82.29,
        "state": "CRASH"
      },
      {
        "day": "2026-08-25",
        "score": 42.36,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-08-26",
        "score": 76.46,
        "state": "CRASH"
      },
      {
        "day": "2026-08-27",
        "score": 43.72,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-08-28",
        "score": 55.47,
        "state": "HIGH_RISK"
      },
      {
        "day": "2026-08-31",
        "score": 28.4,
        "state": "CAUTION"
      },
      {
        "day": "2026-09-01",
        "score": 43.56,
        "state": "DEFENSIVE"
      },
      {
        "day": "2026-09-02",
        "score": 23.54,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-03",
        "score": 12.29,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-04",
        "score": 9.51,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-07",
        "score": 8.16,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-08",
        "score": 14.03,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-09",
        "score": 24.76,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-10",
        "score": 9.14,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-11",
        "score": 21.46,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-14",
        "score": 4.14,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-15",
        "score": 9.07,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-16",
        "score": 15.29,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-17",
        "score": 36.99,
        "state": "CAUTION"
      },
      {
        "day": "2026-09-18",
        "score": 23.66,
        "state": "NORMAL"
      },
      {
        "day": "2026-09-21",
        "score": 31.3,
        "state": "CAUTION"
      }
    ]
  }
};
