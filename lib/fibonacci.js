'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let getOddOrEven = function(passed_array, get_even){
  let odds = [];
  let evens = [];

  for (let i = 0; i < passed_array.length; i++) {
    if (passed_array[i] % 2 === 0){
      evens.push(passed_array[i]);
    } else {
      odds.push(passed_array[i]);
    }
  }

  if (get_even){
    return evens;
  } else {
    return odds;
  }
};

let sumFibs = function(){
  return fibs.reduce( (a, b) => a + b);
};

let prodFibs = function(){
  fibs.splice(fibs.indexOf(0), 1);
  return fibs.reduce(function(a, b){
    return a * b;
  });
};

let sumOdd = function(){
  return getOddOrEven(fibs, false).reduce( (a, b) => a + b );
};

let prodEven = function(){
  return getOddOrEven(fibs, true).reduce( (a, b) => a * b );
};


module.exports = {
  getOddOrEven,
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
