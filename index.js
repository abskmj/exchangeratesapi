/**
 * Unofficial node.js client for exchangeratesapi.io
 *
 * Import the client
 * ```
 * const exchange = require('@abskmj/exchangeratesapi')
 * ```
 * @namespace exchange
 */
module.exports = require('@abskmj/cligen').getClient({
  baseUrl: 'https://api.exchangeratesapi.io',
  operations: {
    /**
     * Get exchange rates
     * @function rates
     * @memberof exchange
     * @param {string} [date=latest] Date in YYYY-MM-DD format
     * @param {string} [base=EUR] Currency against which rates are quoted
     * @param {string} [symbols] Comma separated currencies for which rates are needed
     * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
     * @example
     * exchange.rates()
     * @example
     * exchange.rates({ base: 'USD' })
     * @example
     * exchange.rates({ symbols: 'USD,GBP' })
     * @example
     * exchange.rates({ date: '2010-01-12' })
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
            { name: 'base' },
            { name: 'symbols' }
          ]
        }
      }
    },
    /**
     * Get historical exchange rates
     * @function history
     * @memberof exchange
     * @param {string} start_at State date in YYYY-MM-DD format
     * @param {string} end_at End date in YYYY-MM-DD format
     * @param {string} [base=EUR] Currency against which rates are quoted
     * @param {string} [symbols] Comma separated currencies for which rates are needed
     * @returns {Axios.Response} [Response](https://github.com/axios/axios#response-schema) from Axios module
     * @example
     * exchange.history()
     * @example
     * exchange.history({ base: 'USD' })
     * @example
     * exchange.history({ symbols: 'USD,GBP' })
     * @example
     * exchange.history({ date: '2010-01-12' })
     */
    history: {
      uri: '/history',
      data: {
        query: {
          parameters: [
            { name: 'start_at' },
            { name: 'end_at' },
            { name: 'base' },
            { name: 'symbols' }
          ]
        }
      }
    }
  }
})
