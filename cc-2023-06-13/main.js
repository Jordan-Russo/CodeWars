// given a string and an array(of strings)
// return whether or not the array contains all the rotations of the given string
  // an empty string, "" needs no rotations
// examples
  // "", [] -> true
  // "", ["bsjq", "qbsj"] -> true
  // "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"] -> true
  // "XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"] -> false
// Given a string, first check whether or not it's empty
  // return true if so
// Create all rotations for a string and push them into an empty array
// Go through the rotations array, and check for every rotations to be inside the given parameter array
// if any are missing return false, otherwise return true
function containAllRots(string, arr) {
  let rotArr = makeAllRots(string)
  return rotArr.every(rotation => arr.includes(rotation))
}
function makeAllRots(string){
let rotArr = []
for(let i = 0; i < string.length; i++){
  rotArr.push(string)
  string = string.slice(1) + string[0]
}
return rotArr
}