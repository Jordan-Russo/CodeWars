// url: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
// sum of differences in array

// Given an array of integers
// return sum the differences between consecutive pairs in the array in descending order
  // if the array is empty or has only one element return 0
// Examples:
  // [2, 1, 10]  -->  9
  // [7] --> 0
  // [] --> 0
  // [6, 10] --> 4
  // [10, 6] --> 4

// Make a function that takes an array of integers as a parameter:
  // initialize sum to be equal to 0 
  // if length of array < 2 return sumOfDifferences
  // sort array in descending order (make a copy, don't mutate paramter arr)
  // iterate through the array (second element to last element)
    // calculate the difference between arr[i-1] - arr[i]
    // add that difference to sumOfDifferences
  // return sumOfDifferences

function sumOfDifferences(arr){
  let sum = 0
  if(arr.length < 2){return sum}
  let descendingValues = [...arr].sort((a,b) => b - a)
  for(let i = 1; i < descendingValues.length; i++){
    let difference = descendingValues[i-1] - descendingValues[i]
    sum += difference
  }
  return sum
}

// Lesson learned, the difference between ordered numbers in an array is really just the difference between the smallest and largest number since we're both subtracting and adding all of the numbers inbetween those values

const sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0