"use strict";

function arrayFromRange(min, max) {
  let arr = [];
  while (min <= max) {
    arr.push(min);
    min++;
  }
  return arr;
}
const numbers = arrayFromRange(-10, 4);

console.log(numbers);
