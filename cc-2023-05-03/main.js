// url: https://www.codewars.com/kata/55b051fac50a3292a9000025
// filter the number
// given a string that has digits and other characters mixed in
// Only positive integers will be given
// return a number(data-type number) derived from filtering out the digits in a string
// Edge cases: how do I handle an empty string or an empty filtered string, falsy values or undefined
// return 0 in all edge cases
function filterString(value){
  let numStr = ''
  for(let char of value){
    if(char >= 0 && char <= 9){
      numStr += char
    }
  }
  return Number(numStr)
}