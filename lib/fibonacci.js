'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const add = function (a, b) {
  return a + b
}
let sumFibs = fibs.reduce(add, 0)
console.log(sumFibs)

let prodFibs = 1
const getProd = function (array) {
  for (let i = 1; i < fibs.length; i++) {
    prodFibs = prodFibs * fibs[i]
  }
}
getProd(fibs)
console.log(prodFibs)

let sumOdd = 0
const getOdd = function (array) {
  for (let i = 1; i < fibs.length; i++) {
    if (fibs[i] % 2 === 1) {
      sumOdd = sumOdd + fibs[i]
    }
  }
}
getOdd(fibs)
console.log(sumOdd)

let prodEven = 1
const getEven = function (array) {
  for (let i = 1; i < fibs.length; i++) {
    if (fibs[i] % 2 === 0) {
      prodEven = prodEven * fibs[i]
    }
  }
}
getEven(fibs)
console.log(prodEven)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
