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
 return people.filter(isFemale).reduce(((memo /*, p */) => memo + 1, 0);

module.exports = {
  count,
  women,
};
