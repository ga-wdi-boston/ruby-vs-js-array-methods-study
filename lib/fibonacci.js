'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs=function(){
  let sum = 0;
   for (let i = 0; i < fibs.length; i++) {
      sum += fibs[i];
    }
    return sum;
};


let prodFibs = function(){
  let prod = 1;
  let newFibs = fibs.slice(1, fibs.length);
  for (let i = 0; i < newFibs.length; i++) {
    prod *= newFibs[i];
  }
  return prod;
};


let odd = function(num){
  return num%2 !== 0;
};

let even = function(num){
  return num%2 === 0;
};

let sumOdd = function(){
  let newFibs = fibs.filter(odd);
  let sum = 0;
   for (let i = 0; i < newFibs.length; i++) {
      sum += newFibs[i];
    }
    return sum;

};

let prodEven = function(){
  let newFibs = fibs.slice(1).filter(even);
  let prod = 1;
  for (let i = 0; i < newFibs.length; i++) {
      prod *= newFibs[i];
    }
    return prod;
  };


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
