'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let sumFibs = fibs.reduce(function (acc, val) {
  return acc + val
})

let sumOdd = fibs.filter(function (value) {
  return value % 2 !== 0
}).reduce(function (acc, val) {
  return acc + val
})

let prodFibs = fibs.filter(function (value) {
  return value !== 0
}).reduce(function (acc, val) {
  return acc * val
})

// let prodEven = fibs.shift().filter(function (value) {
//   return value % 2 == 0
// }).reduce(function (acc, val) {
//   return acc * val
// })

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd
//  prodEven
}
