'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const sumFibs = fibs.reduce(function (prev, curr) {
  return prev + curr
}, 0)

const prodFibs = fibs.slice(1, fibs.length).reduce(function (prev, curr) {
  return prev * curr
}, 1)

const sumOdd = fibs.filter(function (val) {
  return val % 2 !== 0
})
.reduce(function (prev, curr) {
  return prev + curr
}, 0)

const prodEven = fibs.filter(function (val) {
  return val % 2 === 0 && val > 0
})
.reduce(function (prev, curr) {
  return prev * curr
}, 1)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
