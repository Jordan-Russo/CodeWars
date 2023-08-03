// url: https://www.codewars.com/kata/5b7176768adeae9bc9000056
// Element equals its index
// Given SORTED integer array
// return first index in Sorted array where the index matches the element 
  // if no match return -1
  // (must be O(log n) time complexity)
// Examples:
  // indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]) -> 1
  // indexEqualsValue([0]) -> 0
  // indexEqualsValue([9,10,11,12,13,14]) -> -1
  // indexEqualsValue([]) -> -1
// function with sorted array argument
  // initialize start and end indexes of the array
  // Keep looping as long as the start of the array isn't after the end
    // initialize a midpoint as index halfway between the start and end index, rounded down.
    // find the difference between the element at the midpoint index and the midpoint
      // if it's negative 
        // move the start to the element after the midpoint
      // if it's 0
        // if the index is 0 or previous element is less than its own index
          // return midpoint index
      // otherwise any match cannot occur after the midpoint
        // so set the end before it
  // no matches were found
    // return -1
function indexEqualsValue(a) {
  let start = 0, end = a.length - 1;
  while (start <= end) {
    let mid = Math.trunc((start + end) / 2);
    if (a[mid] - mid < 0) {
      // if the midpoint is less than their index
        // all previous points must also be so (due to sorted nature of array)
      start = mid + 1;
      // so increment the start to the next point to check
    } else if (a[mid] - mid == 0 && (mid == 0 || a[mid - 1] - (mid - 1) < 0)) {
    // if midpoint matches its index and all previous points don't or it's the first element
      // return as a match
      return mid;
    } else {
    // if midpoint is greater than its index or previous index matched itself
      // first index value cannot be after the previous value
      end = mid - 1;
    }
  }
  return -1;
}