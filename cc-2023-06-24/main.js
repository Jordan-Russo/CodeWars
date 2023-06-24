// url: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
// Highest Rank Number in Arr
// Given an array of integers (array will never be empty)
// Return the number that is most frequent (aka the mode)
  // if there is a tie, return the largest number of the tied group
// Examples: 
  // [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
  // [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
  // [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
// function that intakes array
  // initialize a storage data structure
// initialize topRank variable starting with the first value in the array and a count of 1
// loop through array
  // if the value doesn't exist in the datastructure, add it as a key and initialize it with a value of 1.
  // if it does, increase it's value by one
  // if the count is higher than the highest variable, replace it.
    // if the count is equal, compare the key value instead and if the current one is higher than the highest, replace it.
// return the key of the highest ranked number.
function highestRank(arr){
  const ranking = new Map()
  let highestValue = arr[0]
  let highestCount = 1
  for(let num of arr){
    if(!ranking.has(num)){ranking.set(num, 0)}
    let numCount = ranking.get(num) + 1
    ranking.set(num, numCount)
    if(highestCount < numCount){[highestValue, highestCount] = [num, numCount]}
    if(highestCount === numCount && num > highestValue){[highestValue, highestCount] = [num, numCount]}
  }
  return highestValue
}