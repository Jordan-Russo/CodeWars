// url: https://www.codewars.com/kata/58235a167a8cb37e1a0000db
// Pair of gloves
// Given an array of colors
// Return the number of PAIRS of gloves (2 gloves with same color). 
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 
  // (1 red pair + 1 blue pair)
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 
  // (3 red pairs)
// input = ["red", "green", "blue"]
// result = 0
  // result = 0
// Given gloves array
  // make datastructure to hold onto glovestypes and their quantities.
  // loop through the array of gloves
    // for Each glove
      // if new, initialize it as a key with a count of 1
      // otherwise, increment its current value
  // Loop through datastructure and sum to find TOTAL number of glove pairs 
    // (Cumulative count of pairs of glove for each type.)
// Return total glove pairs
function numberOfPairs(gloves){
  const gloveStock = {}
  for(const glove of gloves){
    gloveStock[glove] ??= 0
    gloveStock[glove]++ 
  }
  const glovePairCount = Object.values(gloveStock)
    .reduce((totalPairs, gloveCount) => totalPairs + Math.trunc(gloveCount/2), 0)
  return glovePairCount
}
// 2nd try, for cleaner code
function numberOfPairs(gloves){
  const gloveStock = {}
  let pairCount = 0
  for(const glove of gloves){
    gloveStock[glove] ??= 0
    if(++gloveStock[glove] === 2){
      gloveStock[glove] = 0
      // remove 2 gloves to make pair
      pairCount += 1
    }
  }
  return pairCount
}