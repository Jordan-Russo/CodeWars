// url: https://www.codewars.com/kata/54fb853b2c8785dd5e000957
// function chainer
// Given an input and an array of callbacks
// Return the final value from using the input as the starting argument then the output of the previous function as the argument for the next one.
// Examples:
  // function add(num) {
  //   return num + 1;
  // }

  // function mult(num) {
  //   return num * 30;
  // }
  chain(2, [add, mult]);
  // returns 90;
// Create a function that uses an array method to simplify an array down to a single value starting with an input value and using that value as the argument to the next function in an array.
function chain(input, functionArr){
  return functionArr.reduce((acc, c) => c(acc), input)
}