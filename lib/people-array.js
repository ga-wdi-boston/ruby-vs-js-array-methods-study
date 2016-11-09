'use strict';

// // example function count function
// const count = (people) => {
//   return people.reduce((memo /*, p */) => memo + 1, 0);
// };
const Female = (person) => {

  if(person.gender === 'f') {
    return true;
  } else {
    return false;
  }
 };
const women = (people) => {
   let womenCount = 0;
    for (let i = 0; i < people.length; i++) {
      if (Female(people[i]) === true) {
        womenCount++;
    }
  }
  return womenCount;
 };

module.exports = {
  // count,
  women,
};
