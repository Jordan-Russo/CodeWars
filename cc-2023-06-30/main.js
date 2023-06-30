// url: https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9
// Sort Arrays (ignoring case)
// Given an array of Strings
// Return the strings in alphabetical order
  // case insensitive (rather than only lexicographically (0-9, A-Z, a-z) /default behavior)
// Examples:
  // ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
  // ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
// Given array
  // make and use sort method that is case-insensitive
  // return sorted array
sortme = function( names ){
  return [...names].sort((a,b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    if(a > b){return 1}
    if(b > a){return -1}
    return 0
  })
  // other options: 
  //   return [...names].sort((a,b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
  //   return [...names].sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
}
  