'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function add (a, b) {
  return a + b
}
const sumFibs = fibs.reduce(add, 0)

const prodFibs = fibs.slice(1, fibs.length).reduce(function (a, b) {
  return a * b
})

const sumOdd = fibs.filter(function (num) {
  return num % 2 !== 0
}).reduce(function (a, b) {
  return a + b
})

const prodEven = fibs.slice(1, fibs.length).filter(function (num) {
  return num % 2 === 0
}).reduce(function (a, b) {
  return a * b
})

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
