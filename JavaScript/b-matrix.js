'use strict';

const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

const max = (a, b) => (a > b ? a : b);  // Вывод наибольшего числа

const res = matrix
  .map((row) => row.reduce(max))              // Вычисляем максимальное число из подмассива с помощью функции
  .reduce((acc, rowMax) => acc + rowMax);     // Складываем максимальные числа из подмассивов

console.log(res);

for (const i in matrix) {
  const row = matrix[i];
  for (const j in row) {
    const col = row[j];
    console.log(i, j, col);
  }
}

// for (const row of matrix) {
//   for (const item of row) {
//     console.log(item);
//   }
// }
