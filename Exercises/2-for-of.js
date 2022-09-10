'use strict';

const sum = (...args) => {
  let result = 0;
  for (const number of args) {
    result += number;
  }
  return result;
};

const b = sum(2, 3);
console.log(b);

module.exports = { sum };
