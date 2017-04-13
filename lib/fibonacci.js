'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let sumFibs = function (fibs) {
  let total = 0
  for (let i = 0; i < fibs.length; i++) {
    total = total + fibs[i]
  }
  return total
}

let prodFibs = function (fibs) {
  let product = 1
  for (let i = 0; i < fibs.length; i++) {
    console.log(fibs[i])
    if (fibs[i] === 0) {
      product = product * 1
    } else {
      product = product * fibs[i]
    }
  }
  return product
}

let sumOdd = function(fibs) {
  let sum = 0
  for (let i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 !== 0) {
      sum += fibs[i]
    }
  }
  return sum
}

let prodEven = function (fibs) {
  let product = 1
  for (let i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 === 0 && fibs[i] !== 0) {
      product *= fibs[i]
    }
  }
  return product
}

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
