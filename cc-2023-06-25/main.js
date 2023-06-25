// url: https://www.codewars.com/kata/54129112fb7c188740000162
// Prefill an Array
// Given a desired array length and unknown value
  // return it assuming the value has a finite value, isn't a boolean, is an integer, and is less than 0.
  // if it is invalid state that the unknown value given to you 'is invalid'
// examples:
  // prefill(3,1) -> [1,1,1]);
  // prefill(2,'abc') -> ['abc','abc']);
  // prefill('1',1) -> [1]);
  // prefill(3, prefill(2,'2d')) ->  [['2d','2d'],['2d','2d'],['2d','2d']])
  // prefill(-1) -> TypeError: '-1 is invalid'
  // prefill(true) -> TypeError: 'true is invalid'
// Make a function that has two parameters n and v
  // make a check for a valid n
  // if an error is detected, throw an error with a string stating the current value of n, concatenated to ' is invalid'
  // otherwise make an array of n length with each element in that array v.
function prefill(n, v) {
  const hasError = typeof n === 'boolean' || !Number.isInteger(+n) || n < 0 || !Number.isFinite(+n)
  // Boolean, float, negative number, NaN, and +/-Inf
  if(hasError){throw new TypeError(`${n} is invalid`)}
  return Array.from({length: n}).fill(v)
}