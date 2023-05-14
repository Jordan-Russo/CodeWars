// url: https://www.codewars.com/kata/526ec46d6f5e255e150002d1 
// Closures and Scopes

// Given a function that returns an array of functions which return their index in an array, debug the following:

// function createFunctions(n) {
//   var callbacks = [];

//   for (var i=0; i<n; i++) {
//     callbacks.push(function() {
//       return i;
//     });
//   }
  
//   return callbacks;
// }

// example:
  // let indexFunc = createFunctions(6)
    // indexFunc[2]() === 2
    // indexFunc[0]() === 0
    // indexFunc[6]() === 6
  // Before the debugging all of those would be equal to 6.

// Using the keyword var when initializing and declaring i causes this bug, 
// Var is function scoped, therefore when called, i is always going to be equal to the last number since i, would be the same for all values when callbacked.
// aka let callbacks = createFunction(3)
  // Returns array of functions but all of then return n, or 3 in this case, due to scoping.
// To fix set initialize and declare i using let
  // now when the functions go back in scope and access the value of i, they get the value of i defined in the scope of the for loop which is the correct value, instead of the function-scoped value that's always going to be equal to n.
// // var is like this:
//   let i = 0;
//   for(; i<n; i++){....}
// // instead of this:
//   for(let i = 0; i < n; i++){....}

function createFunctions(n) {
  const callbacks = [];
  for (let i=0; i<n; i++) {
    callbacks.push(() => i);
  }
  return callbacks;
}
// function body can also be written as:
  return Array.from({length: n}, (_, i) => () => i)