// url: https://www.codewars.com/kata/5413759479ba273f8100003d
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

function reverse(arr){
  for(let i = 0; i < arr.length - 1 - i; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr
  // This mutates the array, to not do so implement an array copy either with spread operator or concat method.
}
// We need a function that reverses an array-like without using built-in functions
// Lets use destructuring reassignment to grab two elements at opposite ends of the array and swap their values.
// We have the option of making this O(n) or O(n/2), going to implement the latter option.

// examples: 

// assert.deepEqual( reverse([1,2,3]), [3,2,1] )
// assert.deepEqual( reverse([1,null,14,"two"]), ["two",14,null,1] )