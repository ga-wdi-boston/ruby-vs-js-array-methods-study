'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const sumFibs = fibs.reduce(function (a, b) {
  return a + b
}, 0)

const prodFibs = fibs.slice(1).reduce(function (a, b) {
  return a * b
})

const sumOdd = function (fibs) {
  let sum = 0
  for (let i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 === 1) {
      sum = sum + fibs[i]
    }
  }
  return sum
}

const prodEven = function (fibs) {
  let prod = 1
  for (let i = 1; i < fibs.length; i++) {
    if (fibs[i] % 2 === 0) {
      prod = prod * fibs[i]
    }
  }
  return prod
}

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
