// Given an array of two numbers ([min, max])
// return the cumulative sum of all the numbers between and including the min and max numbers.

console.log(rangeSum([1,9]), 45)
console.log(rangeSum([4,8]), 30)
console.log(rangeSum([-10, 40]), 765)
console.log(rangeSum([-100, -1]), -5050)

// O(1)
function rangeSum([min, max]){
  const avg = (max + min) / 2
  const numCount = max - min + 1
  return avg * numCount
}

// O(n)
function rangeSum([min, max]){
  let sum = 0
  while(min <= max){
    sum += min++
  }
  return sum
}