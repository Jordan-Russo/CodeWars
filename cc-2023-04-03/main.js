// url: https://www.codewars.com/kata/580dda86c40fa6c45f00028a
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let sum = 0
  for(const num of arr){
    if(typeof num !== 'number'){return undefined}
    if(num % 2){sum += num ** 3}
  }
  return sum
}

// We will always be given an array
// array will mostly contain of numbers but may have elements that are not numbers
// we detect two things as we itereate through the array:
// if we have any elements that are not numbers -- Immediately return undefined
// if we have any elements that are an odd number -- cube and sum them
// we either return undefined or our sum
// no specifications were given for an empty array or just even numbers, therefore 0 will be returned in those cases