// url: https://www.codewars.com/kata/577b9960df78c19bca00007e
// Find the nth digit of a number

// Given a number as an input, num, and another number as a count of position from the right to left, nth
// if num is negative, use the absolute value of it instead
// if nth is not positive, return -1

// Return the nth digit of the num (counting from right to left, starting from 1 for the rightmost digit).
  // If nth is greater than the digits in num, return 0

// Examples:
  // 5673, 4 --> 5
  // 129, 2 --> 2
  // -2825, 3 --> 8
  // -456, 4 --> 0
  // 0, 20 --> 0
  // 65, 0 --> -1
  // 24, -8 --> -1

// function that intakes a number, and a count
  // check for non-positive nth to return -1
  // isolate and order the digits
  // return the nth digit, otherwise return 0

const findDigit = (num, nth) => {
  if(nth < 1){return -1}
  let digits = Math.abs(num).toString().split('').reverse()
  return Number(digits[nth-1]) || 0
}