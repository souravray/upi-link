class UPIP extends Promise {
  setMerchant(mc, tid) {
    return this.then( upi => {
      return upi.setMerchant(mc, tid)
    })
  }

  setTxRef(refid, note) {
    return this.then( upi => {
      return upi.setTxRef(refid, note)
    })
  }

  setMinAmount(amount) {
    return this.then( upi => {
      return upi.setMinAmount(amount)
    })
  }

  setCallback(url) {
    return this.then( upi => {
      return upi.setCallback(url)
    })
  }

  getLink() {
    return this.then( upi => {
      return upi.getLink()
    })
  }
}

module.exports = UPIP