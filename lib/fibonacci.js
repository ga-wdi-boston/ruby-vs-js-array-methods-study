'use strict';

let fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].reduce(function(a, b) {
  return a + b;
}, 0);
console.log(sumFibs);

fib.shift();
console.log(fib);

let prodFibs = fib.reduce(function(a,b){return a*b;});
console.log(prodFibs);

let fibTwo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let odd = [];
  for (let i = 0; i < fibTwo.length; i++) {
    if ((fibTwo[i] % 2) !== 0) {
      odd.push(fibTwo[i]);
    }
  }

let sumOdd = odd.reduce(function(a, b) {
  return a + b;
}, 0);
  if (sumOdd % 2 !== 0) {
    sumOdd.reduce(function(a, b) {
      return a + b;
    }, 0);
  }
}

let fibThree= [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let even = [];
for (let i = 0; i < fibThree.length; i++) {
    if ((fibThree[i] % 2) === 0 && fibThree[i] !== 0) {
      even.push(fibThree[i]);
    }
  }

let prodEven = even.reduce(function(a,b){return a*b;});



module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
