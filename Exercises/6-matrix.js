'use strict';

const max = (matrix) => {

  const newArray = JSON.parse('[' + matrix.join() + ']');

  console.log(newArray);

  const lastArray = newArray.sort((a, b) => a - b);

  console.log(lastArray);

  let max;
  let min = lastArray[0];

  for (let i = 0; i < lastArray.length; i++) {
    if (lastArray[0] < min) {
      min = lastArray[i];
    } else {
      max = lastArray[i];
    }
  }
  return max;
};

const array = [[-1, 1], [2, -1], [-1, 0]];
const m = max(array);
console.log(m);

module.exports = { max };
