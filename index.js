"use strict"

const UPI = require("./upi"),
     UPIP = require("./upi-p");

function factoryP(vpat, name, isDyanmic, ammount) {
  return new UPIP(function (rslv, rjct) {
    let upi = new UPI(vpat, name, isDyanmic, ammount)
    if (!!upi) {
      rslv(upi)
    } else {
      rjct(Error("UPI object not initialized"))
    }
  })  
}

function factory(vpat, name, isDyanmic, ammount) {
    return new UPI(vpat, name, isDyanmic, ammount)  
}

module.exports = {
  Static: function (vpat, name, ammount) {
    return factory(vpat, name, false, ammount)
  },

  Dynamic: function (vpat, name, ammount) {
    return factory(vpat, name, true, ammount)
  },

  StaticP: function (vpat, name, ammount) {
    return factoryP(vpat, name, false, ammount)
  },

  DynamicP: function (vpat, name, ammount) {
    return factoryP(vpat, name, true, ammount)
  },
}
