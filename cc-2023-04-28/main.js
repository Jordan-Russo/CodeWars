url: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// Maximum Subarray Sum

// Given an array of integers
// Edge case none
// Edge case all negative

// Return the maximum sum of consecutive elements in the array or 0.

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// 6
// maxSequence([])
// 0
// maxSequence([-1, -14, 3, 2])
// 5


//Subarray function to take in an array of integers
  // List of variables:
    // maximum chain = 0
    // current chain = 0
  // Make a for loop that goes through the entire array
    // current chain = max between (0, and currSum + element)
    // max chain = max between (itself and current chain)
  // return max chain value

function maxSequence(arr){
  let maxSum = 0
  let currSum = 0
  for(const number of arr){
    currSum = Math.max(0, number + currSum)
    maxSum = Math.max(currSum, maxSum)
  }
  return maxSum;
}