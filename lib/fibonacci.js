'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const sumFibs = fibs.reduce(function (previous, current) {
  return previous + current
}, 0)

const prodFibs = fibs.slice(1, fibs.length).reduce(function (previous, current) {
  return previous * current
}, 1)

const sumOdd = fibs.filter(function (num) {
  return num % 2 !== 0
}).reduce(function (previous, current) {
  return previous + current
}, 0)

const prodEven = fibs.filter(function (num) {
  return num % 2 === 0 && num > 0
}).reduce(function (previous, current) {
  return previous * current
}, 1)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
