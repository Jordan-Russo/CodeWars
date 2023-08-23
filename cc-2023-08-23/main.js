// Given an array
// Return the array with all falsy values removed

console.log(falsyBouncer([]), [])
console.log(falsyBouncer([0,1,0n,'', null, undefined, NaN, false]), [1])
console.log(falsyBouncer([5,4,3,2,1,0,-1,-2,-3,-4,-5]), [5,4,3,2,1,-1,-2,-3,-4,-5])

function falsyBouncer(arr){
  return arr.filter(Boolean)
  // filter out values that are falsy
  // return the array that has been filtered
}