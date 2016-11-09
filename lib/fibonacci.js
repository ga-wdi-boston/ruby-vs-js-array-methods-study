'use strict';

let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let sumFibs = fibs.reduce(function(previous,current){
  return previous + current;
});

let prodFibs = fibs.slice(1).reduce(function(previous,current){
  return previous * current;
});

let sumOdd = fibs.filter(function(num) {
  return num % 2 !== 0;
})
.reduce(function(previous,current){
  return previous + current;
});


let prodEven = fibs.slice(1).filter(function(num) {
  return num % 2 === 0;
})
.reduce(function(previous,current){
  return previous * current;
});


module.exports = {
  sumFibs,
  prodFibs,
  sumOdd,
  prodEven,
};
