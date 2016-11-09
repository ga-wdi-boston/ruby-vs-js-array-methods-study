'use strict';

// example function count function
const count = (people) => {
  return people.reduce((memo /*, p */) => memo + 1, 0);
};

// callback for reduce
// each person has a gender attribute

const isFemale = (person) => {
  return person.gender(female);
};

const women = (person) => {

};

module.exports = {
  count,
  women,
};
