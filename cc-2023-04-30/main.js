url: https://www.codewars.com/kata/5813d19765d81c592200001a
// Don't give me five

// Given a start number and an end number
// Return the count of numbers that don't have 5 as a digit including those two numbers
// the result can have a 5 in it
// start number will be smaller than end number
// numbers can also be negative

// count (starts at 0)
// loop from first number to last num
  // if num contains 5 add to count
// return count

function dontGiveMeFive(start,end){
  let count = 0
  for(let i = start; i <= end; i++){
    if(!`${i}`.includes('5')){count++}
  }
  return count
}
