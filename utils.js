const handels = require('./psp'),
    vpaExp = /^[\w\-\.]+@\w+$/;


  module.exports = {
    validateVPA: function( vpa ) {
      if(vpaExp.test(vpa)) {
        let handle = vpa.match(/@\w+$/)[0];
        return handels.has(handle)
      }
    },
    encodeUPI(str) {
      return str.replace(/\s+/gi, "%20")
    }
  }
