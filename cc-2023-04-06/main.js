// url: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
function minSum(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b)
  let minProductSum = 0
  for(let i = 0; i < arr.length - 1 - i; i++){
    minProductSum += sortedArr[i] * sortedArr[arr.length - 1 - i]
  }
  return minProductSum
}
// given array of integers
// return the minimum sum(sum obtained by summed each two integer product)
// Array/list will contain positives only .
// Array/list will always have even size
// Test.assertEquals(minSum([5,4,2,3]), 22);
// Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
// Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
// sort the array
// sum the product of terms from both ends of the array
// return that sum