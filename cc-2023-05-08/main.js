// url: https://www.codewars.com/kata/51675d17e0c1bed195000001
// Largest 5 digit number in a series
// Given a string of digits
// Return the largest 5 digit number that comes from a substring
// Edge Case: What do we do when the string has 5 digits or less?
  // return 0?
// solution('1234567898765') === 98765
// solution('731674765') === 74765

// solution function:
  // Declare max (initalized at 0)
  // for loop where we start at 5, go to the length of string and increment by 1
    // str slice of i-5 to i 
    // if larger than max, replace max with it
  // return max

function solution(digits){
  let maxNum = 0
  for(let i = 0; i + 4 < digits.length; i++){
    maxNum = Math.max(maxNum, +digits.slice(i, i + 5))
  }
  return maxNum
}