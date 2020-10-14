'use strict'

class ResetPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      // validation rules
      email: 'required|email',
      password: 'required|confirmed'
    }
  }
}

module.exports = ResetPassword
