'use strict';

const numbers = [234, 32, 3, 23];
const max = getMax(numbers);

function getMax(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

console.log(max);
