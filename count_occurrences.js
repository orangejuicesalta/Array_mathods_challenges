'use srtict';
const numbers = [1, 2, 3, 1, 4, 3, 1, 4, 4, 4];

const count = countOccurrences(numbers, 1);

function countOccurrences(array, searchElement) {
  let count = 0;
  for (let element of array) {
    if (element === searchElement) count++;
  }
  return count;
}

console.log(count);
