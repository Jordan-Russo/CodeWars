// url: https://www.codewars.com/kata/581e014b55f2c52bb00000f8
// Decipher This!
// Given a string with the first character of each word written as the charCode
// return the string with the charcodes replaced by the characters they represent
  // AND the last letter being swapped with the second one if the word has a length greater than 2.
// examples:
  // decipherThis('72olle 103doo 100ya'); // 'Hello good day'
  // decipherThis('82yade 115te 103o'); // 'Ready set go'
// For Function:
// initialize empty string, and charCode as empty strings
// loop through the string
  // if the char is a digit push the char into the charCode
    // if it's the last character in the string push the character made from the charcode into the str.
  // if the char is not a digit push the Character made from the charcode and current char into new string
// return new string
function decipherThis(str) {
  str = str.split(' ').map(word => {
    let charStart = [...word].findIndex(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')
    word = (charStart !== -1 ? String.fromCharCode(word.slice(0, charStart)) 
            + word[word.length - 1] + word.slice(charStart + 1, -1) + (word.slice(charStart).length > 1 ? word[charStart] : '')
            : String.fromCharCode(word))
    return word
  }).join(' ')
  return str
}; 