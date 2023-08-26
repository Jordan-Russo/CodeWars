// Given an integer
// Return the integer reversed
console.log(reverseInteger(123), 321)
console.log(reverseInteger(-123), -321)
console.log(reverseInteger(-800), -8)
console.log(reverseInteger(10), 1)
console.log(reverseInteger(4321), 1234)

function reverseInteger(integer){
  // turn number into a string
  // reverse the string
  // parse the number from it
  // or just grab the abs of the number, reverse it, then multiply it by it's sign.
  const valueStr = String(Math.abs(integer))
  const unsignedReversedVal = Number([...valueStr].reverse().join(''))
  return Math.sign(integer) * unsignedReversedVal
}

function reverseInteger(int){
  let revNum = 0
  while(int != 0){
    revNum *= 10
    // we multiply our number place by 10
    const digit = int % 10
    revNum += digit
    int -= digit
    // we remove last digit from integer and add it to our reversed num
    int /= 10
    // we divide the integer by 10
  }
  return revNum
}