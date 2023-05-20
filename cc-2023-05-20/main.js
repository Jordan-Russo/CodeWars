// url: https://www.codewars.com/kata/56576f82ab83ee8268000059
// Running out of space

// Given an array of strings
// return a new array that cumulatively concatenates the previous elements before the current ones
// Examples: 
  // ['i', 'have','no','space'] -> ['i','ihave','ihaveno','ihavenospace']
// Initalize array to hold onto each of the concatenated strings
// iterately concatenate all the elements in the array from left to right.
  // push these values to the initialized array
// return the initialized array that now holds onto many concatenated strings

function spacey(array){
  let stuttering = []
  array.reduce((progress, word) => {
    progress += word
    stuttering.push(progress)
    return progress
  }, '')
  return stuttering
}