'use strict'

// example function count function
const count = (people) => {
  return people.reduce((memo /*, p */) => memo + 1, 0)
}

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  if (person.gender = 'f') {
    return true
  }
}

const women = (people) => {
  people.filter(isFemale)
}

module.exports = {
  count,
  women
}
