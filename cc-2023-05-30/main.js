// url: https://www.codewars.com/kata/5a4e3782880385ba68000018
// Balanced Number (Special Numbers Series #1 )

// Given a positive integer
// Return "Balanced" or "Not Balanced" depending on whether the numbers to the left and right of the middle digits sum to the same number
  // middle digits being the middle one in an odd number of digits, but the two center digits with an even number

// Example:
  // 7 -> "Balanced", 0 on the left and 0 on the right
  // 12233 -> "Not Balanced", sum of 3 on the left sum of 6 on the right.
  // 135413 -> "Balanced", sum of 4 on the left, sum of 4 on the right and 2 digits in the middle.

// Making a function that takes a number as a parameter
  // grab the beginning and ending half of the string excluding the middle portion
  // sum each of them
  // compare them and return "Balanced" or "Not Balanced" if they're equal.

function balancedNum(num){
  num = String(num)
  const half = Math.floor((num.length - 1) / 2)
  const left = sum(num.slice(0, half))
  const right = sum(num.slice(-half || num.length))
    // will not grab the entire array if there are only 2 digits
  return left === right ? "Balanced" : "Not Balanced"
  function sum(str){
    return [...str].reduce((sum, digit) => sum + Number(digit), 0)
  }
}