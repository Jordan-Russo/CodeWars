// url: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]

function solve(arr){  
  return arr.reduce((matching, word) => {
    let count = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++){
      if(i >= 26){break}; // limits word that are too long to matter (should improve performance in worst-case inputs)
      if(i === word.charCodeAt(i) - 97){count++}
    }
    matching.push(count);
    return matching;
  },[])
};
// take string to lowercase to standardize it
// compare the charcode to the index (a is 97 and should be at index 0 to count) so subtract charcode by 97 and check if equal to index
// for each letter in the word that matches this we increment some number that when we're done going through one string we push (so start at 0) into an array
// we return this array