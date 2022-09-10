'use strict';

const sum = (...args) => {
  let l = args.length;
  let r = 0;
  while (l) {
    r += args[l - 1];
    l--;
  }
  return r;
};

const e = sum(1, 5, 4);
console.log(e);

module.exports = { sum };
