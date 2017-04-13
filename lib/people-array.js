'use strict'

// example function count function
const count = (people) => {
  return people.reduce((memo /*, p */) => memo + 1, 0)
}

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  return person.filter((memo) => person.gender === 'f')
}

const women = (people) => {
  return isFemale.count
}

module.exports = {
  count,
  women,
  isFemale
}
