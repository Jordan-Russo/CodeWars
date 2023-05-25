// url: https://www.codewars.com/kata/570a6a46455d08ff8d001002
// No zeros for heros

// Given an integer

// Return the number without and trailing 0s, or return 0.

// Examples:
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// 0 -> 0

// function that takes integer
  // loop checking that the last digit is zero but the number isn't zero
    // divide number by 10
  // return the number

function noBoringZeros(n) {
  while(n % 10 === 0 && n !== 0){
    n /= 10
  }
  return n
}