// url: https://www.codewars.com/kata/57241e0f440cd279b5000829
// Sum of Multiples
// Find the sum of all multiples of n below m
  // edge case: if m is less than n, return "INVALID"
// Examples:
  // sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
  // sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
  // sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
  // sumMul(4, -7)  ==> "INVALID"
// function that intakes n and m
  // if m <= n
    // return "INVALID"
  // initialize sum to 0
  // initialize step to n
  // loop(while n is under m)
    // sum += n
    // n += step
  // return sum
function sumMul(n, m){
  if(m <= n){
    return "INVALID"
  }
  const step = n
  let sum = 0
  while(n < m){
    sum += n
    n += step
  }
  return sum
}