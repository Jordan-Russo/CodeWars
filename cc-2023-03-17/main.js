// url: https://www.codewars.com/kata/55b54be931e9ce28bc0000d6
// The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

// For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

// We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

// position(4, 14, 3) == 5
// Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.

const position = (x, y, n) => (y - (x-1) * x/2) / x + n

// position (4, 14, 3) // 14 = 4x + 6; x = 2; x + 3 = 5; 5 is returned 
// x(# of consecutive integers) + 
// ((y - ConsecutiveSum(x - 1)) / x) + n
// consecutiveSum of x - 1 is ((x-1) * (x/2))
// the following series:
// x
// 2x + 1
// 3x + 3
// 4x + 6
// 5x + 10
// 6x + 15