// url: https://www.codewars.com/kata/515decfd9dcfc23bb6000006
// IP Validation

// Given a string
// Correctly identify and return a boolean indicating whether or not the given string would be considered a valid IPV4 address
// IPV4 address much include 4 numbers from 0 to 255, seperated by '.'
// These numbers cann't have leading zeros.
// Examples of true:
//   1.2.3.4
//   123.45.67.89
// Examples of false:
//   1.2.3
//   1.2.3.4.5
//   123.456.78.90
//   123.045.067.089

// isValidIP function
// initialize count to 0
// initialize currentIP = ''
// loop through the string
  // if character is a '.'
    // check the number in the currentIP is valid
    // if so clear it off and increment count
    // 
  // else if character is a digit
    // add it to currentIP
  // else return false
  // maybe use a switch case for this for once.
// check the final number in the currentIP and increase count
// check count length is 4
// Return true if all the checks passed.

function isValidIP(str) {
  let count = 0
  let currIP = ''
  for (let i = 0; i <= str.length; i++){
    const char = str[i]
    if(char === '.' || i === str.length){
      if(currIP[0] === '0' && currIP !== '0'){return false}
      // leading zero
      if(currIP > 255){return false}
      // out of range
      if(!currIP && currIP !== 0){return false}
      currIP = ''
      count++
    }
    else if(char >= '0' && char <= '9'){
      currIP += char
    }
    else{
      return false
    }
  }
  return count === 4
}