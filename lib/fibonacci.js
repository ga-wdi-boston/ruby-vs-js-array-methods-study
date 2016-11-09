'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = fibs.reduce((pv, cv) => pv+cv, 0);

let prodFibs = fibs.filter((e) => e > 0).reduce((p, c) => p * c);

let sumOdd = fibs.filter((e) => e % 2 !== 0).reduce((p, c) => p + c);

let prodEven;


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
