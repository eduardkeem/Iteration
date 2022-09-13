'use strict';

const max = matrix => {
  let value = matrix[0][0];                   // -1
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];                    // [-1, 1], [2, -1], [-1, 0]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];                     // [-1, 1]
      if (value < cell) value = cell;          // если -1 < каждого элемента трех массивов matrix[i], тогда value = этому элементу
    }
  }
  return value;
};

// [[-1, 1], [2, -1], [-1, 0]];

module.exports = { max };
