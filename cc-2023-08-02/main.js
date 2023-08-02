// url: https://www.codewars.com/kata/58068479c27998b11900056e
// Sorting on planet Twisted-3-7
// Given an array of numbers
// Return a sorted array (increasing) such that 3 is treated as a 7 and vice-versa
// Examples:
  // [1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
  // [12,13,14] -> [12,14,13]
  // [9,2,4,7,3] -> [2,7,4,3,9]
// For each number we sort in the array
  // we compare both of them after we've modified any digits of 3 to 7 or 7 to 3
// We return the newly ordered copy of the array (do NOT mutate)
function sortTwisted37([...array]) {
  return array.sort((a,b) => twistedNumber(a) - twistedNumber(b))
  function twistedNumber(n){
    n = String(n)
    let twistedN = ""
    for(let digit = 0; digit < n.length; digit++){
      if(n[digit] === '7'){twistedN += '3'}
      else if(n[digit] === '3'){twistedN += '7'}
      else{twistedN += n[digit]}
    }
    return Number(twistedN)
  }
}