// url: https://www.codewars.com/kata/5226eb40316b56c8d500030f
// Pascal's Triangle
// Given a whole number n 
// Return the array containing the 1-th to n-th level of a pascal triangle from row to row.
// Use the following formula to get the coefficients:
  // n! / k! (n - k)!
    // where n is the row, and k is the position within the row.
// Example:
  // n = 1: [1]
  // n = 2: [1,  1, 1]
  // n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Given n, positive whole integer
// Create a function that can make the next number
// create the next number to push into the array until we've completed the final row
function pascalsTriangle(n) {
  n = BigInt(n)
  let pascalArr = []
  let row = 0n
  let pos = 0n
  while(row < n){
    nextNum = (row - pos < 0n) ? undefined : factorial(row) / factorial(pos) / factorial(row - pos) 
    if(nextNum){
      pascalArr.push(Number(nextNum))
      pos++
    }else{
      pos = 0n
      row++
    }
  }
  return pascalArr
}
function factorial(n){
  if(n < 0n){return undefined}
  return n ? n * factorial(n - 1n) : 1n
}