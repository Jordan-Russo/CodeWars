url: https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

// Determine length of missing array

// Given an array of arrays, anything can be inside those arrays but it will only be an array within another array. 
// Edge case: We can also be given null or an empty array

// Return the missing length of array
// Will Always be inbetween the smallest and largest array length in the array
// Edge Case: For null and empty array return 0

// getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]) === 3
// getLengthOfMissingArray([[1, 2], [4, 5, 1], [1], [5, 6, 7, 8, 9]]) === 4
// getLengthOfMissingArray([[1,2], [2,4,3], [2,2,2,2], [1,2,3,4,5,6]]) === 5

// Edge checks array is null or array length 0, return 0
// Iterate through the array
// Create 3 variables
// minimum length
// maximum length
// sum of lengths
// One helper function:
// function to get cumulative sum between 1 and length, cumulativeSum(length)
// expectedSum = cumulativeSum(maxLength) - cumulativeSum(minLength - 1)
// let missingLength = expectedSum - sum
// return missingLength



function getLengthOfMissingArray(arrayOfArrays){
  if(!arrayOfArrays || arrayOfArrays.length === 0){return 0}
  let minLength = Infinity, maxLength = 0, sumLength = 0
  function cumulativeSum(length){
    return length * ((1 + length)/2)
  }
  for(let array of arrayOfArrays){
    if(!array || array.length === 0){return 0}
    const length = array.length
    if(length < minLength){minLength = length}
    if(length > maxLength){maxLength = length}
    sumLength += length
  }
  const expectedSum = cumulativeSum(maxLength) - cumulativeSum(minLength - 1)
  const missingLength = expectedSum - sumLength
  return missingLength
}
// Better option: 
// map the lengths with optional chain
// put it into a set
// set.has(0) or set.has(undefined) in O(1) to return 0
// then determine min in array and make a loop asking whether the next ascending number exists until it's false and return that number

function getLengthOfMissingArray(arrayOfArrays){
  if(!arrayOfArrays || arrayOfArrays.length === 0){return 0}
  const arrLengths = arrayOfArrays.map(arr => arr?.length)
  const lengthSet = new Set(arrLengths)
  const maxLength = Math.max(...lengthSet)
  if(lengthSet.has(0) || lengthSet.has(undefined)){return 0}
  for(let i = maxLength - 1; i > 0; i--){
    if(!lengthSet.has(i)){return i}
  }
}