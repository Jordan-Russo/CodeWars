// url: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
// DESCRIPTION:
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// O(n^2) solution
// function validBraces(braces){
//   const regex = /\[\]|\{\}|\(\)/g
//   while(braces.replace(regex, '') !== braces){
//     braces = braces.replace(regex, '')
//   }
//   return !braces
// }

function validBraces(braces){
  const bracePairs = []
  let parentheses = 0
  let squareBraces = 0
  let curlyBraces = 0
  const braceCount = {
    '(': () => ++parentheses,
    ')': () => --parentheses,
    '[': () => ++squareBraces,
    ']': () => --squareBraces,
    '{': () => ++curlyBraces,
    '}': () => --curlyBraces,
  }
  for (let brace of braces){
    bracePairs.push(brace)
    braceCount[brace]()
    if(')]}'.includes(brace) && !['()', '[]', '{}'].includes(bracePairs.splice(-2).join(''))){return false}
    if(parentheses < 0 || squareBraces < 0 || curlyBraces < 0){return false}
  }
  return !parentheses && !squareBraces && !curlyBraces
}
// Time to see if I can pull off a O(n)
// when there is one bracket we can simply make a single counter that goes up and down and if ever negative or ends up not being zero we'd return false
// how would I solve this with 2 different bracket types?
// same rules as before but with 2 counters
// we also need more rules then that as well
// if a increases before b, and b is nested in a, then if a decreases before b we return false.
// same vise versa
// so we need to keep track of order of increasing... ? if that makes any sense?
// while a > 0 || b > 0 
// we read and as we read, we push things into an array, 
// when we read a closed bracket we remove the last two elements of an array, 
// if the last two chars just removed don't equal '()'||'{}'||'[]' we immediately return false