// url: https://www.codewars.com/kata/52c31f8e6605bcc646000082
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// [[1,2,3],          4,     //[0,2]],
// [[1234,5678,9012], 14690, //[1,2]]
// [[2,2,3],          4,     //[0,1]]
// [[2,3,1],          4,     //[1,2]]

function twoSum(numbers, target){
  let numberList = {}
  for(let i = 0; i < numbers.length; i++){
    const expectedNum = target - numbers[i]
    if(numberList[expectedNum] !== undefined){return [i, numberList[expectedNum]]}
    numberList[numbers[i]] ??= i
  }
  return `No two elements in the could be found to sum to ${target}`
}
// More performant, stores numbers as keys in an object with their lowest possible index number as the value
// Ability to access information in O(1) instead of O(n) with nested loops.
// Newer ES6+ assignment operators used to demonstrate optimization of code.


// Old brute force solution below
// function twoSum(numbers, target) {
//   for(let i = 0; i < numbers.length - 1; i++){
//     // loop through all elements in array except last
//     let expectedNumber = target - numbers[i]
//     // determine the second number we're looking for
//     let expectedIndex = numbers.slice(i + 1).indexOf(expectedNumber)
//     // get the index of that second number relative to the first,  
//     // with emphasis not to include the first number in the search to prevent repeating of the same element
//     // if it doesn't exist -1 is returned. ~(-1) = 0
//     // expectedIndex + i + 1 gives the same element on the actual numbers array compared to the sliced array
//     if(~expectedIndex){return [i, expectedIndex + i + 1]}
//   }
//   return `No two elements in the could be found to sum to ${target}`
// }