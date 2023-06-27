// url: https://www.codewars.com/kata/52a112d9488f506ae7000b95
// Is integer Array?
// Given an array
// Return Boolean for all elements in array being integers.
  // empty arrs return true as well
// examples
  // isIntArray([]) -> true
  // isIntArray([1, 2, 3, 4]) -> true
  // isIntArray([1, 2, 3, NaN]) -> false
// If the argument isn't an array return false
// loop through array
// if any elements not an integer return false
// otherwise return true
function isIntArray(arr) {
  if(!Array.isArray(arr)){return false}
  return arr.every(Number.isInteger)
}