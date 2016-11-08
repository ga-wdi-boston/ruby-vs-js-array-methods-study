'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

//Use reduce to find the sum of the `fibs` array.
let sumFibs = fibs.reduce((pv, cv) =>  pv + cv);

//Use array methods to find the product of the `fibs` array, not including 0.
let prodFibs = fibs.slice(1).reduce((pv, cv) => pv * cv);

// Use array methods to find the sum of the odd numbers in the `fibs` array.
// Use array methods to find the product of the even numbers in the `fibs` array, not including 0.
let oddFibs = [];
let evenFibs = [];
for (let i = 0; i < fibs.length; i++) {
  if (fibs[i] % 2 === 0) {
    evenFibs.push(fibs[i]);
  } else {
    oddFibs.push(fibs[i]);
  }
}
evenFibs.shift();

let sumOdd = oddFibs.reduce((pv, cv) => pv + cv);
let prodEven = evenFibs.reduce((pv, cv) => pv * cv);




module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
