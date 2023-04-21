url: https://www.codewars.com/kata/544aed4c4a30184e960010f4

// function name divisors that returns all divisors except 1 and the number or state the number is prime

// given a whole number greater than 1 (2 and up) With NO edge cases of any values given in data type other than number, no floats, no negatives, no NaN. Exclusively whole numbers that are not 1.

// return an array that contains all the factors that are greater than 1 and the positive integer OR if the array is empty, return a string saying the `${integer} is a prime`

divisor(12) === [2,3,4,6]
divisor(10) === [2,5]
divisor(4) === [2]
divisor(3) === '3 is prime'


function divisors(integer){
  const factors = []
  const halfInteger = integer / 2
  for (let i = 2; i <= halfInteger; i++){
    if(Number.isInteger(integer/i)){factors.push(i)}
  }
  return factors.length > 0 ? factors : `${integer} is prime`
}
  // initialize array to hold values
  // starting loop from 2 to less than or equal to half of the integer
    // Check Divisibility by seeing whether dividing integer by divisor results in a value equal to itself when floored.
    // if so push divisor into array
  //check length of array
    // if greater than 0 return it
    // if 0 return template literal "${integer} is prime"