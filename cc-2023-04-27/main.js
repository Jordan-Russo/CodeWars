url: https://www.codewars.com/kata/5b39e3772ae7545f650000fc

// Removing duplicate words

// given a string of words with each being seperated by a space, remove all duplicates and return.
// With an empty string of no words return ''

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// 'alpha beta gamma delta'


// make function to take a single string with words in it, with a delimiter of space
// take each of the words inside of the string
// filter out the unique ones in order
// return it as a string with a space delimiter
function removeDuplicateWords(s){
  const words = s.split(' ')
  const uniqueWords = new Set(words)
  const wordString = [...uniqueWords].join(' ')
  return wordString
}