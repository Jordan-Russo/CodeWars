// url: https://www.codewars.com/kata/586d6cefbcc21eed7a001155
// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
function longestRepetition(s) {
  let longestRepetition = ['', 0];
  let memory = '';
  for (let i = 0; i <= s.length; i++){
  // iterate through all of the string
    const currChar = memory[0];
    if(memory && currChar !== s[i]){
      if (memory.length > longestRepetition[1]){
  // if there are two or more characters with the same length return the first in order of appearance.
        longestRepetition = [memory[0], memory.length];
  // find longest consecutive repetetition
  // is input and its length into the array and wipe a memory value;
      } 
      memory = s[i];
  // make sure to add the new value to memory
    }else{
      memory += s[i];
    }
  }
  return longestRepetition;
}