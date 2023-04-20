url: https://www.codewars.com/kata/57cc981a58da9e302a000214

// Given an array and a limit value and I have to determine whether all values in that arary are below or equal to the limit value and return that as a boolean

// An array of numbers, and the limit value which is an number
// return Boolean (t / f)

// smallEnough([1,3,2], 5) === true

// smallEnough([1_000_000, 40, 28], 10000) === false

// smallEnough([1,20,40], 40) === true


function smallEnough(numbers, limit){
  // take every element in the numbers array
  // check that they're less than or equal to the limit
  // return that
  return numbers.every(number => number <= limit);
}