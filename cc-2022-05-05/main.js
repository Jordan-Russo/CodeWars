// url: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome (x) {
  let word = x.toUpperCase();
  if (word === word.split("").reverse().join("")) {
    return true
  } else {
    return false
  }
}