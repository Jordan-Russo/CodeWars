// Given a string, always a string, may be empty str
// Return whether it's going to be a palindrome
//   palindrome: characters are the same going left-to-right as right-to-left
// case Sensitive, character sensitive
// must be a direct match
console.log(palindromeChecker('racecar'), true)
console.log(palindromeChecker('madam'), true)
console.log(palindromeChecker('i hi'), false)

function palindromeChecker(str){
  return str === [...str].reverse().join('')
}

// time complexity of O(n) but lets try to just loop through half of the characters in the string

function palindromeChecker(str){
  const half = str.length / 2
  // loop through half the string
  for(let i = 0; i < half; i++){
    // if the value of an element i indices away from the start matches with an element i indices away from the end then that character is palindromed.
    if(str[i] !== str[str.length - 1 - i]){
      return false
    }
    // if one pair of values fails this check return false
  }
  return true
}