// url: https://www.codewars.com/kata/5626b561280a42ecc50000d1
// The number 89 is the first integer with more than one digit that fulfills the
// partially intrcxiuced in the title of this kata. What's the use of saying
// "Eureka"? Because this sum gives the same number:
// The next number in having this is 135:
// Task
// We need a function to collect these that may receive two integers a, b
// that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers
// in the range that fulfills the property described atx)ve.
// Examples
// Let's see some cases (input -> output):
// 1, 10
// 1, l00
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should
// output an empty list.
// 90, l00 --> []
function sumDigPow(a, b) {
  const eureka = [];
  for (let i = a; i <= b; i++){
    const digitEureka = i.toString().split('').reduce((sum, term, idx) => sum + parseInt(term)**(idx+1), 0);
    if (digitEureka === i){eureka.push(i)}
  }
  return eureka;
}