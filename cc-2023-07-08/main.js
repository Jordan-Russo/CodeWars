// url: https://www.codewars.com/kata/5355a811a93a501adf000ab7
// Custom FizzBuzz Array
// Given 2 strings and 2 numbers (by default Fizz 3, and Buzz 5)
// Return an array that goes from 1-100 and if a number is divisible by either of the numbers it's name by the numbers in order.
// examples:
  // ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
  // ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
var fizzBuzzCustom = function(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) {
  let arr = []
  for(let i = 1; i <= 100; i++){
    let sound = ''
    if(i % numOne === 0){sound += stringOne}
    if(i % numTwo === 0){sound += stringTwo}
    arr.push(sound || i)
  }
  return arr
};