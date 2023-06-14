// Given a polish string
// Return it in english characters
// Examples:
  // "Jędrzej Błądziński" -> "Jedrzej Bladzinski"
  // "Lech Wałęsa" -> "Lech Walesa"
  // "Maria Skłodowska-Curie" -> "Maria Sklodowska-Curie"
// Make a hash containing all the translation of polish to english characters
// go through the string given
  // if the string is a key in the hash replace the character as the value of it's polish key
// return the new string, free of polish characterse.
const fromPolish = {
  'ą': "a",
  'ć': "c",
  'ę': "e",
  'ł': "l",
  'ń': "n",
  'ó': "o",
  'ś': "s",
  'ź': "z",
  'ż': "z"
  }
function correctPolishLetters (string) {
  let englishStr = ''
  for(let char of string){
    englishStr += fromPolish[char] || char
  }
  return englishStr
}