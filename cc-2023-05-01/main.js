url: https://www.codewars.com/kata/57f8ee485cae443c4d000127

// spacify

// Given a string of characters

// Return a string where there is a space between every character

// examples:
// 'hello world','h e l l o   w o r l d'
// '12345','1 2 3 4 5'

// Create variable spaceStr = str[0]
// loop through the string (starting at index-1)
  // add ' ' + str[i] to spaceStr
// return spaceStr

const spacify = str => {
  let spaceStr = str[0]
  for (let i = 1; i < str.length; i++){
    spaceStr += ` ${str[i]}`
  }
  return spaceStr
}


// can also just split chars and join them
function spacify(str){
  return str.split('').join(' ');
}