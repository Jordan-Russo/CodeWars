// Given string of text, may be an empty string but will not be called w/o a string argument.
// returns a reversed string where the characters appear from last character to first character, case-sensitive.
console.log(reverseStr('cat'), 'tac')
console.log(reverseStr('Balloon'), 'noollaB')
console.log(reverseStr('WAX feathers'), 'srehtaef XAW')

function reverseStr(str){
  let reverse = ''
  for(let i = str.length - 1; i >= 0; i--){
  // loop through the string in reverse
    reverse += str[i]
    // concatenate characters into a string
  }
  return reverse
  // return the concatenated string
}

function reversedStr(str){
  let reverse = ''
  for(const char of str){
  // loop through string like before but this time going forward
    reverse = char + reverse
  // append the current character before the previous characters
  }
  return reverse
  // return reversedStr
}

// method is slowest due to having multiple O(n) methods
function reverseStr(str){
  return str.split('')
  // seperate characters
  .reverse()
  // reverse the order of the characters
  .join('')
  // join the characters back together
}

function reverseStr(str){
  return str.length > 1 ? reverseStr(str.slice(1)) + str[0] : str
  // keep take substring after first character until there is one character
    // when there is only one character in string return last character
  // return first character in string concatenated after the previous one
}

function reverseStr(str){
  return [...str].reduceRight((reverse, char) => reverse + char)
  // seperate characters in a string then loop in reverse and reduce characters to a reversed string
}