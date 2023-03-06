// url: https://www.codewars.com/kata/5892595f190ca40ad0000095
// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

const mispelled = function(word1, word2){
  const lengthDifference = Math.abs(word1.length - word2.length)
  if(lengthDifference > 1){return false}
  if(word1.includes(word2) || word2.includes(word1)){return true}
  if(lengthDifference){return false}
  let errorCount = 0;
  for (let i = 0; i < word1.length; i++){
    if(word1[i] !== word2[i]){errorCount++}
    if(errorCount > 1){return false}
  }
  return true;
}
// we have to care about two things:
// character length not being the same (only allowed by one)
// one char that's different between the two

// we can check whether the longer one includes the shorter one

// if words are the same return true - obsolete by next one
// if longer word includes shorter word and difference of their length is less than 2 (absolute) true.
// if length is the same: go through a counter between them, once two mismatches are detected return false, otherwise return true,
