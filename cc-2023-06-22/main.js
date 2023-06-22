// url: https://www.codewars.com/kata/58223370aef9fc03fd000071
// dashatize it
// given a number
  // return the number as a string with dashes before and after odd digits, but do not start/end the string with dashes
  // if number is negative remove the negative
  // if number isn't an integer, return "NaN"
// examples:
  // dashatize(274) -> "2-7-4"
  // dashatize(5311) -> "5-3-1-1"
  // dashatize(86320) -> "86-3-20"
  // dashatize(974302) -> "9-7-4-3-02"
  // dashatize(NaN) -> "NaN"
  // dashatize(0) -> "0"
  // dashatize(-1) -> "1"
  // dashatize(-28369) -> "28-3-6-9"
// steps:
// if number isn't an integer, return it as "NaN"
// if negative reassign number to be absolute value
// turn number into a string
// split at odd numbers
  // if the number is at the beginning of string don't add preceeding dash
  // if the number is at the end of string don't add ending dash
// return dashed string number
function dashatize(num) {
  if(!Number.isInteger(num)){return 'NaN'}
  if(num < 0){num *= -1}
  num = String(num)
  let dashedNum = ''
  for(let digit in num){
    let str = num[digit]
    const isOdd = num[digit] % 2 === 1
    if(isOdd){
      const isFirstDigit = Number(digit) === 0
      const isLastDigit = Number(digit) === num.length - 1
      const lastDigitOdd = dashedNum[dashedNum.length - 1] === '-'
      str = `${isFirstDigit || lastDigitOdd ? '' : '-'}${str}${isLastDigit ? '' : '-'}`
    }
    dashedNum += str
  }
  return dashedNum
}