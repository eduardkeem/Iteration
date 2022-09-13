'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (persons) => {

  const result = {};

  for (const key in persons) {
    const obj = persons[key];
    const duration = obj['died'] - obj['born'];
    result[key] = duration;
  }

  return result;

};

// ages(persons);

console.log(ages(persons));



/* const ages = persons => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    data[name] = person.died - person.born;
  }
  return data;
}; */


module.exports = { ages };
