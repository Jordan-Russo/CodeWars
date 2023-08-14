// Given a string that represents a sentence, containing two or more words...
// Write a function that will return the sentence with Uppercasing on the first letter in a word and lowercasing on the other characters.
console.log(capSentence('HELLO TOM!'), 'Hello Tom!')
console.log(capSentence('farewell friend...'), 'Farewell Friend...')
console.log(capSentence('what a wonderful world'), 'What A Wonderful World')

function capSentence(str){
  const words = str.split(' ')
  // seperating the string into each word
  const formattedWords = words.map(
    word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
  )
  // reassign each word with the first Letter capitalized and the rest in lowercase
  const formattedSentence = formattedWords.join(' ')
  // join each word together
  return formattedSentence
  // return the new sentence
}
// has time complexity of O(n^2)
// lets try to do a linear time complexity solution
// The O(n) solution she tells you not to worry about.
function capSetence(str){
  let formattedSentence = str[0].toUpperCase()
  // initialize formattedSetence /w uppercase first character
  for(let i = 1; i < str.length; i++){
  // loop through each character after first character
    formattedSentence += str[i-1] === ' '
      ? str[i].toUpperCase() : str[i].toLowerCase()
    // if character came after a space concatenate character as uppercase
    // otherwise concatenate the character as lowercase
  }
  return formattedSentence
  // return the formattedSetence string
}