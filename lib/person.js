'use strict'

const Person = function (h) {
  Object.keys(h).forEach(k => this[k] = h[k])
}

Person.prototype.age = function () {
  const dob = new Date(this.dob)
  const today = new Date()
  let thisYear = today.getFullYear()
  if (dob.getMonth() > today.getMonth() ||
      dob.getMonth() === today.getMonth() &&
      dob.getDate() >= today.getDate()) {
    thisYear -= 1
  }

  return thisYear - dob.getFullYear()
}

module.exports = Person
