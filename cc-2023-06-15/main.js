// Given a non-negative integer no greater than 99999
// Return the number as a string with the follow format
  // "Value is 00001"
// Examples:
  // solution(5) ->"Value is 00005"
  // solution(1204) ->"Value is 01204"
  // solution(109) ->"Value is 00109"
  // solution(0) ->"Value is 00000"
// Take the value and turn it into a string, pad it with enough zero on the left to make the number have 5 digits
// then append that string number to the phrase "Value is "
// Return that concatenated string
function solution(value){
  return `Value is ` + String(value).padStart(5, '0')
}