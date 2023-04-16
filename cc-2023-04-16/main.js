// url: https://www.codewars.com/kata/54d81488b981293527000c8f

// Given a list of integers and a sum value, return the two first possible values that add up to form the sum (from left to right)
// An array of only contain numbers, only integer, -/+, A sum that is also an +/- integer
// return an array that has the first two elements of the array (in order of appearance, left->right) that add to the sum
// if no match exists return undefined
// sumPairs([1,2,3,4,5], 7) === [3,4]
// sumPairs([20, -13, 40], -7) === undefined
// sumPairs([0, 20, 0], 0) === [0, 0]

function sumPairs(ints, s) {
  //loop through array
    // define a difference = s - arr[i]
    // if difference is in a set or any other data structure, return those two values [difference, arr[i]]
    // if set has arr[i] is false, set add arr[i]
  // if no return comes from that array, undefined will be returned
  let numSet = new Set()
  for(let i = 0; i < ints.length; i++){
    const difference = s - ints[i]
    if(numSet.has(difference)){return [difference, ints[i]]}
    numSet.add(ints[i])
  }
}