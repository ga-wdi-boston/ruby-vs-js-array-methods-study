'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

fibs.reduce(
  function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  }
)

let prodFibs = fibs.slice(1, fibs.length).reduce((prev, curr) => prev * curr )

let sumOdd = fibs.filter((number) => number % 2 === 1)


sumOdd.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  }
)

let noZero = fibs.slice(1, fibs.length)
let prodEven = noZero.filter((number) => number % 2 === 0)

prodEven.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator * currentValue;
  }
)


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
