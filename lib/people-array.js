'use strict';

// example function count function
const count = (people) => {

  return people.reduce((memo /*, p */) => memo + 1, 0);
};

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {

};

const women = (people) => {
  let women = people.filter(function(person){return person.gender === "f"});
  return women.length;
};

module.exports = {
  count,
  women,
};
