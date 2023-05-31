// url: https://www.codewars.com/kata/57faece99610ced690000165
//  Remove all exclamation marks from the end of sentence
// Given a string
// Return it without any exlcamation points at the end
// Examples:
  // '1!' -> '1'
  //  '!5!' -> '!5'
  // '!!!' -> ''
// Function with str param
  // grab lastChar in that str
  // create a loop with the following condition
    // if the last char is '!' decrease the index of the str (travel through the str, right to left)
  // return the str from the start to the lastChar that isn't '!'
function remove (str) {
  let lastChar = str.length - 1
  while(str[lastChar] === '!'){
    lastChar--
  }
  return str.slice(0, lastChar + 1)
}