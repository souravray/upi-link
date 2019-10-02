const handels = [ 
      '@axisgo',
      '@pingpay',
      '@axisbank',
      '@apl',
      '@dbs',
      '@dcb',
      '@dcbbank'
      '@axisb',
      '@abfspay',
      '@fbl',
      '@hdfcbankjd',
      '@ikwik',
      '@idfcbank',
      '@kmbl',
      '@indus',
      '@yesbank',
      '@ybl',
      '@okaxis',
      '@okhdfcbank',
      '@okicici',
      '@oksbi',
      '@icici',
      '@barodapay',
      '@icicibank',
      '@myicici',
      '@upi'
    ],
    vpaExp = /^[\w\-\.]+@\w+$/;


  module.exports = {
    validateVPA: function( vpa ) {
      if(vpaExp.test(vpa)) {
        let handle = vpa.match(/@\w+$/)[0];
        return !! handels.find( h => h===handle)
      }
    },
    encodeUPI(str) {
      return str.replace(/\s+/gi, "%20")
    }
  }
