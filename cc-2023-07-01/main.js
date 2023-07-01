// url: https://www.codewars.com/kata/55eeddff3f64c954c2000059
// Sum consecutives 
// Given an array
// Return the array with consecutive numbers replaced by their sum
// Examples:
  // [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
  // [1,1,7,7,3] # should return [2,14,3]
  // [-5,-5,7,7,12,0] # should return [-10,14,12,0]
// keep track of the current values and how many times they've occured
// loop through the array
// when the next value stays the same:
  // increment count
// once the next value changes:
  // push the value multiplied by its count
  // then reset the value to be the next one and the count to be 1
// return the new consecutive array
function sumConsecutives(s) {
  let val = s[0]
  let count = 1
  let consecutiveArr = []
  for(let i = 0; i < s.length; i++){
    if(s[i + 1] === val){count++}
    else{
      consecutiveArr.push(count*val)
      val = s[i + 1]
      count = 1
    }
  }
  return consecutiveArr
}