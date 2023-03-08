// url: https://www.codewars.com/kata/6409aa6df4a0b773ce29cc3d
// This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

// Task
// The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

// Example
// Let's take the number 5 as an example:

// 1 - doesn't divide integer by 2, 3, and 5
// 2 - divides integer by 2
// 3 - divides integer by 3
// 4 - divides integer by 2
// 5 - divides integer by 5

function realNumbers(n, firstTerm = 2, secondTerm = 3, thirdTerm = 5){
  return n - (
  Math.trunc(n/firstTerm) 
  + Math.trunc(n / secondTerm) 
  + Math.trunc(n / thirdTerm) 
  - Math.trunc(n / (firstTerm * secondTerm)) 
  - Math.trunc(n / (firstTerm * thirdTerm)) 
  - Math.trunc(n / (secondTerm * thirdTerm))
  + Math.trunc(n / (firstTerm * secondTerm * thirdTerm)));
}