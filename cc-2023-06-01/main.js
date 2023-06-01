// url: https://www.codewars.com/kata/5ba38ba180824a86850000f7
// Simple remove duplicates
// Given an list of integers as an array
// Keep the last occurence of each element, removing all prior duplicates.
// Examples:
// [3, 4, 4, 3, 6, 3] -> [4,6,3]
// [1,2,3,2,1] -> [3,2,1]
// [1,2,1,5,11,1] -> [2,5,11,1]
// function that intakes an array
  // initialize set
  // loop through the arr in reverse
    // input array into a set
  // convert the set back into an array and reverse it
  // return the newly made array
function solve(arr){
  const uniqueNums = new Set()
  for(let i = arr.length - 1; i >= 0; i--){
    uniqueNums.add(arr[i])
  }
  return [...uniqueNums].reverse()
}