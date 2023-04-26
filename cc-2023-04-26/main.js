url: https://www.codewars.com/kata/5839edaa6754d6fec10000a2
// Write a function to find the missing letter in an array.
// Given an array of consecutive, increasing letters (a -> b) or (D->E) as an input.
// The array will always have one letter missing between the top/bottom of the array (minimum length 2) and all the characters will have the same casing.
// Return the missing letter

// findMissingLetter(['a','b','c','d','f'])
// 'e'
// findMissingLetter(['O','Q','R','S'])
// 'P'


// make a function that intakes an arr of increasing, alphabet elements
// grab the charcode of the first element in the array
// do a loop from the 2nd element to the last element
// If charcode of the element is not always one more than the last one, 
  // return the letter made from one charcode more than the previous element.

function findMissingLetter(arr){
  let charcode = arr[0].charCodeAt(0)
  for(let i = 1; i < arr.length; i++){
    if(++charcode !== arr[i].charCodeAt(0)){return String.fromCharCode(charcode)}
  }
}