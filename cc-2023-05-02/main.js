// url: https://www.codewars.com/kata/54598d1fcbae2ae05200112c
// true for all
// given an an array and function
// return boolean on whether they're all true
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// if all elements in arr are true for the function return true, else false
function all( arr, fun ){
  return arr.every(fun)
}