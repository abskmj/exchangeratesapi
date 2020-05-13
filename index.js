module.exports.getClient = options => {
  return require('@abskmj/cligen').getClient({
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
            parameters: [{
              name: 'base'
            },
            {
              name: 'symbols'
            }
            ]
          }
        }
      }
    }
  }).rates
}
