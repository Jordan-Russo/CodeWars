// url: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
// Backspaces in string
// Given a string
// Return a modified string that removes all '#' characters as well as the character before it (like pressing backspace)
// Examples:
  // "abc#d##c"      ==>  "ac"
  // "abc##d######"  ==>  ""
  // "#######"       ==>  ""
  // ""              ==>  ""
// Loop through given string from the start
  // if character is not a '#' add it to a new string
  // if character is a '#' remove the last character of the new string
// return the new string
function cleanString(s) {
  let newString = ''
  for(let char of s){
    newString = (char !== '#' ? newString.concat(char) : newString.slice(0, -1))
  }
  return newString
}