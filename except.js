'use strict';

function except(array, excluded) {
  for (let element of excluded) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) array.splice(i, 1);
    }
  }
  return array;
}

// function except(array, excluded) {
//   let output = [];
//   for (let element of array) {
//     if (!excluded.includes(element)) output.push(element);
//   }
//   return output;
// }

const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 1];
const output = except(numbers, [1, 2]);

console.log(output);
