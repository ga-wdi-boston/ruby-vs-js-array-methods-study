'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const sumFibs = fibs.reduce(function (prev, curr) {
  return prev + curr
})

const prodFibs = fibs.slice(1).reduce(function (prev, curr) {
  return prev * curr
})

const sumOdd = fibs.reduce(function (prev, curr) {
  if (curr % 2 !== 0) return prev + curr
  else return prev
})

const prodEven = fibs.slice(1).reduce(function (prev, curr) {
  if (curr % 2 === 0) return prev * curr
  else return prev
})

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
