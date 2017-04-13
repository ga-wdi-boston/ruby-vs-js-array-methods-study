'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const sumFibs = function (fibs) {
  let sum = 0
  for (let i = 0; i < fibs.length; i++) {
    sum = sum + fibs[i]
  }
  return sum
}

console.log(sumFibs(fibs))

const prodFibs = function (fibs) {
  let prod = 1
  for (let i = 1; i < fibs.length; i++) {
    prod = prod * fibs[i]
  }
  return prod
}

console.log(prodFibs(fibs))
const sumOdd = function (fibs) {
  let sum = 0
  for (let i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 === 1) {
      sum = sum + fibs[i]
    }
  }
  return sum
}

console.log(sumOdd(fibs))
const prodEven = function (fibs) {
  let prod = 1
  for (let i = 1; i < fibs.length; i++) {
    if (fibs[i] % 2 === 0) {
      prod = prod * fibs[i]
    }
  }
  return prod
}

console.log(prodEven(fibs))

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
