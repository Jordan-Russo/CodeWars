// Given a number (positive integer)
// Return whether it is a STRONG number or not
  // strong number have the sum of their digit's factorials equal themselves
// examples
  // strong(1) -> "STRONG!!!!"
  // strong(2) -> "STRONG!!!!"
  // strong(145) -> "STRONG!!!!"
  // strong(7) -> "Not Strong !!"
  // strong(93) -> "Not Strong !!"
  // strong(185) -> "Not Strong !!"
// Break the given number down digit by digit
// add the factorial to a sum
// check that the sum is equal to the given number
// return "STRONG!!!!" if so, "Not Strong !!" otherwise.
function factorial(n){return n === 0 ? 1 : n * factorial(n-1)}
function strong(n) {
  let expectedSum = n
  while(Math.min(n, expectedSum) > 0){
//     subtract the digit factorial from the expected sum
//     if sum is 0 or less than 0 stop
// check that n is 0
// prevents overshoot
    const digit = n % 10
    n -= digit
    n /= 10
    expectedSum -= factorial(digit)
  }
  return (n || expectedSum) ? "Not Strong !!" : "STRONG!!!!"
}