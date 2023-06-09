// url: https://www.codewars.com/kata/514a6336889283a3d2000001
// JS ARR Filter
// Given an array of integers
// Return only the even numbers
// Example:
  // [1,2,3,6,8,10] -> [2,6,8,10]
  // [1,3,9] -> []
  // [1,2] -> [2]
  // [12,14,15] -> [12,14]
  // [13,15] -> []
// Take array,
  // filter numbers that aren't even
  // return filtered array
function getEvenNumbers(numbersArray){
  return numbersArray.filter(n => n % 2 === 0)
}