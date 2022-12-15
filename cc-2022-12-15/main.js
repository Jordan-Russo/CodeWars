// url: https://www.codewars.com/kata/52774a314c2333f0a7000688
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
function validParentheses(parens) {
  let str = parens
  const next = (str) => str.replaceAll('()', '');
  while (str !== next(str)){
    str = next(str);
  }
  return !str;
}
// O(n) approach involves an increment/decrement counter that is evaluated to never at any point have more ')' then '(' then evaluated to cancel out to 0