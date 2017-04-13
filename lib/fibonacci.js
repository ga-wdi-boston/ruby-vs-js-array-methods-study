'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const sumFibs = fibs.reduce(function (acc, val) {
  return acc + val
})
const prodFibs = function (fibs) {
  let result = 0
  fibs.shift()
  result = fibs.reduce(function (acc, val) {
    return acc * val
  })
  return result
}

const sumOdd = function (fibs) {
  let result = 0
  fibs.reduce(function (acc, val) {
    if (val % 2 !== 0) {
      result += val
    }
  }, 0)
  return result
}

const prodEven = function (fibs) {
  let result = 0
  fibs.reduce(function (acc, val) {
    if (val % 2 === 0) {
      result *= val
    }
  }, 0)
  return result
}

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
