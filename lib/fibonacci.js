'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = fibs.reduce(function(a,b){return a+b;});

let prodFibs =
fibs.filter((x) => {return x !== 0;}).reduce((a,b) => {return a*b;});

let isOdd = (x) => {
  if (x % 2 !== 0) {
    return x;
  }
};

let sumOdd =
fibs.filter(isOdd).reduce((a,b) => {return a+b;});

let prodEven =
fibs.filter((x) => {
  if (x % 2 === 0) {
    return x;
  }
})
.reduce((a,b) => {return a*b;});


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};

// In `bin/fibonacci.js` please write the following:
// 1. `sumFibs`. Use reduce to find the sum of the `fibs` array.
// 2. `prodFibs`. Use array methods to find the product of the `fibs` array,
//     not including 0.
// 3. `sumOdd`. Use array methods to find the sum of the odd numbers in the
//     `fibs` array.
// 4. `prodEven`. Use array methods to find the product of the even numbers in the
//     `fibs` array, not including 0.
