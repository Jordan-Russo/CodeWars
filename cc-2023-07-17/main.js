// url: https://www.codewars.com/kata/59590976838112bfea0000fa
// English Beggars
// Given an array of natural numbers and a number of beggars, n
// Return an array stating how much value was given to each beggar
// Examples:
//   beggars([1,2,3,4,5],1) => [15]
//   beggars([1,2,3,4,5],2) => [9,6]
//   beggars([1,2,3,4,5],3) => [5,7,3]
//   beggars([1,2,3,4,5],6) => [1,2,3,4,5,0]
//   beggars([1,2,3,4,5],0) => []
// Initialize a beggarsShare array
// if there are no beggars return an empty arr
// loop through values
  // find the position of beggar and push thine beggings upon them.
    // initialize as 0 if they are new 
    // otherwise add value to their begging position
// to handle the poorest beggars who get no blessing
  // for each beggar who gets no blessing, push 0 to the beggars arr.
// return the beggarsShare arr
function beggars(values, n){
  const beggarsShare = []
  if(n === 0){return beggarsShare}
  for(let i = 0; i < values.length; i++){
    let pos = i % n
    if(beggarsShare[pos] === undefined){
      beggarsShare.push(0)
    }
    beggarsShare[pos] += values[i]
  }
  beggarsShare.push(...new Array(n - beggarsShare.length).fill(0))
  return beggarsShare
}