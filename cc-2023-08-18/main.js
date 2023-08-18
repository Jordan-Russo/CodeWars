// Given a sentence, a word to be replaced, and a replacement.
// performance a replacement within the sentence to return the modified sentence.
// word to be replaced WILL NOT be a substring of another word in the sentence
// case sensitive BUT casing of the first letter in replaced word must match casing of the searched word.
// first letter of replaced word should MATCH the first letter of the search word.

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch")
console.log(searchReplace("She JUMPED from her bed", "JUMPED", "rOSE"), "She ROSE from her bed")
console.log(searchReplace("SOAR through the clouds", "SOAR", "run"), "Run through the clouds")

function searchReplace(text, word, newWord){
  if(word[0] === word[0].toUpperCase()){
    newWord = newWord[0].toUpperCase() + newWord.slice(1)
  }
  return text.replaceAll(word, newWord)
}