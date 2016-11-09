'use strict';

let loadPeople = require('../lib/people.js');

loadPeople().then((people) => {
  let count = people.reduce((m /*, p */) => m + 1, 0);
  console.log(`count: ${count}, length: ${people.length}`);
}).catch((error) => console.log(error));

loadPeople().then((people) => {
  let women = people.reduce((m, p) => {
    if (p.gender === 'f'){
      m++;
    }
  }, 0);
  console.log(`women: ${women}, length: ${people.length}`);
}).catch((error) => console.log(error));

let women = (people) => {
  people.reduce((m, p) => {
    if (p.gender === 'f'){
      m++;
    }
  }, 0);
};

module.exports = {
  women,
};
