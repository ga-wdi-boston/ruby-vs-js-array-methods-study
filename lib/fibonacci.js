'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
const sumFibs = fibs.reduce((acc, e) => acc + e)
const prodFibs = fibs.reduce((acc, e) => e ? acc * e : acc, 1)
const sumOdd = fibs.reduce((acc, e) => e % 2 !== 0 ? acc + e : acc)
const prodEven = fibs.reduce((acc, e) => e && e % 2 === 0 ? acc * e : acc, 1)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
