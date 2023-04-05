// url: https://www.codewars.com/kata/58daa7617332e59593000006
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.
function findLongest(array){
  let longest = ''
  for(let i = 0; i < array.length; i++){
    if(array[i].toString().length > longest.length){longest = array[i].toString()}
  }
  return +longest
}
// given an array of numbers
// assuming that numbers are whole numbers
// return the first number with the most digits
// Test.assertEquals(findLongest([1, 10, 100]), 100)
// Test.assertEquals(findLongest([9000, 8, 800]), 9000)
// Test.assertEquals(findLongest([8, 900, 500]), 900)
// we handle this by dividing the numbers at least once until they're under 1
// we could also just convert the number into string and take its length
// we'll go with the latter for simplicity
// go through the array convert each element to string, if the string is longer than the current string then replace the old one
// convert the final string back into a number and return it
// edge-cases: if negative, you'd either have to take the absolute value of it, 
// ... or just count 1 division and truncation followed by however many more needed to get a number that is equal to 0