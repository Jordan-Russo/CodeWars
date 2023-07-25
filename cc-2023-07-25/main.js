// url: https://www.codewars.com/kata/5825792ada030e9601000782
// zipWith
// Given a function and two arrays
// return a new array (non-mutating) of length of the shorter of the two arrays
// the array will have the function used as a callback for the values of the array at each index position
// Examples:
  // zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
  // zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]
  // zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
  // zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
// determine which array given is the shorter one and loop through its index positions
// for each of it's index positions 
  // call the provided function with the elements in both positions of the arrays and return it's value
// return the new array made from it.
function zipWith(fn,a0,a1) {
  const shortestArr = a0.length <= a1.length ? a0 : a1
  return shortestArr.map((_,i) => fn(a0[i], a1[i]))
}