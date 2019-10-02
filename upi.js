"use strict"
const _ = require('./utils')
class UPI {
  constructor(pa, pn, isDynamic=false, am=0) {
    this.isDynamic = isDynamic
    this.base = 'upi://pay'
    this.params = new Map()
    if (!pa) {
      throw new Error('Cannot initialize UPI without Payee VPA/ UPI ID');
    }
    if (!_.validateVPA(pa)) {
      throw new Error('Payee VPA /UPI ID format is not known');
    }
    this.params.set('pa', pa)
    if (!pn) {
      throw new Error('Cannot initialize UPI without Payee Name');
    }
     this.params.set('pn', pn)

    if ( am > 0) {
       this.params.set('am',am)
    } else if (this.isDynamic) {
      throw new Error('Cannot initialize Dynamic mode Tags without an Ammount');
    }
         
    // Currency code. Currently
    // ONLY "INR" is the supported
    // value
     this.params.set('cu','INR')
  }

  setMerchant(mc, tid) {
    if (!mc) {
      throw new Error('Merchant Code code cannot be empty');
    }
    this.params.set('mc', mc)
    if (!! tid) {
      this.params.set('tid', tid)
    }
    return this
  }

  setTxRef(refid, note) {
    if (!refid) {
      throw new Error('Reference id cannot be empty');
    }
    this.params.set('tr', refid)
    if (!! note) {
      this.params.set('tn', note)
    }
    return this
  }

  setMinAmount(amount=0) {
    if (amount<=0 || amount >= this.am) {
      throw new Error('Invalid Min Amount');
    }
    this.params.set('mam',amount)
    return this
  }

  setCallback(url) {
    this.params.set('url', encodeURI(url))
    return this
  }

  _validate() {
    if (this.isDynamic && !this.params.has('tr')) {
      throw new Error('Transaction reference ID Mandatory for dynamic URL generation');
    }
    if (this.params.has('mc') && !this.params.has('tr')) {
      throw new Error('Transaction reference ID Mandatory for Merchant transactions');
    }
  }

  _buildQS() {
    let qs = '?'
    this.params.forEach((value, key) => {
      if(!!value && !! key){
        if (qs !== '?') {
          qs += '&'
        } 
        qs += key+"="+value
      }
    })
    return qs
  }

  getLink() {
    this._validate()
    let uri =  this.base + this._buildQS()
    return _.encodeUPI(uri)
  }
}


module.exports = UPI