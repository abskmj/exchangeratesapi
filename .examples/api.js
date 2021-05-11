const exchange = require('../index') // require('@abskmj/exchangeratesapi')

const access_key = 'TEST_API_KEY'

const run = async () => {
  try {
    // get symbols
    const symbols = await exchange.symbols({ access_key })

    console.log(symbols.data)
    /*
      {
        success: true,
        symbols: {
          AED: 'United Arab Emirates Dirham',
          AFN: 'Afghan Afghani',
          ALL: 'Albanian Lek',
          ...
        }
      }
    */

    // get latest rates
    const latestRates = await exchange.rates({ access_key })

    console.log(latestRates.data)

    /*
      {
        success: true,
        timestamp: 1619775543,
        base: 'EUR',
        date: '2021-04-30',
        rates: {
          AED: 4.442933,
          AFN: 94.8435,
          ALL: 122.930822,
          ...
        }
      }
    */

  } catch (err) {
    console.error(err)
  }
}

run()