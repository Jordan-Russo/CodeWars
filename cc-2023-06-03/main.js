// url: https://www.codewars.com/kata/57f75cc397d62fc93d000059
// Char Code Calculation
// Given a string
// Return the result of a performed calculation
  // first get the number that is just the charcode of each character joined together
    // 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
  // then replace any digits that have the value 7 with 1
    // 656667 -> 656661
  // then return the difference between the first and second numbers
    // 656667 - 656661 = 6

// function that intakes a string
  // loop through the str and add each charcode to an empty str
  // grab the empty str and replace all 7 with 1
  // convert both strings to their sum of digits and subtract the new one from the old one
  // return the difference

  function calc(str){
    let numStr = ''
    for(let char of str){
      numStr += char.charCodeAt(0)
    }
    return digitSum(numStr) - digitSum(numStr.replaceAll('7', '1'))
  }
  // helper function
  function digitSum(digits){
    let sum = 0
    for(let digit of digits){
      sum += Number(digit)
    }
    return sum
  }