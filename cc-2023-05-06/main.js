// url: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
// First non-repeating character

// given a string input
// return the first character that is not repeated anywhere in the string
// differently cased characters are still the same character but you must preserve the first casing in the string.
// 'stress' -> 't'
// 'sTreSS' -> 'T'
// 'sTtrreSSe' -> ''

function firstNonRepeatingLetter(s) {
  // make an object
  const letters = new Map()
  // make a loop
  for (let char of s){
    const upperCase = char.toUpperCase()
    const lowerCase = char.toLowerCase()
    if(letters.has(upperCase)){letters.set(upperCase, true); continue}
    if(letters.has(lowerCase)){letters.set(lowerCase, true); continue}
    letters.set(char, false)
    // if object uppercase or object lowercase char exists and is equal to false, set the one that exists to true
    // if object doesn't have a key of the char, in any case make it.
  }
  console.log(letters)
  for(let char of letters){
  // loop through the object to find the first key with a value of false and return it or return ''.
    if(char[1] === false){return char[0]}
    // key-value pair returned
  }
  return ''
}

// both making the map hash is O(n) and iterating through it is O(n) but they aren't nested so the algorithmn is O(n)

// We could've instead made this solution O(n^2) by looping through the string, and checking whether or not the lastIndexOf and firsIndexOf of it, is the same (ignoring casing) and return that