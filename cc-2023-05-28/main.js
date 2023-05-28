// url: https://www.codewars.com/kata/58f0ba42e89aa6158400000e
// Folding your way to the moon

// Given a distance as a float
// Return how many folds it will take to reach that distance

// Examples:
//   foldTo(384000000),42
//   foldTo(0),0
//   foldTo(-2134),null
//   foldTo(0.00008),0

// Function that intakes distance param
//  initialize paperwidth
//  check if distance is negative to return null
// check if distance is less than or equal to paperwidth to return 0
// determine how many folds it will take for distances greater and round up and return it.
function foldTo(distance) {
  if(distance < 0){return null}
  let foldDistance = 0.0001
  if(distance <= foldDistance){return 0}
  return Math.ceil(Math.log2(distance/foldDistance))
}