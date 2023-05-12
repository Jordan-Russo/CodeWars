// url: https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce
// No oddities Here

// Given an array of values
// return the values that are not odd (even) in the order they were given.

// Examples:
  // [0,1] => [0]
  // [1,2,3,4,56,7,8] => [2,4,56,8]
  // [-100, 101,333,-401] => [-100]

  function noOdds(numArr){
    return numArr.filter(num => !(num & 1))
    // filter arr for evens, then return them
    // range of numbers is small enough for bitwise & to work (32-bit num)
  }