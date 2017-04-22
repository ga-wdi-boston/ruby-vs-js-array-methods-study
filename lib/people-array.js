'use strict'

// example function count function
const count = (people) => {
  return people.reduce((memo) => memo + 1, 0)
}

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  return person.gender === 'f'
}

const women = (people) => {
  return people.reduce(isfemale)
}

module.exports = {
  count,
  women
}
