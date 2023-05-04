// url: https://www.codewars.com/kata/5848565e273af816fb000449
// Encrypt This!

// given a string
// all words in string replaced this way:
// first char is ASCII code
// second char is last char of word (if there is a second char)
// last char of the word is second char

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


function encryptThis(text){
  // iniitalize variables (position, second char, encryptedStr, encryptWord)
  let position = 0, firstChar = '', secondChar = '', encryptWord = '', encryptStr = ''
  // loop through the string
  for (const char of text){ 
     // if char is ' ',  push this into encryptedStr (firstCharcode + last char + (encryptWord except last char) + second char + space)
     // also set second char and encryptWord back to '' and position to 0 and continue
    if(char === ' '){
      encryptStr += `${firstChar}${encryptWord.slice(-1)}${encryptWord.slice(0, -1)}${secondChar} `
      firstChar = ''
      secondChar = ''
      encryptWord = ''
      position = 0
      continue
    }
     // if position is 0, store the charcode
    if(position === 0){firstChar = char.charCodeAt(0)}
     // if position is 1, store second char as value
    if(position === 1){secondChar = char}
    // index 2 until length-1 of the word are pushed into encryptWord
    if(position > 1){encryptWord += char}
    // increment position if the current character isn't a space
    position++
  }
  // after loop is done grab the last encrypted word and add it but without the trailing space to the encryptedStr
  encryptStr += `${firstChar}${encryptWord.slice(-1)}${encryptWord.slice(0, -1)}${secondChar}`
  // return encryptedStr
  return encryptStr
}