// url: https://www.codewars.com/kata/51689e27fe9a00b126000004
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""
function formatWords(words){
  const filteredWords = words ? words.filter(word => word) : '';
// filter words for falsy values
  if (filteredWords.length === 0){
    return '';
// check array length if zero return empty string.
  }else if(filteredWords.length === 1){
    return filteredWords[0];
// if length is one return the string
  }else{
    const notLast = filteredWords.slice(0, -1).join(', ');
    const last = filteredWords[filteredWords.length - 1];
    return `${notLast} and ${last}`;
// if length is greater  than one return the words but put a comma and space-between 
// each of them excep the last word which will instead have and
  } 
}