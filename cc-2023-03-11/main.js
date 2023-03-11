// // url: https://www.codewars.com/kata/566fc12495810954b1000030
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  let digits = ''
  for(let k = 0; k <= n; k++){
    digits += k**2
  }
  let digitCount = digits.replaceAll(`${d}`, '')
  digitCount = digits.length - digitCount.length
  return digitCount
}
// n and d
// n is an natural number
// d is an integer between 0 - 9
// square all numbers between 0 and n
// count the number of digits used in in writing k**2 and count them
// return that count of the amount of digits that equal 'd' from going k**2 from 0 to n

// aka have a counter
// once you determine k**2 convert it to string
// only fi

// A slower one-liner solution:
//  return Array.from({length: n + 1}, (_, i) => i ** 2).join('').split('').filter(digit => digit == d).length;