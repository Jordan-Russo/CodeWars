// url: https://www.codewars.com/kata/52de553ebb55d1fca3000371
// Find the missing term in an Arithmetic Progression
// Given an array of a sequence of numbers
// Return the missing number
// Array Length is always going to be 3 or more
// Missing number will never be the first or last term in a sequence.
// examples:
// findMissing([1,2,4]) -> 3
// findMissing([1,3,4]) -> 2
// findMissing([-10, -7, -4, 2]) -> -1
// Determine interval
// Loop through the list
  // find missing interval by checking if next term matches the expected next term
// return missing interval
// O(n)
function findMissing(list){
  const firstVal = list[0]
  const lastVal = list[list.length - 1]
  const interval = (lastVal - firstVal)/(list.length)
  for(let i = 0; i < list.length; i++){
    const expectedVal = list[i] + interval
    if(expectedVal !== list[i + 1]){return expectedVal}
  }
}
// Determine the interval
// Loop through the list
  // choose an index in the middle
  // check if missing number is to the left or the right of the middle number
// redefine the start, middle, and end to include only the numbers that can be missing
// once the start and end are 1 index apart but there should be a value inbetween them, return the value inbetween them.
// Binary Search O(log n)
function findMissing(list){
  let startIndex = 0
  let endIndex = list.length - 1
  let midIndex = Math.floor((endIndex - startIndex) / 2)
  // initial states
  const interval = (list[endIndex] - list[startIndex])/(list.length)
  while(startIndex !== endIndex){
    let midVal = list[midIndex]
    let startVal = list[startIndex]
    const valDiff = midVal - startVal
    const indexDiff = midIndex - startIndex
    if(valDiff != indexDiff * interval){
    // if values between startIndex and midIndex are missing
      if(indexDiff === 1){return startVal + interval}
      // if indices are next to each other, the missing value is between them.
      endIndex = midIndex
      midIndex = Math.floor(midIndex / 2)
    }else{
      startIndex = midIndex
      midIndex += Math.ceil((endIndex - midIndex) / 2)
      // making sure startIndex !== midIndex
    }
  }
}