// url: https://www.codewars.com/kata/57a62154cf1fa5b25200031e
// Alternate case
// Given a string
// return a string that has the exact opposite casing for each alphabetical character.
// Examples:
  // 'Dog' --> 'dOG' 
  // 'DUCk' --> 'ducK'
  // 'BOOM' --> 'boom'
// function that intakes a string
  // initialize a new empty string
  // loop through the parameter string
    // determine what casing the character is
    // add the same letter but in the opposite casing to the new string
  // return the new string
function alternateCase(s) {
  let alternateStr = ''
  for(let char of s){
    const isUpperCase = char === char.toUpperCase()
    alternateStr += isUpperCase ? char.toLowerCase() : char.toUpperCase()
  }
  return alternateStr
}