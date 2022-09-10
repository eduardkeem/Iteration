'use strict';

const sum = (...args) => {
  let limit = 0;
  let result = 0;
  do {
    result += args[limit];
    limit++;
  } while (limit < args.length);
  return result;
};

const d = sum(0);
console.log(d);
module.exports = { sum };
