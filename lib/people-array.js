'use strict'

// example function count function
const count = (people) => {
  return people.reduce((memo /*, p */) => memo + 1, 0)
}

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  return person.gender === 'f'
}

const women = (people) => {
  // mimic example count function but don't completely understand the memo piece
  return people.filter(isFemale).reduce((memo) => memo + 1, 0)
}

module.exports = {
  count,
  women
}
