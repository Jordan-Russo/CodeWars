// url: https://www.codewars.com/kata/583a8bde28019d615a000035
// Find the odd names
// Given an array of objects containing programmers
// Return in the same order, only the programmers whose firstName sum of ASCII characters results in an odd number
// Example:
  // var list1 = [
  //   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  //   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  // ];
  // findOddNames(list1) returns: 
  //  [
  //   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  // 
// Loop through the list  of programmers
  // Check the ASCII sum of their firstName (loop through each character and add to sum)
    // initialize each person's first name as false but each time they have a odd charcode character flip the sign
    // return the state of isOdd
  // if sum is odd, include it in new array
// return new array
function findOddNames(list) {
  return list.filter(hasOddName)
  function hasOddName({firstName}){
    let isOdd = false
    for(const char of firstName){
      if(char.charCodeAt() & 1){isOdd = !isOdd}
    }
    return isOdd
  }
}