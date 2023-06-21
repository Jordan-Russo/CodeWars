// url: https://www.codewars.com/kata/59f08f89a5e129c543000069
// String array duplicates
// given an array of strings
// return each element with any characters in a row, reduced to just one instead.
// examples:
  // dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]
  // dup(["kelless","keenness"]) = ["keles","kenes"]
// loop through each element in the array
// copy letters in each element that aren't preceeded by the same element into a new string
// set that as the new element in a string
// return an array with every one of its elements changed by this function
function dup(s) {
  return s.map(e => {
    let noRepeatStr = ''
    for(let char of e){
      noRepeatStr += noRepeatStr[noRepeatStr.length - 1] === char ? '' : char
    }
    return noRepeatStr
  })
};