// url: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str, length = 2){
  const splitter = new RegExp(`.{1,${length}}`, 'g');
  return str.match(splitter)?.map(pair => pair + '_'.repeat(length-pair.length)) || [];
}
// works for any length :^) you could also just use this logic in a for loop as well ig.