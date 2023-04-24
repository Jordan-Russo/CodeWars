// url: https://www.codewars.com/kata/54b724efac3d5402db00065e
// morsecode: https://en.wikipedia.org/wiki/Morse_code

// given a string of morse code
// 1 space seperates characters
// 3 spaces seperate words
// all characters are capitalized
// morse should be trimmed before read

// return the translated morse code into english.

// decodeMorse('···· · −·−−   ·−−− ··− −·· ·') 
// HEY JUDE
// decodeMorse('      ·−   −·−· ·− − ')

// Optimized O(n)
// start with trim
// have a stored msg, word, and char
// loop through the morse
  // if our morse is a space
    // evaluate the morseChar, then add it to morse word, empty morseChar
  // if the previous three characters in the morse were spaces 
    // add (morseWord + ' ') to message and empty morseWord
  // if our morse is not a space 
    // add the char to the morseChar
// evaluate the last morseChar, add it to morseWord, and add that to the message
// trim the extra off the message
// return the msg
function decodeMorse(morse){
  morse = morse.trim()
  let message = ''
  let morseWord = ''
  let morseChar = ''
  for(let char in morse){
    if(morse[char] === ' '){
      morseWord += MORSE_CODE[morseChar] || ''
      morseChar = ''
    }
    if(morse.slice(char - 3, char) === '   '){
      message += `${morseWord} `
      morseWord = ''
    }
    if(morse[char] !== ' '){
      morseChar += morse[char]
    }
  }
  // last character
  morseWord += MORSE_CODE[morseChar]
  message += morseWord

  return message.trimStart()
}

// O(n**2) unoptimized old code
// trim the morse code
// make an array from splitting the code by '   '
// nest another array by splitting each character by ' '
// convert each element in the array of arrays to letters
// join chracters together with ''
// join words together with ' '
// return the resulting string


// Given the object MORSE_CODE that has keys of all the morse code character strings

function decodeMorse(morse){
  morse = morse.trim()
  // '···· · −·−−   ·−−− ··− −·· ·'
  const words = morse.split('   ')
  // ['···· · −·−−', '·−−− ··− −·· ·']
  .map(word => word.split(' ')
  // [['····', '·', '−·−−'], ['·−−−', '··−', '−··', '·']]
  .map(char => MORSE_CODE[char])
  // ['H', 'E', 'Y']
  .join(''))
  // ['HEY', 'JUDE']
  .join(' ')
  // 'HEY JUDE'
  return words
}