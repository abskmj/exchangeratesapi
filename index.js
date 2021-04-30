/**
 * Javascript client for exchangeratesapi.io
 *
 * Import the client
 * ```
 * const exchange = require('@abskmj/exchangeratesapi')
 * ```
 * @namespace exchange
 */
module.exports = require('@abskmj/cligen').getClient({
  baseUrl: 'http://api.exchangeratesapi.io/v1',
  operations: {
    /**
     * Get exchange symbols
     * @function symbols
     * @memberof exchange
     * @param {string} access_key API Key
     * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
     * @example
     * exchange.symbols({ access_key: '<API_KEY>' })
     */
    symbols: {
      uri: '/symbols',
      data: {
        query: {
          parameters: [
            { name: 'access_key', required: true }
          ]
        }
      }
    },
    /**
     * Get exchange rates
     * @function rates
     * @memberof exchange
     * @param {string} access_key API Key
     * @param {string} [date=latest] Date in YYYY-MM-DD format
     * @param {string} [base=EUR] Currency against which rates are quoted
     * @param {string} [symbols] Comma separated currencies for which rates are needed
     * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
     * @example
     * // get latest rates
     * exchange.rates({ access_key: '<API_KEY>' })
     * @example
     * // get latest rates for a base symbol
     * exchange.rates({ access_key: '<API_KEY>', base: 'USD' })
     * @example
     * // get latest rates in specific symbols
     * exchange.rates({ access_key: '<API_KEY>', symbols: 'USD,GBP' })
     * @example
     * // get rates on a specific date
     * exchange.rates({ access_key: '<API_KEY>', date: '2010-01-12' })
     */
    rates: {
      uri: '/{date}',
      data: {
        path: {
          parameters: [{
            name: 'date',
            default: 'latest'
          }]
        },
        query: {
          parameters: [
            { name: 'access_key', required: true },
            { name: 'base' },
            { name: 'symbols' }
          ]
        }
      }
    },
    /**
     * Get converted amount
     * @function convert
     * @memberof exchange
     * @param {string} access_key API Key
     * @param {string} from Symbol converted from
     * @param {string} to Symbol converted to
     * @param {string} amount Amount to be converted
     * @param {string} [date] Date in YYYY-MM-DD format
     * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
     * @example
     * exchange.timeseries({ access_key: '<API_KEY>', start_at: '2020-01-01', end_at: '2020-03-31' })
     */
    convert: {
      uri: '/convert',
      data: {
        query: {
          parameters: [
            { name: 'access_key', required: true },
            { name: 'from', required: true },
            { name: 'to', required: true },
            { name: 'amount', required: true },
            { name: 'date' }
          ]
        }
      }
    },
    /**
     * Get historical exchange rates
     * @function timeseries
     * @memberof exchange
     * @param {string} access_key API Key
     * @param {string} start_at State date in YYYY-MM-DD format
     * @param {string} end_at End date in YYYY-MM-DD format
     * @param {string} [base=EUR] Currency against which rates are quoted
     * @param {string} [symbols] Comma separated currencies for which rates are needed
     * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
     * @example
     * exchange.timeseries({ access_key: '<API_KEY>', start_at: '2020-01-01', end_at: '2020-03-31' })
     */
     timeseries: {
      uri: '/timeseries',
      data: {
        query: {
          parameters: [
            { name: 'access_key', required: true },
            { name: 'start_at' },
            { name: 'end_at' },
            { name: 'base' },
            { name: 'symbols' }
          ]
        }
      }
    },
    /**
       * Get fluctuations
       * @function fluctuation
       * @memberof exchange
       * @param {string} access_key API Key
       * @param {string} start_at State date in YYYY-MM-DD format
       * @param {string} end_at End date in YYYY-MM-DD format
       * @param {string} [base=EUR] Currency against which rates are quoted
       * @param {string} [symbols] Comma separated currencies for which rates are needed
       * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
       * @example
       * exchange.fluctuation({ access_key: '<API_KEY>', start_at: '2020-01-01', end_at: '2020-03-31' })
       */
     fluctuation: {
      uri: '/fluctuation',
      data: {
        query: {
          parameters: [
            { name: 'access_key', required: true },
            { name: 'start_at', required:true },
            { name: 'end_at', required: true },
            { name: 'base' },
            { name: 'symbols' }
          ]
        }
      } 
    }
  }
}, { mock: process.env.NODE_ENV == 'test' })
