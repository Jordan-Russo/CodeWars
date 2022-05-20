// url: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
  let result = [];
  for (let i=0; i < str.length; i++) {
    result.unshift(str[i])
  }
  return result.join("");
}