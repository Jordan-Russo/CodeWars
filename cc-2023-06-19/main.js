// url: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
// Reverse or rotate
// Given a string of digits and chunk size as an integer
// Return a modified string
  // if size is less than 1, or string is empty or sz is greater than the length of str return an empty string ''
  // otherwise first cut the string into chunks of the chunk size(ignore last chunk if it's less than the chunk size)
  // from each of these new chunks, if it represents an integer such that the sum of the cubs of it's digits is divisible by 2
  // reverse the chunk, otherwise rotate it left by one position
  // join these modified chunks together and return them as a string
// function that intakes string param, and size (integer)
  // str.length or sz less than 1, str.length less than sz both return empty str
  // break string into chunks (if big enough)
  // for each chunk
    // determine whether sub of cubes of its digits is divisible by 2
      // if so, reverse the chunk
      // if not, rotate it left by one position
    // join these modified chunks in order
  // return the modified string of chunks
function revrot(str, sz = 0) {
  let newStr = ''
  if(sz >= 1 === false){return newStr}
  for(let i = sz; i <= str.length; i += sz){
    let chunk = str.slice(i - sz, i)
    newStr += digitsCubed(chunk) % 2 ? chunk.slice(1) + chunk[0] : reversedStr(chunk)
  }
  return newStr
}
function reversedStr(str){
  let revStr = ''
  for(let i = str.length - 1; i >= 0; i--){
    revStr += str[i]
  }
  return revStr
}
function digitsCubed(str){
  let sum = 0
  for(let digit of str){
    sum += digit ** 3
  }
  return sum
}