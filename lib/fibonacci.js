'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let noZeroFibs = fibs.splice(0, 1);

let sumFibs = fibs.reduce(function(a, b) {
    return a + b;
  }, 0);

let prodFibs = noZeroFibs.reduce(function(a, b) {
    return a * b;
  }, 1);


  let sumOdd = [];
    for (let i = 0; i < fibs.length; i++) {
        if (fibs[i] % 2 !== 0) {
            sumOdd.push(fibs[i]);
        }
    }
    return sumOdd.reduce(function(a,b) {
      return a + b;
    }, 0);

    }
  }


let prodEven= function (fibs)
    if (fibs[i] %2 === 0 && fibs[i] > 0 ) {
      prodEven.push[i];
    }
    prodEven.reduce(function(a,b)) {
      return a * b
    }

module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
