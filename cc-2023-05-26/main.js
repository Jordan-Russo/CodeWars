// url: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
// sort by last char

// Given a string, return an array of the words, sorted by the final character of each

// If two share the same last character, then use their original position in the given string.

// Examples:
  // last('man i need a taxi up to ubud') -> 
  //   ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  // last('what time are we climbing up the volcano') -> 
  //   ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'] 
  // last('take me to semynak') -> 
  //   ['take', 'me', 'semynak', 'to']    

// function with str param
  // create an array by using a space delimiter within the str
  // grab the last character in each str element within the array and sort them using the last char within each element.
  // return the modified array

function last(x){
  const chars = x.split(' ')
  return chars.sort((a,b) => a.slice(-1).charCodeAt(0) - b.slice(-1).charCodeAt(0))
}