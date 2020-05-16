const { expect } = require('chai')
const exchange = require('./index')

describe('Client', function () {
  it('should return all rates of current date', function () {
    return exchange.rates().then(response => {
      expect(response.status).to.equals(200)
      expect(response.request.url).to.equals('https://api.exchangeratesapi.io/latest')
    })
  })

  it('should return all rates of a particular date', function () {
    const particular = '2018-01-01'
    return exchange.rates({ date: particular }).then(response => {
      expect(response.status).to.equals(200)
      expect(response.request.url).to.equals(`https://api.exchangeratesapi.io/${particular}`)
    })
  })

  it('should return all rates of a particular currency', function () {
    const particular = 'USD'
    return exchange.rates({ base: particular }).then(response => {
      expect(response.status).to.equals(200)
      expect(response.data.base).to.equals(particular)
    })
  })

  it('should return particular rates of a particular currency', function () {
    const particular = 'USD'
    return exchange.rates({
      base: particular,
      symbols: 'EUR,GBP'
    }).then(response => {
      expect(response.status).to.equals(200)
      expect(response.data.base).to.equals(particular)
      expect(response.data.rates).to.have.property('EUR')
      expect(response.data.rates).to.not.have.property('AUD')
    })
  })

  it('should return historical rates for a time period', function () {
    const startDate = '2018-01-01'
    const endDate = '2018-01-15'

    return exchange.history({
      start_at: startDate,
      end_at: endDate
    }).then(response => {
      expect(response.status).to.equals(200)
      expect(response.request.url).to.equals(`https://api.exchangeratesapi.io/history?end_at=${endDate}&start_at=${startDate}`)
      expect(response.data.start_at).to.equals(startDate)
      expect(response.data.end_at).to.have.equals(endDate)
    })
  })

  it('should return historical rates for specific currencies', async () => {
    const startDate = '2018-01-01'
    const endDate = '2018-01-15'

    const response = await exchange.history({
      start_at: startDate,
      end_at: endDate,
      symbols: 'ILS,JPY'
    })

    expect(response.status).to.equals(200)
    expect(response.request.url).to.equals(`https://api.exchangeratesapi.io/history?end_at=${endDate}&start_at=${startDate}&symbols=ILS%2CJPY`)
    expect(response.data.start_at).to.equals(startDate)
    expect(response.data.end_at).to.have.equals(endDate)
  })

  it('should return historical rate for specific base currency', async () => {
    const startDate = '2018-01-01'
    const endDate = '2018-01-15'
    const base = 'USD'

    const response = await exchange.history({
      start_at: startDate,
      end_at: endDate,
      base
    })

    expect(response.status).to.equals(200)
    expect(response.request.url).to.equals(`https://api.exchangeratesapi.io/history?base=${base}&end_at=${endDate}&start_at=${startDate}`)
    expect(response.data.start_at).to.equals(startDate)
    expect(response.data.end_at).to.have.equals(endDate)
    expect(response.data.base).to.have.equals(base)
  })
})
