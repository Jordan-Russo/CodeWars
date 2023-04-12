// https://leetcode.com/problems/single-number-ii/

//Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity 0(n) and use only constant extra space O(1).

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

var singleNumber = function(nums) {
  let negCount = 0
  const uniqueNumber = parseInt(
    nums.reduce((acc, c) => {
      if(c < 0){
        negCount = ++negCount % 3
        c = -c
      }
      //Count the number of values less than 0 by intervals of 3. Convert negatives to positive after that.
      let decimalBitSum = (acc + BigInt(c.toString(2)))
      // get the absolute value of the number,turn the numbers into binary then add... 
      // i.e. 7 + -2 => 111 + 10 = 121
      let digitCounter = 0n
      let modBitSum = 0n
      while(decimalBitSum !== 0n){
        let currentDigit = decimalBitSum % 10n
        // grabs the last digit
        let modDigit = currentDigit % 3n
        // set mod to # of repeats of each element... 3 in this case
        decimalBitSum -= currentDigit
        decimalBitSum /= 10n
        // scale the sum down
        modBitSum += 10n**digitCounter++ * modDigit
        // scales the modified digit with the right amount of decimals to add to the modified sum
      }
      return modBitSum
    }, 0n)
    , 2)
    return negCount === 1 ? -uniqueNumber : uniqueNumber
};

// It is notable that for this question, creating an object-like data structure to hold onto each of the numbers and their quantity would not be constant space but linear
// To do this task we need to store the information as a continuous change that we keep transforming with more information.
// When we have a situation where the elements are repeated an even number of times, usage of the XOR operator (^) is ideal. However, since we're being asked with 3 copies of each element except the target, we need to replicate the behaviours of the XOR operator but to only act once we have 3 of something.
// To do this we can store the bits each number has like so:
// 6 -> 110
// then we manually add these like normal numbers too see repeated bits.
// 110 + 11 => 121 + 10 => 131
// Once a bit has 3 digits it would be a pair of three and reset to 0
// To do this, we would then take the modulus of all the digits by 3, such that 131 -> 101
// We get unexpected behaviours when some of the numbers are negative.
// To get around this edge-case
// We can try adding only the abs value of the terms but we need a way to determine if the unique value is negative or not
// We can count the negative numbers then mod it by 3.
// The end product of reducing the array of elements is to get a positive binary number
// we convert that back into base 10 with parseInt
// Our count of negative numbers can only be 0 or 1
// if our negativeCount is one we return the negated unique number.
// The side of these numbers as we approach base 2 is sufficiently large enough to convert them into BigIntergers instead, as to prevent JS behaviour of rounding large number with scientific notation

// The implmentation of this as a real problem is unlikely. Most problems would allow for linear data space like creating a data structure to hold onto these numbers and then returning the value they check to be the key that holds onto 1 copy of its number.