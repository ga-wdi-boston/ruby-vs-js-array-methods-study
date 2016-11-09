'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = function() {
  return fibs.reduce( (a, b) => a + b );
};

let prodFibs = function() {
  fibs = fibs.splice(1);
  return fibs.reduce((a,b) => a*b);
};

let sumOdd = function() {
  fibs.unshift(0);
  let arr = fibs.filter(function(num){ if((num % 2)!==0) return num;});
  return arr.reduce((a,b) => a+b );
};

let prodEven = function() {
  fibs = fibs.splice(1);
  let arr = fibs.filter(function(num){if(num%2 === 0) return num;});
  return arr.reduce((a,b) => a*b );
};


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
