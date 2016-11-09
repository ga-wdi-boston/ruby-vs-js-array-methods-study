'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = fibs.reduce( (previous, current) => {
    return previous + current;
  });

let prodFibs = fibs.slice(1).reduce((previous, current) => {
      return previous * current;
  });

let sumOdd = fibs.filter((e) => {return e%2 !== 0;}).reduce( (previous, current) => {
    return previous + current;
  });

let prodEven = fibs.filter((e) => {return (e%2 === 0 && e !== 0);}).reduce( (previous, current) => {
    return previous * current;
  });


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
