'use strict'
const people = require('./people.js')

// example function count function
const count = (people) => {
  return people.reduce((memo /*, p */) => memo + 1, 0)
}

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  return people.reduce((gender) => gender === 'f')
}

const women = (people) => {
  return
}

module.exports = {
  count,
  women
}
