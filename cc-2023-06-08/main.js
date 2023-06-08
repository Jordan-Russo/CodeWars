// url: https://www.codewars.com/kata/5a3e1319b6486ac96f000049
// simple consecutive pairs
// Given an array of integers
// Return the count of every pair of integers that is consecutive (increase by one or decrease)
  // We count the pairs starting from the beginning of the array, if there is an odd length, ignore the last element.
// Examples:
  // [1,2,5,8,-4,-3,7,6,5]) -> 3
  // [21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) -> 2
  // [73, 72, 8, 9, 73, 72]) -> 3
  // [81, 44, 80, 26, 12, 27, -34, 37, -35]) -> 0
  // [-55, -56, -7, -6, 56, 55, 63, 62]) -> 4
// take an array
  // initialize count
  // loop through the array (stop when there are no more pairs)
    // if absolute difference between the two is 1, increment count
  // return count
function pairs(ar){
  let count = 0
  for(let i = 0; i < ar.length - 1; i += 2){
    const difference = Math.abs(ar[i] - ar[i + 1])
    if(difference === 1){count++}
  }
   return count
};