// url: https://www.codewars.com/kata/5143cc9694a24abcd2000001
// Does array x contain all within array y?
// Given a second array
// Define a new property that returns a boolean describing whether the current array contains all the values in an array argument.
// Examples:
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// items.containsAll([1, 2, 3]);  =>  true
// items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array
// Loop through the values in the array argument
  // if they're all included in the first array return true
  // if any aren't return false
  Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
    return a.every(e => this.includes(e))
  } } );