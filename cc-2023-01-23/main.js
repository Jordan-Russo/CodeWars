// url: https://www.codewars.com/kata/59cfc000aeb2844d16000075
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.
function capitalize(s){
  function cap(bool){
    let capitalWord = '';
    for (let char of s){
        capitalWord += (bool ? char.toUpperCase() : char);
        bool = !bool;
    }
    return capitalWord;
  }
  return [cap(true), cap(false)];
};