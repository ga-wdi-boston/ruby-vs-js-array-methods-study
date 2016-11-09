'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs;

const sumNums = function(fibs) {
  let sum = 0;
  for(let i in fibs){
    sum =+ fibs[i];
  }
  return sum;
}

let prodFibs;

const prodNums = function(fibs) {
  let prod = 1;
  for(let i in fibs){
    if(fibs[i] != 0){
      prod *= fibs[i];
    }
  }
  return prod;
}

let sumOdd;

const sumOddNums = function(fibs) {
  let sum = 0;
  for(let i in fibs){
    if(fibs[i]%2 != 0){
      sum += fibs[i];
    }
  }
  return sum;
}

let prodEven;

const prodEvenNums = function(fibs) {
  let prod = 1;
  for(let i in fibs){
    if(fibs[i]%2 == 0){
      prod *= fibs[i];
    }
  }
  return prod;
}


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
