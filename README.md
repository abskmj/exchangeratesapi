[![npm (scoped)](https://img.shields.io/npm/v/@abskmj/exchangeratesapi?label=NPM)](https://npmjs.com/package/@abskmj/exchangeratesapi?activeTab=versions)
[![NPM](https://img.shields.io/npm/l/@abskmj/exchangeratesapi?label=License)](https://github.com/abskmj/exchangeratesapi/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/@abskmj/exchangeratesapi?label=Downloads)](https://npmjs.com/package/@abskmj/exchangeratesapi)
[![Coverage Status](https://coveralls.io/repos/github/abskmj/exchangeratesapi/badge.svg?branch=master)](https://coveralls.io/github/abskmj/exchangeratesapi?branch=master)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&color=red&logo=GitHub)](https://github.com/abskmj/exchangeratesapi)

# Javascript client for exchangeratesapi.io
Javascript client for [exchangeratesapi.io](https://exchangeratesapi.io/)

> Exchangerates API is the most scalable API for current and historical exchange rates with unmatched performance. API documentation at [exchangeratesapi.io](https://exchangeratesapi.io/documentation/)

# Installation
```bash
npm install @abskmj/exchangeratesapi
```


# Examples
## Get symbols
```javascript
const exchange = require('@abskmj/exchangeratesapi')

const response = await exchange.symbols({ access_key })
```
## Get rates for today
```javascript
const exchange = require('@abskmj/exchangeratesapi')

const response = await exchange.rates({ access_key })
```
## Get rates on a date
```javascript
const exchange = require('@abskmj/exchangeratesapi')

const response = await exchange.rates({ access_key, date })
```

## Convert currency
```javascript
const exchange = require('@abskmj/exchangeratesapi')

const response = await exchange.convert({ access_key, from: 'USD', to: 'EUR', amount: 1 })
```

## Get historical rates
```javascript
const exchange = require('@abskmj/exchangeratesapi')

const response = await exchange.timeseries({ access_key, start_at: '2020-01-01', end_at: '2020-03-31'})
```

## Get fluctuations
```javascript
const exchange = require('@abskmj/exchangeratesapi')

const response = await exchange.fluctuation({ access_key, start_at: '2020-01-01', end_at: '2020-03-31'})
```

# Works with Promises & Callbacks
```javascript
// promise
exchange.rates().then(response =>{
    console.log(response.data);
});

// callback
exchange.rates({}, (err, response) => {
    if(err) return console.error(err)

    console.log(response.data)
})
```

# API Documentation
Documentation is available at [API.md](API.md)

# Fixes & Improvements
Head over to the issues tab at [github.com](https://github.com/abskmj/exchangeratesapi/issues) to report a bug or suggest an improvement. Feel free to contribute to the code or documentation by creating a pull request.

# Sponsor / Support
If you find the project interesting or helpful, please consider sponsoring or supporting it at [github.com](https://github.com/abskmj/exchangeratesapi).