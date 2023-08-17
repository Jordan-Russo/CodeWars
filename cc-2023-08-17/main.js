// given a string of text with words
// return the word that has the longest length
// there will only be one word that is the longest
// there will always be at least one word (no empty str)
console.log(longestWord('an apple  tree'), 'apple')
console.log(longestWord('all-star hero'), 'all-star')
console.log(longestWord('geometric eye sore shaped lines'), 'geometric')

function longestWord(text){
  const words = text.split(' ')
  // split the text into words
  const wordLengths = words.map(element => element.length)
  // loop through the words to find the lengths of each
  const longestLength = Math.max(...wordLengths)
  const longestWord = words.find(word => word.length === longestLength)
  return longestWord
  // return the word that has the longest length
}

function longestWord(text){
  const words = text.split(' ')
  let maxLength = 0
  let longestWord = ''
  for(const word of words){
    if(word.length > maxLength){
      longestWord = word
      maxLength = word.length
    }
  }
  return longestWord
}

function longestWord(text){
  let longestWord = ''
  let currentWord = ''
  const setLongest = _ => {if(currentWord.length > longestWord.length){longestWord = currentWord}}
  for(let i = 0; i < text.length; i++){
    if(text[i] === ' '){
      setLongest()
      currentWord = ''
    }else{
      currentWord += text[i]
    }
  }
  setLongest()
  return longestWord
}

function longestWord(text){
  let words = text.split(' ')
  return words.sort((a,b) => b.length - a.length)[0]
}