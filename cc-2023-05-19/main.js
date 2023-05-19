// url: https://www.codewars.com/kata/5300901726d12b80e8000498
// Fizz Buzz 

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// function that asks for n
// initialize an empty arr 
// make a loop that goes from 1 to n
  // initialize an empty string
  // if divisible by 3 add 'Fizz'
  // if divisible by 5 add 'Buzz'
  // if str is still empty set it equal to the index of the loop

function fizzbuzz(n){
  let soundArr = []
  for (let i = 1; i <= n; i++){
    let sound = ''
    if(i % 3 === 0) sound += 'Fizz'
    if(i % 5 === 0) sound += 'Buzz'
    soundArr.push(sound || i)
  }
  return soundArr
}