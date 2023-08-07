// url: https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5
// Inside Out Strings
// Given a string of words
// Return a string where each word is turned "inside out"
  // inside out being where all the characters before/after the middle letter of a word are reversed in order
// example: 
  // insideOut('man i need a taxi up to ubud') -> 'man i ende a atix up to budu'  
  // insideOut('what time are we climbing up the volcano') -> 'hwta item are we milcgnib up the lovcona'   
  // insideOut('take me to semynak') -> 'atek me to mesykan'   
// given a string
// initialize an array that has each word as an element
// for each word
  // map it inside out
    // reverse left and right half
      // if it has a middle character include it when you construct the word
    // map it as "reverseLeft" + "middle if it has one" + "reverseRight"
// rejoin it to a string
// return the string
function insideOut(string){
  let arr = string.split(' ')
  const insideOutArr = arr.map((word) => {
    const isOddLength = word.length % 2 ? true : ''
    const left = reverseWord(word.slice(0, word.length / 2))
    const right = reverseWord(word.slice(word.length - Math.floor(word.length / 2)))
    return `${left}${isOddLength && word[Math.floor(word.length / 2)]}${right}`
  })
  return insideOutArr.join(' ')
  
  function reverseWord(word){
    let revStr = ''
    for(let i = word.length - 1; i >= 0; i--){
      revStr += word[i]
    }
    return revStr
  }
}