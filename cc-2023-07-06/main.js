// url: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
// +1 Array
// Given an array of integers (from 0-9)
// Return an array that has 1 added to the value represented by the array (with each element being a single digit)
// Examples:
  // [4, 3, 2, 5] would return [4, 3, 2, 6]
  // [1, 2, 3, 9] would return [1, 2, 4, 0]
  // [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
  // [0, 1, 3, 7] would return [0, 1, 3, 8]
// After getting the array, return null if it's an empty array
// Then check that all elements are non-negative, single digit integers (otherwise also return null)
// find the index of the last element in the array that isn't a 9.
// if there is no such element push 1 into the array
// if there is one, increment it
// for both options, turn all elements after it to 0
// return new array
function upArray([...arr]){
  if(arr.length === 0){return null}
  if(!arr.every(digit => Number.isInteger(digit) && digit >= 0 && digit <= 9)){return null}
  let incrementIndex = (function(arr){
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] !== 9){return i}
    }
    return i
  })(arr)
  return incrementIndex === -1 ? [1, ...arr.fill(0)] : [...arr.slice(0, incrementIndex), arr[incrementIndex] + 1, ...arr.slice(incrementIndex + 1).map(n => 0)]
}