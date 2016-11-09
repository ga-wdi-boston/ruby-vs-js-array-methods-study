'use strict';
let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

const sumFibs = () => {
  let sum = 0;
    for (let i = 1; i < fibs.length; i++) {
      sum += fibs[i];
 }
 return fibs;
};

const prodFibs = () => {
  let prod = 0;
    for (let i = 1; i < fibs.length; i++) {
      prod *= fibs[i];
 }
 return fibs;
};

const sumOdds = () => {
  let sumOdds = 0;
    for (let i = 1; i < fibs.length; i++) {
      if [i] % 3 === true;
      sumOdds= fibs[i];
 }
 return fibs;
};

let prodEven;


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
