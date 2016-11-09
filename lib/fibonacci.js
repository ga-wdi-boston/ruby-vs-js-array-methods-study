'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = function () {
  return fibs.reduce((a, b) => a + b);
};

let prodFibs = function () {
  fibs.splice(fibs.indexOf(0), 1);
  return fibs.reduce((a, b) => a * b);
};

let sumOdd = function () {

  let odds = [];

  for (let i = 0; i < fibs.length; i++) {

    if (fibs[i] % 2 !== 0) {
      odds.push(fibs[i]);
    }
  }

  return odds.reduce((a, b) => a + b);
};

let prodEven = function () {

  let evens = [];

  for (let i = 0; i < fibs.length; i++) {

    if (fibs[i] % 2 === 0) {
      evens.push(fibs[i]);
    }
  }

  return evens.reduce((a, b) => a * b);
};


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
