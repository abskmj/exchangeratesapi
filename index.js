module.exports = require('@abskmj/cligen').getClient({
  baseUrl: 'https://api.exchangeratesapi.io',
  operations: {
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
    history: {
      uri: '/history',
      query: {
        path: {
          parameters: [
            { name: 'start_at' },
            { name: 'end_at' },
            { name: 'symbols' }
          ]
        }
      }
    }
  }
})
