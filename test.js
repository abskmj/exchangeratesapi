const { expect } = require('chai')
const exchange = require('./index')

const access_key = 'TEST_API_KEY' // eslint-disable-line camelcase

describe('exchange', () => {
  describe('symbols', () => {
    it('should return symbols', async () => {
      const response = await exchange.symbols({ access_key })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/symbols?access_key=TEST_API_KEY')
    })

    it('should error if api key is missing', async () => {
      try {
        await exchange.symbols()
        expect.fail()
      } catch (err) {
        expect(err).to.equal('Required parameter is missing:access_key')
      }
    })
  })

  describe('rates', () => {
    it('should return latest rates', async () => {
      const response = await exchange.rates({ access_key })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/latest?access_key=TEST_API_KEY')
    })

    it('should return latest rates for a base symbol', async () => {
      const response = await exchange.rates({ access_key, base: 'USD' })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/latest?access_key=TEST_API_KEY&base=USD')
    })

    it('should return latest rates in specific symbols', async () => {
      const response = await exchange.rates({ access_key, symbols: 'USD,GBP' })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/latest?access_key=TEST_API_KEY&symbols=USD%2CGBP')
    })

    it('should return rates on a particular date', async () => {
      const response = await exchange.rates({ access_key, date: '2020-01-01', base: 'USD', symbols: 'EUR,GBP' })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/2020-01-01?access_key=TEST_API_KEY&base=USD&symbols=EUR%2CGBP')
    })

    it('should error if api key is missing', async () => {
      try {
        await exchange.rates()
        expect.fail()
      } catch (err) {
        expect(err).to.equal('Required parameter is missing:access_key')
      }
    })
  })

  describe('convert', () => {
    it('should return coverted amount', async () => {
      const response = await exchange.convert({ access_key, from: 'USD', to: 'EUR', amount: 1, date: '2020-01-01' })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/convert?access_key=TEST_API_KEY&amount=1&date=2020-01-01&from=USD&to=EUR')
    })

    it('should error if api key is missing', async () => {
      try {
        await exchange.convert()
        expect.fail()
      } catch (err) {
        expect(err).to.equal('Required parameter is missing:access_key')
      }
    })
  })

  describe('timeseries', () => {
    it('should return historical rates', async () => {
      const response = await exchange.timeseries({ access_key, start_at: '2020-01-01', end_at: '2020-03-31', base: 'USD', symbols: 'EUR,GBP' })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/timeseries?access_key=TEST_API_KEY&base=USD&end_at=2020-03-31&start_at=2020-01-01&symbols=EUR%2CGBP')
    })

    it('should error if api key is missing', async () => {
      try {
        await exchange.timeseries()
        expect.fail()
      } catch (err) {
        expect(err).to.equal('Required parameter is missing:access_key')
      }
    })
  })

  describe('fluctuation', () => {
    it('should return fluctuations', async () => {
      const response = await exchange.fluctuation({ access_key, start_at: '2020-01-01', end_at: '2020-03-31', base: 'USD', symbols: 'EUR,GBP' })
      expect(response.request.url).to.equals('http://api.exchangeratesapi.io/v1/fluctuation?access_key=TEST_API_KEY&base=USD&end_at=2020-03-31&start_at=2020-01-01&symbols=EUR%2CGBP')
    })

    it('should error if api key is missing', async () => {
      try {
        await exchange.fluctuation()
        expect.fail()
      } catch (err) {
        expect(err).to.equal('Required parameter is missing:access_key')
      }
    })
  })
})
