// url: https://www.codewars.com/kata/56e1161fef93568228000aad
// Thinking & Testing: Operator hidden in a string
// Given NO information except a handful of test cases
// build a string parser that returns numbers and returns null if the string is of odd length
function testit(s){
  if(s.length % 2 === 0){return null}
  let operator;
  const expression = [...s].reduce((acc, curr, i) => {
    if(i % 2 === 0){
      return `${acc}${alphabetNumber(curr)}`
    }
    // take acc (operator) curr, then return that as the new acc.
    if(i % 2){
      operator = ['+','-','*','/'][(alphabetNumber(curr) - 1) % 4]
      return `${acc}${operator}`
    }
  }, '')
  return eval(expression)
  // eval is vulnerable to XSS.
}
function alphabetNumber(char){
// function that returns a number for lowercase letters starting at 1 for 'a'
  return char.charCodeAt() - ('a'.charCodeAt() - 1)
  // returns 1 for a, 2 for b, etc...
}
// Scratch board:
// a = 1
// or +
// b = -
// c = *
// d = /
// odd-index'd elements are operators