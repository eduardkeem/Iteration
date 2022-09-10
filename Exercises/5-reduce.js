'use strict';

const sum = (...args) => args.reduce((total, arg) => total + arg, 0);

const a = sum(1, 4, 2);
console.log(a);

module.exports = { sum };
