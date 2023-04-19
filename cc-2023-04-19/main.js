url: https://www.codewars.com/kata/57814d79a56c88e3e0000786

// implment pseudo-encryption algorithm
// Given a number-string, and integer N
// Concatenate all the odd-indexed characters of string with even-indexed characters of the string (the string becomes all of the odd-index characters together, followed by all of the even ones in order of appearance), repeated N times
// return the resulting string
// return first arg if number-string is empty or negative
// also implement a decryption function 

// Examples:
// encrypt("012345", 1) === "135024"
// encrypt("012345", 2) => "135024" -> "304152"
// encrypt("01234", 3) => "13024" -> "32104" -> "20314"

function encrypt(str, n){
  if(typeof str !== "string" || !str.length){return str}
  // to encrypt loop through the string and split the odd and even chars, then order all the odds first followed by all the evens until n is 0
  while(n-- > 0){
    str = encryptLoop(str)
  }
  return str
  function encryptLoop(str){
    let evenStr = ''
    let oddStr = ''
    for(let i = 0; i < str.length; i++){
      i % 2 ? oddStr += str[i] : evenStr += str[i]
    }
    return oddStr + evenStr
  }
}

function decrypt(encryptStr, n){
  if(typeof encryptStr !== "string" || !encryptStr.length){return encryptStr}
  // to decrypt split the string into 2 parts and sort them adding the first element in the 2nd half, then the first element in the 1st half, and go into the next index and repeat
  while(n-- > 0){
    encryptStr = decryptLoop(encryptStr)
  }
  return encryptStr
  function decryptLoop(encryptStr){
    const half = Math.floor(encryptStr.length / 2)
    const evenChar = encryptStr.slice(half)
    const oddChar = encryptStr.slice(0, half)
    let decryptStr = ''
    count++
    for(let i = 0; i < evenChar.length; i++){
      decryptStr += evenChar[i] + oddChar.slice(i, i+1)
    }
    return decryptStr
  }
}