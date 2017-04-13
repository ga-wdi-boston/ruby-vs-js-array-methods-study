'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let sumFibs = fibs.reduce((array, value) => array + value)

let prodFibs = fibs.slice(1).reduce((array, value) => array * value)

let sumOdd = fibs.filter(e => e % 2 !== 0).reduce((array, value) => array + value)

let prodEven = fibs.slice(1).filter(e => e % 2 === 0).reduce((array, value) => array * value)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
