'use strict'

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let sumFibs = fibs.reduce((a, b) => a + b, 0)

// source: http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

let prodFibs = fibs.slice(1).reduce((a, b) => a * b)

// sources:
// http://stackoverflow.com/questions/38096687/remove-first-element-from-array-and-return-the-the-array-minus-the-first-element
// http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

let oddArray = fibs.filter(odd)
let sumOdd = oddArray.reduce((a, b) => a + b, 0)

// sources:
// http://stackoverflow.com/questions/7870688/writing-a-program-to-add-all-the-odd-numbers-in-an-array
// http://stackoverflow.com/questions/22277621/sum-of-even-numbers-in-an-javascript-array
// https://zenscript.wordpress.com/2013/12/08/using-javascript-to-filter-even-numbers-from-an-array/

let evenArray = fibs.filter(even)
let prodEven = evenArray.slice(1).reduce((a, b) => a * b)

// sources:
// http://stackoverflow.com/questions/7870688/writing-a-program-to-add-all-the-odd-numbers-in-an-array
// http://stackoverflow.com/questions/22277621/sum-of-even-numbers-in-an-javascript-array
// https://zenscript.wordpress.com/2013/12/08/using-javascript-to-filter-even-numbers-from-an-array/

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven
}
