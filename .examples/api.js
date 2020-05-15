const exchange = require('../index')

const getLatestRates = async () => {
    const response = await exchange.rates()

    console.log(response.data)

    /*
      {
        rates: {
          CAD: 1.5243,
          HKD: 8.4286,
          ISK: 158.3,
          PHP: 54.545,
          DKK: 7.4556,
          HUF: 353.58,
          CZK: 27.408,
          AUD: 1.6687,
          RON: 4.8353,
          SEK: 10.5843,
          IDR: 16092.26,
          INR: 81.8825,
          BRL: 6.3606,
          RUB: 79.5893,
          HRK: 7.5705,
          JPY: 116.28,
          THB: 34.844,
          CHF: 1.0528,
          SGD: 1.538,
          PLN: 4.5636,
          BGN: 1.9558,
          TRY: 7.5861,
          CNY: 7.7102,
          NOK: 10.938,
          NZD: 1.7983,
          ZAR: 19.919,
          USD: 1.0875,
          MXN: 26.2304,
          ILS: 3.819,
          GBP: 0.88245,
          KRW: 1331.08,
          MYR: 4.704
        },
        base: 'EUR',
        date: '2020-05-13'
      }
    */
}

const getLatestRatesForBaseCurrency = async(base) => {
  const response = await exchange.rates({ base })

  console.log(response.data)

  /*
    {
      rates: {
        CAD: 1.4016551724,
        HKD: 7.7504367816,
        ISK: 145.5632183908,
        PHP: 50.1563218391,
        DKK: 6.8557241379,
        HUF: 325.1310344828,
        CZK: 25.2027586207,
        GBP: 0.8114482759,
        RON: 4.4462528736,
        SEK: 9.7326896552,
        IDR: 14797.4804597701,
        INR: 75.2942528736,
        BRL: 5.8488275862,
        RUB: 73.1855632184,
        HRK: 6.9613793103,
        JPY: 106.924137931,
        THB: 32.0404597701,
        CHF: 0.968091954,
        EUR: 0.9195402299,
        MYR: 4.3255172414,
        BGN: 1.7984367816,
        TRY: 6.9757241379,
        CNY: 7.0898390805,
        NOK: 10.0579310345,
        NZD: 1.6536091954,
        ZAR: 18.3163218391,
        USD: 1,
        MXN: 24.119908046,
        SGD: 1.4142528736,
        AUD: 1.5344367816,
        ILS: 3.5117241379,
        KRW: 1223.9816091954,
        PLN: 4.1964137931
      },
      base: 'USD',
      date: '2020-05-13'
    }
  */
}

const getLatestRatesForCurrencies = async (symbols) => {
  const response = await exchange.rates({ symbols })

  console.log(response.data)

  /*
    {
      rates: { USD: 1.0875, GBP: 0.88245 },
      base: 'EUR',
      date: '2020-05-13'
    }
  */
}

const getRatesByDate = async (date) => {
  const response = await exchange.rates({ date })

  console.log(response.data)

  /*
    {
      rates: {
        CAD: 1.4959,
        HKD: 11.2301,
        LVL: 0.7093,
        PHP: 66.106,
        DKK: 7.4405,
        HUF: 268.18,
        CZK: 26.258,
        AUD: 1.5668,
        RON: 4.1405,
        SEK: 10.2215,
        IDR: 13281.14,
        INR: 66.21,
        BRL: 2.5309,
        RUB: 42.6974,
        LTL: 3.4528,
        JPY: 132.41,
        THB: 47.839,
        CHF: 1.4743,
        SGD: 2.0133,
        PLN: 4.0838,
        BGN: 1.9558,
        TRY: 2.1084,
        CNY: 9.8863,
        NOK: 8.1825,
        NZD: 1.9573,
        ZAR: 10.8264,
        USD: 1.4481,
        MXN: 18.4995,
        EEK: 15.6466,
        GBP: 0.8972,
        KRW: 1627.4,
        MYR: 4.8424,
        HRK: 7.2753
      },
      base: 'EUR',
      date: '2010-01-12'
    }
  */
}

const getHistoricalRates = async(start_at, end_at) => {
  const response = await exchange.history({ start_at, end_at})

  console.log(response.data)
}

getLatestRates()
getLatestRatesForBaseCurrency('USD')
getLatestRatesForCurrencies('USD,GBP')
getRatesByDate('2010-01-12')
getHistoricalRates('2018-01-01', '2018-01-31')