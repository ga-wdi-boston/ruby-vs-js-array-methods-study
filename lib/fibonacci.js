'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
const fibsNoZero = fibs.shift()
const fibsOdd = fibs.filter(e => e % 2 !== 0)
const fibsEven = fibs.filter(e => e % 2 === 0)

const sumFibs = fibs.reduce((e, i) => e + i)

const prodFibs = fibs.reduce((e, i) => e * i)

const sumOdd = fibsOdd.reduce((e, i) => e + i)

const prodEven = fibsEven.reduce((e, i) => e * i)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
