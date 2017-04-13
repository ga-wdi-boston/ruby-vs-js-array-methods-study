'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let sumFibs = fibs.reduce((acc, val) =>  acc + val)

let prodFibs = fibs.slice(1).reduce((acc, val) =>  acc * val)

let sumOdd = fibs.filter(e => e % 2 !== 0).reduce((acc, val) => acc + val)

let prodEven = fibs.slice(1).filter(e => e % 2 === 0).reduce((acc, val) => acc * val)

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
