// url: https://www.codewars.com/kata/596f72bbe7cd7296d1000029
// Array Deep Count

// Given an array that may be empty, or have other arrays inside of it
// Return the number of all elements within an array, including elements nested.
// Examples:
  // [] ; // 0
    // Empty arrays count for 0
  // [1,2,3] ; // 3
  // ['x', 'y', ['z']] ; // 4
    // We count the elements in the array 3
    // Then add the elements in the nested array 1

// make function:
  // make a count variable for length, initialized at 0
  // Helper function to loop through array
    // increment count
    // if element is array call the helper function again.
  // return count

const deepCount = arr => {
  let elementCount = 0
  const count = arr => {
    arr.forEach(element => {
      elementCount++
      if(Array.isArray(element)){count(element)}
    })
  }
  count(arr)
  return elementCount
}