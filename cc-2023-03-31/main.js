// url: https://www.codewars.com/kata/559cc2d2b802a5c94700000c
// DESCRIPTION:
// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
function consecutive(arr) {
  return arr.length ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0
 }
 // We get the input of an array that only contains integers
 // We always get an array but it could be empty or only have one number in it
 // all the integetrs in the array are UNIQUE, no REPEATS.
 // Our sollution should work for an array of both positive and negative integers
 // we need to return the "missing" numbers in the array or the difference of actual with expected length
 // [4,8,6] -> 2
 // [] -> 0
 // [5] -> 0
 // [1, 7, 5, 3] -> 3
 // make a function that takes an array as a parameter
 // from the array, take the largest number and subtract it from the smallest number (range)
 // Add 1 to the range to get the amount of consecutive numbers
 // substract the arr.length from amount of consecutive numbers to get amount of missing numbers
 // return that amount of missing numbers
 // edge case: for empty arrays, return 0