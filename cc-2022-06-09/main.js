// url: https://www.codewars.com/kata/55908aad6620c066bc00002a
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  let x = str.split("").filter(term => (/x/gi).test(term)).length;
  let o = str.split("").filter(term => (/o/gi).test(term)).length
  return x === o ? true : false
}