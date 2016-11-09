'use strict';

const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = fibs.reduce(function(a, b) {
  return a + b;
}, 0);


let prodFibs = 0;
fibs.reduce(function(a, b) {
   if (b > 0) {
    prodFibs *= b ;
  }
  return prodFibs
});


let sumOdd = 0;
fibs.reduce(function(a, b) {
  if (b % 2 !== 0) {
    sumOdd = a + b;
  }
  return sumOdd;
}, 0);


let prodEven = 0;
fibs.reduce(function(a, b) {
  if (b % 2 === 0) {
    sumOdd = a + b;
  }
  return sumOdd;
}, 0);


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
