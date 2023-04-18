url: https://www.codewars.com/kata/52b757663a95b11b3d00062d

// Write a function toWeirdCase that accepts a string, returns the same string with all even indexed characters in each word upper cased and odd lowered cased,
// given one string argument that contains alphabetical, lowercase and uppercase as well as spaces.
// return a modified string that has alternate casing (starting with uppercase at the beginning of each WORD...)
// toWeirdCase('String') => 'StRiNg'
// toWeirdCase('Weird string case') => 'WeIrD StRiNg CaSe'
// toWeirdCase('a to two') => 'A To TwO'


function toWeirdCase(str){
  let weirdStr = ''
  let charCount = 0
  for(let char of str){
    weirdStr += charCount++ % 2 ? char.toLowerCase() : char.toUpperCase()
    if(char === ' '){charCount = 0}
  }
  return weirdStr
}

// I realized midway into writing this solution that it could be solved in O(n) instead which is what's above.
function toWeirdCase(str){
  //take string parameter
  //seperate each word, by its space
  //change the word so that its casing alternates between upper and lowercase (starting with uppercase)
  //join these cased words together with spaces again
  // return that modified string
  const words = str.split(' ')
  return words.map((word) => 
    word.split('').map((char, idx) => 
      idx % 2 ? char.toLowerCase() : char.toUpperCase())
      .join('')).join(' ')
}