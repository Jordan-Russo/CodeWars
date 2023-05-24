// url: https://www.codewars.com/kata/6469e4c905eaefffd44b6504
// Reverse a number in any base

// Given a non-negative integer, a random base, both as BigInts, 
// return the number converted into that base, reversed, and then parsed in decimal(base-10) bigInt

// Example:
//  reverseNumber(12n, 2n) -> 12 in base 2: '1100' -> reversed: '0011' -> parsed: 3n
//  reverseNumber(10n, 5n) -> 10 in base 5: '20' -> reversed: '02' -> parsed: 2n
//  reverseNumber(5n, 1n) -> 5 in base 1: '11111' -> reversed: '11111' -> parsed: 5n

// Function /w params, n for number(bigInt), b for base(bigInt)
  // assign numString to convert the bigInt Number into a string in base b(must convert from bigInt to num)
  // reverse numString
  // parse the integer in that string in base b(once again convert to number from BigInt)
  // turn the reversed and parsed number into a bigInt and return it

  function reverseNumber(n, b){
    if(b === 1n){return n}
    if(b > 36n){
      let result = 0n
      while(n > 0n){
        let remainder = n % b;
        result = result * b + remainder;
        n = n / b;
      }
      return result;
    }
    let numStr = n.toString(Number(b))
    numStr = [...numStr].reverse().join('')
    const reversedNum = BigInt(parseInt(numStr, Number(b)))
    return reversedNum
  }
