// url: https://www.codewars.com/kata/55e9529cbdc3b29d8c000016
// DESCRIPTION:
// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
function charToAscii(string){
  let hash = {}
  for(const char of string){
    const isAlphabetical = char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
    if(isAlphabetical && !hash[char]){
      hash[char] = char.charCodeAt(0)
    }
  }
  for(const key in hash){return hash}
  return null
}