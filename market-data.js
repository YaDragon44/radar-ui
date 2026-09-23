window.RADAR_MARKET = {
  "type": "MARKET_STATE",
  "published_at": "2026-09-23T00:00:00+03:00",
  "quality": "LIVE",
  "source": {
    "owner": "YaDragon44/moex-crash-radar",
    "ref": "artifacts/market_snapshot.json",
    "provider": "MOEX ISS",
    "secid": "IMOEX"
  },
  "data": {
    "imoex": 2300.98,
    "crash": {
      "score": 5.05,
      "state": "NORMAL",
      "available_weight": 0.72,
      "critical_confirmations": 0,
      "raw_cash_signal": false
    },
    "warning": {
      "exit_gate": {
        "stage": "CASH_CONFIRMED",
        "cash_confirmed": true,
        "latest_5d_return_pct": 0.71,
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
      "crash_momentum": -10.24
    },
    "health": {
      "breadth": {
        "universe_size": 24,
        "usable_size": 24,
        "coverage": 1.0,
        "pct_above_ma20": 58.33,
        "pct_above_ma50": 54.17,
        "pct_new_20d_lows": 0.0,
        "pct_new_20d_highs": 12.5,
        "advance_decline_ratio": 0.5,
        "breadth_return_5d": 1.68,
        "index_vs_breadth_divergence": false,
        "failed_secids": []
      }
    },
    "indicators": {
      "market_structure": {
        "score": 0.0,
        "quality": "LIVE"
      },
      "levels_momentum": {
        "score": 0.0,
        "quality": "LIVE"
      },
      "volatility_liquidity": {
        "score": 17.5,
        "quality": "LIVE"
      }
    },
    "distribution": {
      "usable_size": 24,
      "pct_down_rvol": 0.0,
      "pct_distribution_5d": 0.0,
      "mean_down_up_volume_ratio": 0.527
    },
    "positioning": {
      "ticker": "MX",
      "as_of": null,
      "quality": "N/A",
      "individuals": null,
      "legal_entities": null,
      "total_open_interest": null,
      "retail_net": null,
      "legal_net": null,
      "directional_divergence": null,
      "source": "MOEX ISS analyticalproducts/futoi",
      "note": "R0.7 observational layer. Anonymous MOEX FUTOI can be delayed; stale data never changes Crash Score or frozen EXIT Gate."
    },
    "direction": {
      "value": null,
      "quality": "N/A"
    },
    "context": {
      "rate_ofz": {
        "score": 52.9,
        "quality": "LIVE",
        "key_rate": 14.0,
        "key_rate_day": "2026-09-23",
        "median_long_ofz_yield": 16.25,
        "ofz_count": 30,
        "rgbi_return_5d": -0.44,
        "rgbi_return_20d": -1.33,
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
        "cnyrub_return_5d": -0.22,
        "cnyrub_return_20d": -0.37,
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
        "day": "2026-04-07",
        "score": 40.51,
        "state": "DEFENSIVE",
        "close": 2797.24
      },
      {
        "day": "2026-04-08",
        "score": 53.26,
        "state": "DEFENSIVE",
        "close": 2765.06
      },
      {
        "day": "2026-04-09",
        "score": 68.83,
        "state": "HIGH_RISK",
        "close": 2733.4
      },
      {
        "day": "2026-04-10",
        "score": 66.5,
        "state": "HIGH_RISK",
        "close": 2725.39
      },
      {
        "day": "2026-04-13",
        "score": 76.81,
        "state": "CRASH",
        "close": 2722.69
      },
      {
        "day": "2026-04-14",
        "score": 71.24,
        "state": "CRASH",
        "close": 2725.51
      },
      {
        "day": "2026-04-15",
        "score": 55.83,
        "state": "HIGH_RISK",
        "close": 2740.45
      },
      {
        "day": "2026-04-16",
        "score": 53.14,
        "state": "DEFENSIVE",
        "close": 2741.14
      },
      {
        "day": "2026-04-17",
        "score": 57.83,
        "state": "HIGH_RISK",
        "close": 2723.94
      },
      {
        "day": "2026-04-20",
        "score": 38.83,
        "state": "CAUTION",
        "close": 2753.66
      },
      {
        "day": "2026-04-21",
        "score": 38.83,
        "state": "CAUTION",
        "close": 2757.7
      },
      {
        "day": "2026-04-22",
        "score": 19.64,
        "state": "NORMAL",
        "close": 2761.64
      },
      {
        "day": "2026-04-23",
        "score": 24.03,
        "state": "NORMAL",
        "close": 2771.46
      },
      {
        "day": "2026-04-24",
        "score": 58.4,
        "state": "HIGH_RISK",
        "close": 2733.0
      },
      {
        "day": "2026-04-27",
        "score": 61.81,
        "state": "HIGH_RISK",
        "close": 2732.41
      },
      {
        "day": "2026-04-28",
        "score": 76.98,
        "state": "CRASH",
        "close": 2696.58
      },
      {
        "day": "2026-04-29",
        "score": 81.84,
        "state": "CRASH",
        "close": 2639.82
      },
      {
        "day": "2026-04-30",
        "score": 64.1,
        "state": "HIGH_RISK",
        "close": 2658.21
      },
      {
        "day": "2026-05-04",
        "score": 76.01,
        "state": "CRASH",
        "close": 2620.82
      },
      {
        "day": "2026-05-05",
        "score": 56.4,
        "state": "HIGH_RISK",
        "close": 2644.37
      },
      {
        "day": "2026-05-06",
        "score": 72.92,
        "state": "CRASH",
        "close": 2632.5
      },
      {
        "day": "2026-05-07",
        "score": 71.02,
        "state": "CRASH",
        "close": 2615.33
      },
      {
        "day": "2026-05-08",
        "score": 63.03,
        "state": "HIGH_RISK",
        "close": 2597.8
      },
      {
        "day": "2026-05-11",
        "score": 34.97,
        "state": "CAUTION",
        "close": 2656.91
      },
      {
        "day": "2026-05-12",
        "score": 31.35,
        "state": "CAUTION",
        "close": 2689.96
      },
      {
        "day": "2026-05-13",
        "score": 26.99,
        "state": "CAUTION",
        "close": 2694.72
      },
      {
        "day": "2026-05-14",
        "score": 39.83,
        "state": "CAUTION",
        "close": 2658.84
      },
      {
        "day": "2026-05-15",
        "score": 47.3,
        "state": "DEFENSIVE",
        "close": 2633.84
      },
      {
        "day": "2026-05-18",
        "score": 43.02,
        "state": "DEFENSIVE",
        "close": 2668.22
      },
      {
        "day": "2026-05-19",
        "score": 47.91,
        "state": "DEFENSIVE",
        "close": 2663.48
      },
      {
        "day": "2026-05-20",
        "score": 56.72,
        "state": "HIGH_RISK",
        "close": 2640.32
      },
      {
        "day": "2026-05-21",
        "score": 38.95,
        "state": "CAUTION",
        "close": 2664.29
      },
      {
        "day": "2026-05-22",
        "score": 62.17,
        "state": "HIGH_RISK",
        "close": 2625.69
      },
      {
        "day": "2026-05-25",
        "score": 76.11,
        "state": "CRASH",
        "close": 2598.2
      },
      {
        "day": "2026-05-26",
        "score": 83.19,
        "state": "CRASH",
        "close": 2580.25
      },
      {
        "day": "2026-05-27",
        "score": 54.67,
        "state": "DEFENSIVE",
        "close": 2590.24
      },
      {
        "day": "2026-05-28",
        "score": 67.31,
        "state": "HIGH_RISK",
        "close": 2583.89
      },
      {
        "day": "2026-05-29",
        "score": 77.19,
        "state": "CRASH",
        "close": 2565.61
      },
      {
        "day": "2026-06-01",
        "score": 47.97,
        "state": "DEFENSIVE",
        "close": 2570.04
      },
      {
        "day": "2026-06-02",
        "score": 31.51,
        "state": "CAUTION",
        "close": 2620.39
      },
      {
        "day": "2026-06-03",
        "score": 42.86,
        "state": "DEFENSIVE",
        "close": 2601.35
      },
      {
        "day": "2026-06-04",
        "score": 53.53,
        "state": "DEFENSIVE",
        "close": 2579.9
      },
      {
        "day": "2026-06-05",
        "score": 67.44,
        "state": "HIGH_RISK",
        "close": 2561.04
      },
      {
        "day": "2026-06-08",
        "score": 81.11,
        "state": "CRASH",
        "close": 2517.64
      },
      {
        "day": "2026-06-09",
        "score": 68.78,
        "state": "HIGH_RISK",
        "close": 2522.77
      },
      {
        "day": "2026-06-10",
        "score": 72.06,
        "state": "CRASH",
        "close": 2520.88
      },
      {
        "day": "2026-06-11",
        "score": 67.76,
        "state": "HIGH_RISK",
        "close": 2515.33
      },
      {
        "day": "2026-06-15",
        "score": 37.51,
        "state": "CAUTION",
        "close": 2542.84
      },
      {
        "day": "2026-06-16",
        "score": 78.19,
        "state": "CRASH",
        "close": 2490.52
      },
      {
        "day": "2026-06-17",
        "score": 76.54,
        "state": "CRASH",
        "close": 2485.05
      },
      {
        "day": "2026-06-18",
        "score": 84.55,
        "state": "CRASH",
        "close": 2441.24
      },
      {
        "day": "2026-06-19",
        "score": 86.63,
        "state": "CRASH",
        "close": 2420.56
      },
      {
        "day": "2026-06-22",
        "score": 90.07,
        "state": "CRASH",
        "close": 2318.28
      },
      {
        "day": "2026-06-23",
        "score": 67.81,
        "state": "HIGH_RISK",
        "close": 2335.94
      },
      {
        "day": "2026-06-24",
        "score": 93.68,
        "state": "CRASH",
        "close": 2243.47
      },
      {
        "day": "2026-06-25",
        "score": 87.29,
        "state": "CRASH",
        "close": 2257.24
      },
      {
        "day": "2026-06-26",
        "score": 68.93,
        "state": "HIGH_RISK",
        "close": 2285.61
      },
      {
        "day": "2026-06-29",
        "score": 50.69,
        "state": "DEFENSIVE",
        "close": 2349.81
      },
      {
        "day": "2026-06-30",
        "score": 53.97,
        "state": "DEFENSIVE",
        "close": 2348.15
      },
      {
        "day": "2026-07-01",
        "score": 53.97,
        "state": "DEFENSIVE",
        "close": 2344.55
      },
      {
        "day": "2026-07-02",
        "score": 79.31,
        "state": "CRASH",
        "close": 2256.06
      },
      {
        "day": "2026-07-03",
        "score": 86.84,
        "state": "CRASH",
        "close": 2242.84
      },
      {
        "day": "2026-07-06",
        "score": 90.49,
        "state": "CRASH",
        "close": 2194.14
      },
      {
        "day": "2026-07-07",
        "score": 82.06,
        "state": "CRASH",
        "close": 2190.39
      },
      {
        "day": "2026-07-08",
        "score": 63.4,
        "state": "HIGH_RISK",
        "close": 2220.77
      },
      {
        "day": "2026-07-09",
        "score": 82.71,
        "state": "CRASH",
        "close": 2186.75
      },
      {
        "day": "2026-07-10",
        "score": 85.24,
        "state": "CRASH",
        "close": 2145.65
      },
      {
        "day": "2026-07-13",
        "score": 68.99,
        "state": "HIGH_RISK",
        "close": 2164.42
      },
      {
        "day": "2026-07-14",
        "score": 64.49,
        "state": "HIGH_RISK",
        "close": 2170.78
      },
      {
        "day": "2026-07-15",
        "score": 85.97,
        "state": "CRASH",
        "close": 2111.9
      },
      {
        "day": "2026-07-16",
        "score": 91.42,
        "state": "CRASH",
        "close": 2022.27
      },
      {
        "day": "2026-07-17",
        "score": 89.77,
        "state": "CRASH",
        "close": 1958.43
      },
      {
        "day": "2026-07-20",
        "score": 52.82,
        "state": "DEFENSIVE",
        "close": 2000.69
      },
      {
        "day": "2026-07-21",
        "score": 49.28,
        "state": "DEFENSIVE",
        "close": 2078.78
      },
      {
        "day": "2026-07-22",
        "score": 38.19,
        "state": "CAUTION",
        "close": 2136.11
      },
      {
        "day": "2026-07-23",
        "score": 42.42,
        "state": "DEFENSIVE",
        "close": 2144.97
      },
      {
        "day": "2026-07-24",
        "score": 34.01,
        "state": "CAUTION",
        "close": 2165.54
      },
      {
        "day": "2026-07-27",
        "score": 30.59,
        "state": "CAUTION",
        "close": 2216.92
      },
      {
        "day": "2026-07-28",
        "score": 31.91,
        "state": "CAUTION",
        "close": 2191.18
      },
      {
        "day": "2026-07-29",
        "score": 18.54,
        "state": "NORMAL",
        "close": 2237.17
      },
      {
        "day": "2026-07-30",
        "score": 25.28,
        "state": "CAUTION",
        "close": 2209.84
      },
      {
        "day": "2026-07-31",
        "score": 19.38,
        "state": "NORMAL",
        "close": 2226.36
      },
      {
        "day": "2026-08-03",
        "score": 14.41,
        "state": "NORMAL",
        "close": 2262.75
      },
      {
        "day": "2026-08-04",
        "score": 16.3,
        "state": "NORMAL",
        "close": 2269.23
      },
      {
        "day": "2026-08-05",
        "score": 14.41,
        "state": "NORMAL",
        "close": 2301.65
      },
      {
        "day": "2026-08-06",
        "score": 17.69,
        "state": "NORMAL",
        "close": 2285.88
      },
      {
        "day": "2026-08-07",
        "score": 21.67,
        "state": "NORMAL",
        "close": 2281.31
      },
      {
        "day": "2026-08-10",
        "score": 26.08,
        "state": "CAUTION",
        "close": 2293.32
      },
      {
        "day": "2026-08-11",
        "score": 16.91,
        "state": "NORMAL",
        "close": 2323.82
      },
      {
        "day": "2026-08-12",
        "score": 26.42,
        "state": "CAUTION",
        "close": 2301.43
      },
      {
        "day": "2026-08-13",
        "score": 47.53,
        "state": "DEFENSIVE",
        "close": 2232.14
      },
      {
        "day": "2026-08-14",
        "score": 70.42,
        "state": "CRASH",
        "close": 2136.35
      },
      {
        "day": "2026-08-17",
        "score": 75.24,
        "state": "CRASH",
        "close": 2093.22
      },
      {
        "day": "2026-08-18",
        "score": 50.33,
        "state": "DEFENSIVE",
        "close": 2148.13
      },
      {
        "day": "2026-08-19",
        "score": 46.08,
        "state": "DEFENSIVE",
        "close": 2172.38
      },
      {
        "day": "2026-08-20",
        "score": 59.24,
        "state": "HIGH_RISK",
        "close": 2121.53
      },
      {
        "day": "2026-08-21",
        "score": 40.56,
        "state": "DEFENSIVE",
        "close": 2134.97
      },
      {
        "day": "2026-08-24",
        "score": 82.29,
        "state": "CRASH",
        "close": 2071.2
      },
      {
        "day": "2026-08-25",
        "score": 42.36,
        "state": "DEFENSIVE",
        "close": 2117.15
      },
      {
        "day": "2026-08-26",
        "score": 76.46,
        "state": "CRASH",
        "close": 2071.3
      },
      {
        "day": "2026-08-27",
        "score": 43.72,
        "state": "DEFENSIVE",
        "close": 2093.4
      },
      {
        "day": "2026-08-28",
        "score": 55.47,
        "state": "HIGH_RISK",
        "close": 2114.93
      },
      {
        "day": "2026-08-31",
        "score": 28.4,
        "state": "CAUTION",
        "close": 2178.87
      },
      {
        "day": "2026-09-01",
        "score": 43.56,
        "state": "DEFENSIVE",
        "close": 2187.33
      },
      {
        "day": "2026-09-02",
        "score": 23.54,
        "state": "NORMAL",
        "close": 2185.04
      },
      {
        "day": "2026-09-03",
        "score": 12.29,
        "state": "NORMAL",
        "close": 2214.76
      },
      {
        "day": "2026-09-04",
        "score": 9.51,
        "state": "NORMAL",
        "close": 2253.41
      },
      {
        "day": "2026-09-07",
        "score": 8.16,
        "state": "NORMAL",
        "close": 2265.65
      },
      {
        "day": "2026-09-08",
        "score": 14.03,
        "state": "NORMAL",
        "close": 2274.08
      },
      {
        "day": "2026-09-09",
        "score": 24.76,
        "state": "NORMAL",
        "close": 2264.02
      },
      {
        "day": "2026-09-10",
        "score": 9.14,
        "state": "NORMAL",
        "close": 2308.93
      },
      {
        "day": "2026-09-11",
        "score": 21.46,
        "state": "NORMAL",
        "close": 2281.04
      },
      {
        "day": "2026-09-14",
        "score": 4.14,
        "state": "NORMAL",
        "close": 2361.08
      },
      {
        "day": "2026-09-15",
        "score": 9.07,
        "state": "NORMAL",
        "close": 2337.1
      },
      {
        "day": "2026-09-16",
        "score": 15.29,
        "state": "NORMAL",
        "close": 2284.84
      },
      {
        "day": "2026-09-17",
        "score": 36.99,
        "state": "CAUTION",
        "close": 2248.87
      },
      {
        "day": "2026-09-18",
        "score": 23.66,
        "state": "NORMAL",
        "close": 2278.06
      },
      {
        "day": "2026-09-21",
        "score": 33.19,
        "state": "CAUTION",
        "close": 2257.98
      },
      {
        "day": "2026-09-22",
        "score": 7.74,
        "state": "NORMAL",
        "close": 2300.09
      },
      {
        "day": "2026-09-23",
        "score": 5.05,
        "state": "NORMAL",
        "close": 2300.98
      }
    ],
    "imoex_history": [
      {
        "day": "2026-04-07",
        "close": 2797.24
      },
      {
        "day": "2026-04-08",
        "close": 2765.06
      },
      {
        "day": "2026-04-09",
        "close": 2733.4
      },
      {
        "day": "2026-04-10",
        "close": 2725.39
      },
      {
        "day": "2026-04-13",
        "close": 2722.69
      },
      {
        "day": "2026-04-14",
        "close": 2725.51
      },
      {
        "day": "2026-04-15",
        "close": 2740.45
      },
      {
        "day": "2026-04-16",
        "close": 2741.14
      },
      {
        "day": "2026-04-17",
        "close": 2723.94
      },
      {
        "day": "2026-04-20",
        "close": 2753.66
      },
      {
        "day": "2026-04-21",
        "close": 2757.7
      },
      {
        "day": "2026-04-22",
        "close": 2761.64
      },
      {
        "day": "2026-04-23",
        "close": 2771.46
      },
      {
        "day": "2026-04-24",
        "close": 2733.0
      },
      {
        "day": "2026-04-27",
        "close": 2732.41
      },
      {
        "day": "2026-04-28",
        "close": 2696.58
      },
      {
        "day": "2026-04-29",
        "close": 2639.82
      },
      {
        "day": "2026-04-30",
        "close": 2658.21
      },
      {
        "day": "2026-05-04",
        "close": 2620.82
      },
      {
        "day": "2026-05-05",
        "close": 2644.37
      },
      {
        "day": "2026-05-06",
        "close": 2632.5
      },
      {
        "day": "2026-05-07",
        "close": 2615.33
      },
      {
        "day": "2026-05-08",
        "close": 2597.8
      },
      {
        "day": "2026-05-11",
        "close": 2656.91
      },
      {
        "day": "2026-05-12",
        "close": 2689.96
      },
      {
        "day": "2026-05-13",
        "close": 2694.72
      },
      {
        "day": "2026-05-14",
        "close": 2658.84
      },
      {
        "day": "2026-05-15",
        "close": 2633.84
      },
      {
        "day": "2026-05-18",
        "close": 2668.22
      },
      {
        "day": "2026-05-19",
        "close": 2663.48
      },
      {
        "day": "2026-05-20",
        "close": 2640.32
      },
      {
        "day": "2026-05-21",
        "close": 2664.29
      },
      {
        "day": "2026-05-22",
        "close": 2625.69
      },
      {
        "day": "2026-05-25",
        "close": 2598.2
      },
      {
        "day": "2026-05-26",
        "close": 2580.25
      },
      {
        "day": "2026-05-27",
        "close": 2590.24
      },
      {
        "day": "2026-05-28",
        "close": 2583.89
      },
      {
        "day": "2026-05-29",
        "close": 2565.61
      },
      {
        "day": "2026-06-01",
        "close": 2570.04
      },
      {
        "day": "2026-06-02",
        "close": 2620.39
      },
      {
        "day": "2026-06-03",
        "close": 2601.35
      },
      {
        "day": "2026-06-04",
        "close": 2579.9
      },
      {
        "day": "2026-06-05",
        "close": 2561.04
      },
      {
        "day": "2026-06-08",
        "close": 2517.64
      },
      {
        "day": "2026-06-09",
        "close": 2522.77
      },
      {
        "day": "2026-06-10",
        "close": 2520.88
      },
      {
        "day": "2026-06-11",
        "close": 2515.33
      },
      {
        "day": "2026-06-15",
        "close": 2542.84
      },
      {
        "day": "2026-06-16",
        "close": 2490.52
      },
      {
        "day": "2026-06-17",
        "close": 2485.05
      },
      {
        "day": "2026-06-18",
        "close": 2441.24
      },
      {
        "day": "2026-06-19",
        "close": 2420.56
      },
      {
        "day": "2026-06-22",
        "close": 2318.28
      },
      {
        "day": "2026-06-23",
        "close": 2335.94
      },
      {
        "day": "2026-06-24",
        "close": 2243.47
      },
      {
        "day": "2026-06-25",
        "close": 2257.24
      },
      {
        "day": "2026-06-26",
        "close": 2285.61
      },
      {
        "day": "2026-06-29",
        "close": 2349.81
      },
      {
        "day": "2026-06-30",
        "close": 2348.15
      },
      {
        "day": "2026-07-01",
        "close": 2344.55
      },
      {
        "day": "2026-07-02",
        "close": 2256.06
      },
      {
        "day": "2026-07-03",
        "close": 2242.84
      },
      {
        "day": "2026-07-06",
        "close": 2194.14
      },
      {
        "day": "2026-07-07",
        "close": 2190.39
      },
      {
        "day": "2026-07-08",
        "close": 2220.77
      },
      {
        "day": "2026-07-09",
        "close": 2186.75
      },
      {
        "day": "2026-07-10",
        "close": 2145.65
      },
      {
        "day": "2026-07-13",
        "close": 2164.42
      },
      {
        "day": "2026-07-14",
        "close": 2170.78
      },
      {
        "day": "2026-07-15",
        "close": 2111.9
      },
      {
        "day": "2026-07-16",
        "close": 2022.27
      },
      {
        "day": "2026-07-17",
        "close": 1958.43
      },
      {
        "day": "2026-07-20",
        "close": 2000.69
      },
      {
        "day": "2026-07-21",
        "close": 2078.78
      },
      {
        "day": "2026-07-22",
        "close": 2136.11
      },
      {
        "day": "2026-07-23",
        "close": 2144.97
      },
      {
        "day": "2026-07-24",
        "close": 2165.54
      },
      {
        "day": "2026-07-27",
        "close": 2216.92
      },
      {
        "day": "2026-07-28",
        "close": 2191.18
      },
      {
        "day": "2026-07-29",
        "close": 2237.17
      },
      {
        "day": "2026-07-30",
        "close": 2209.84
      },
      {
        "day": "2026-07-31",
        "close": 2226.36
      },
      {
        "day": "2026-08-03",
        "close": 2262.75
      },
      {
        "day": "2026-08-04",
        "close": 2269.23
      },
      {
        "day": "2026-08-05",
        "close": 2301.65
      },
      {
        "day": "2026-08-06",
        "close": 2285.88
      },
      {
        "day": "2026-08-07",
        "close": 2281.31
      },
      {
        "day": "2026-08-10",
        "close": 2293.32
      },
      {
        "day": "2026-08-11",
        "close": 2323.82
      },
      {
        "day": "2026-08-12",
        "close": 2301.43
      },
      {
        "day": "2026-08-13",
        "close": 2232.14
      },
      {
        "day": "2026-08-14",
        "close": 2136.35
      },
      {
        "day": "2026-08-17",
        "close": 2093.22
      },
      {
        "day": "2026-08-18",
        "close": 2148.13
      },
      {
        "day": "2026-08-19",
        "close": 2172.38
      },
      {
        "day": "2026-08-20",
        "close": 2121.53
      },
      {
        "day": "2026-08-21",
        "close": 2134.97
      },
      {
        "day": "2026-08-24",
        "close": 2071.2
      },
      {
        "day": "2026-08-25",
        "close": 2117.15
      },
      {
        "day": "2026-08-26",
        "close": 2071.3
      },
      {
        "day": "2026-08-27",
        "close": 2093.4
      },
      {
        "day": "2026-08-28",
        "close": 2114.93
      },
      {
        "day": "2026-08-31",
        "close": 2178.87
      },
      {
        "day": "2026-09-01",
        "close": 2187.33
      },
      {
        "day": "2026-09-02",
        "close": 2185.04
      },
      {
        "day": "2026-09-03",
        "close": 2214.76
      },
      {
        "day": "2026-09-04",
        "close": 2253.41
      },
      {
        "day": "2026-09-07",
        "close": 2265.65
      },
      {
        "day": "2026-09-08",
        "close": 2274.08
      },
      {
        "day": "2026-09-09",
        "close": 2264.02
      },
      {
        "day": "2026-09-10",
        "close": 2308.93
      },
      {
        "day": "2026-09-11",
        "close": 2281.04
      },
      {
        "day": "2026-09-14",
        "close": 2361.08
      },
      {
        "day": "2026-09-15",
        "close": 2337.1
      },
      {
        "day": "2026-09-16",
        "close": 2284.84
      },
      {
        "day": "2026-09-17",
        "close": 2248.87
      },
      {
        "day": "2026-09-18",
        "close": 2278.06
      },
      {
        "day": "2026-09-21",
        "close": 2257.98
      },
      {
        "day": "2026-09-22",
        "close": 2300.09
      },
      {
        "day": "2026-09-23",
        "close": 2300.98
      }
    ]
  }
};
