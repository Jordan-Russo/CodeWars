// url: https://www.codewars.com/kata/590e03aef55cab099a0002e8
// Incrementer
// Given an input of an array of digits
// Return an incremented array of digits
// Examples:
  // [] -> []
  // [1, 2, 3] -> [2, 4, 6]
  // [4, 6, 7, 1, 3] -> [5, 8, 0, 5, 8]
  // [3, 6, 9, 8, 9] -> [4, 8, 2, 2, 4]
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8] -> [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
// Increment the first element by 1, second by 2,... and so on
// Return the last digit for each element in the array after incrementation
const incrementer = arrayOfDigits => arrayOfDigits.map((x,i) => (x + i + 1) % 10)