// url: https://www.codewars.com/kata/57a049e253ba33ac5e000212
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial
function factorial(n){
  let number = 1;
  let i = 2;
  while (i <= n){
    number *= i++
  };
  return number;
}