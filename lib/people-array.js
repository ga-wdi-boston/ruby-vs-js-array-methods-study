'use strict';

// example function count function
const count = (people) => {
  return people.reduce((memo, p) => memo + 1, 0);
};

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  let femaleCount = [];
  for (var i = 0; i < person.length; i++) {
    if (person.gender[0] === "f") {
      let femaleCount = femaleCount + 1;
    }
    return femaleCount;
  }
};
const women = (people) => {

};

module.exports = {
  count,
  women,
};
