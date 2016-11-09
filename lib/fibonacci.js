'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let sumFibs = fibs.reduce(function (prev, cur) {
  return prev + cur;
});

fibs.shift();
let prodFibs = fibs.reduce(function (prev, cur){
  return prev * cur;
});

let odd = function(cur) {
  return cur % 2 !== 0;
};
let fibsOdd = fibs.filter(odd);
let sumOdd = fibsOdd.reduce(function (prev, cur) {
  return prev + cur;
});

let even = function(cur) {
  return cur % 2 === 0;
};
let fibsEven = fibs.filter(even);
let prodEven = fibsEven.reduce(function (prev, cur) {
  return prev * cur;
});



module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
