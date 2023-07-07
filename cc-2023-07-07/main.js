// url: https://www.codewars.com/kata/5596f6e9529e9ab6fb000014
// Calculate string rotation
// Given two strings for comparison
// return how many index positions the characters in the string were rotated
  // if there is no match return -1
// Examples:
  // "coffee", "eecoff" => 2
  // "eecoff", "coffee" => 4
  // "moose", "Moose" => -1
  // "isn't", "'tisn" => 2
  // "Esham", "Esham" => 0
  // "dog", "god" => -1
// loop through the length of the str and possible rotations
  // if there's a match return the index of rotation
// if no match return -1
function shiftedDiff(first,second){
  for(let i = 0; i < first.length; i++){
    const shiftedStr = first.slice(first.length - i) + first.slice(0, first.length - i)
    if(shiftedStr === second){return i}
  }
  return -1
}