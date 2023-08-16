// Given two strings of equal length
// Return the hamming distance, number
// Hamming distance is the amount of character changes needed to make them the same string.
// Character matches must be specific (case-sensitivity for matches)
console.log(hammingDistance('rover', 'river'), 1)
console.log(hammingDistance('rhyme', 'rooms'), 3)
console.log(hammingDistance('hello Tom', 'Hello Bob'), 3)
console.log(hammingDistance('good', 'good'), 0)

function hammingDistance(str1, str2){
  let distance = 0
  for(let i = 0; i < str1.length; i++){
  // loop through the characters in one of the strings
    if(str1[i] !== str2[i]){distance++}
  // if the value of the other string doesn't match count it
  }
  return distance
  // return that count
}

function hammingDistance(str1, str2){
  return [...str1].filter((char, i) => char !== str2[i]).length
}