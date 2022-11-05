// url: https://www.codewars.com/kata/539ee3b6757843632d00026b
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
var capitals = function (word) {
	return word.split('').reduce((acc, term, index) => {
    if (term === term.toUpperCase()) {
      acc.push(index)
    }
    return acc;
  } , [])
};