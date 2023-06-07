// url: https://www.codewars.com/kata/58d76854024c72c3e20000de
// Reverse every other word in the string

// Given a string
// Return the string with every 2nd word in reverse
// Examples:
  // "Reverse this string, please!"
  // -> "Reverse siht string, !esaelp"
  // "I really don't like reversing strings!" 
  // -> "I yllaer don't ekil reversing !sgnirts"
// function that takes a string
  // modify string to be trimmed
  // initialize reverseAltStr to empty str
  // initialize isReverse to false
  // initialize wordStr to empty str
  // make a function that reverses a single word in a string
  // loop through the string
    // until we reach a space, add characters to wordStr
    // once we reach a space check isReverse and make sure we have a wordStr
      // if reverse is false, add wordStr and a space to reverseAltStr
      // if reverse if true, add wordStr reversed and a space to reverseAlt Star
      // for both cases, flip the state of isReverse and make sure to clear the wordStr after we concat it to reverseAltStr
function reverse(str){
  str = str.trim()
  let isReverse = false
  let reverseAltStr = ''
  let wordStr = ''
  for(let i = 0; i <= str.length; i++){
    if(str[i] !== ' ' && str[i]){
      wordStr += str[i]
    }
    // building a word
    if(str[i] === ' ' && wordStr){
      reverseAltStr += (isReverse ? strReverse (wordStr) : wordStr) + ' '
      isReverse = !isReverse
      wordStr = ''
    }
    // when we encounter a space and we looped through a word, we will add the word after reversing it with a space at the end if needed and then make sure the next word is in the opposite order.
    // we want to ignore double or more spaces, which is why we check for characters within the wordStr
  }
  reverseAltStr += (isReverse ? strReverse(wordStr) : wordStr)
  
  return reverseAltStr
}
// helper function
function strReverse(str){
  let reverse = ''
  for(let i = str.length - 1; i >= 0; i--){
    reverse += str[i]
  }
  return reverse
}