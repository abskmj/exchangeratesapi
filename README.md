# Node client for exchangeratesapi.io
Unofficial node.js client for [exchangeratesapi.io](https://exchangeratesapi.io/)

> Exchange rates API is a free service for current and historical foreign exchange rates
published by the [European Central Bank](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

# Installation

## NPM Registry
```bash
npm install --save @abskmj/exchangeratesapi
```

## Github Package
This module is also available at [Github Package](https://github.com/abskmj/exchangeratesapi/packages/222586)


# Examples
## Get all the rates on current date
```javascript
let exchange = require('@abskmj/exchangeratesapi')

const getLatestRates = async () => {
    const response = await exchange.rates()

    console.log(response.data)

    /*
      {
        rates: {
          CAD: 1.5243,
          HKD: 8.4286,
          ISK: 158.3,
          ...
        },
        base: 'EUR',
        date: '2020-05-13'
      }
    */
}
```
## Get the rates on a date
```javascript
let exchange = require('@abskmj/exchangeratesapi')

const getRatesByDate = async (date) => {
  const response = await exchange.rates({ date })

  console.log(response.data)

  /*
    {
      rates: {
        CAD: 1.4959,
        HKD: 11.2301,
        LVL: 0.7093,
        ...
      },
      base: 'EUR',
      date: '2010-01-12'
    }
  */
}
```

## Get the rates of a base currency
```javascript
let exchange = require('@abskmj/exchangeratesapi')

const getLatestRatesForBaseCurrency = async(base) => {
  const response = await exchange.rates({ base })

  console.log(response.data)

  /*
    {
      rates: {
        CAD: 1.4016551724,
        HKD: 7.7504367816,
        ISK: 145.5632183908,
        ...
      },
      base: 'USD',
      date: '2020-05-13'
    }
  */
}
```

## Get specific rates of a base currency
```javascript
let exchange = require('@abskmj/exchangeratesapi')

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
```

## Get historical rates
```javascript
let exchange = require('@abskmj/exchangeratesapi')

const getHistoricalRates = async(start_at, end_at) => {
  const response = await exchange.history({ start_at, end_at})

  console.log(response.data)
}
```

# Works with Promises and Callbacks
```javascript
// promise
exchange().then(response =>{
    console.log(response.data);
});

// callback
exchange({}, (err, response) => {
    if(err) return console.error(err)

    console.log(response.data)
})
```

# API Documentation
Documentation is available at [API.md](API.md)

# Changelog
Change log is available at [CHANGELOG.md](CHANGELOG.md)