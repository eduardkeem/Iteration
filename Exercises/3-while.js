'use strict';

/* const sum = (...args) => {
  let length = args.length;
  let result = 0;
  while (length) {
    result += args[length - 1];
    length--;
  }
  return result;
};

const e = sum(1, 5, 4);
console.log(e); */

const sum = (...args) => {
  let value = 0;
  while (args.length > 0) {   // Пока длина больше нуля
    value += args.pop(); // Метод извлекает элемент массива с конца
  }
  return value;
};

module.exports = { sum };
