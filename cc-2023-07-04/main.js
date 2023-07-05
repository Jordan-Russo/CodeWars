// url: https://www.codewars.com/kata/51f082ba7297b8f07f000001
// find within array
// given an array and callback
// return first index that makes the callback true.
// example:
  // var trueIfEven = function(value, index) { return (value % 2 === 0) };
  // findInArray([1,3,5,6,7], trueIfEven) // should === 3
// check each value in array until done checking or found a first true conditional for one of the elements
  // if you found an element that evaluates to true in the callback return it's index (only the first match)
  // otherwise return -1
var findInArray = function(array, iterator) {
  return array.findIndex(iterator)
};