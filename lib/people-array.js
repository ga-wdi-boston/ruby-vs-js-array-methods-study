'use strict';

// example function count function
const count = (people) => {
  return people.reduce((memo /*, p */ ) => memo + 1, 0);
};

// callback for reduce
// each person has a gender attribute
const isFemale = (person) => {
  for (let i = 0; i < person.length; i++) {
    let list = [];

    if (person.gender === "female") {
      list.push(person[i]);
    }

  return list;
}
};

const women = (people) => {
  return isFemale(people).length;
};

module.exports = {
  count,
  women,
};
