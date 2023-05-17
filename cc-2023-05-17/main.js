// url: https://www.codewars.com/kata/585db3e8eec141ce9a00008f
// Reverse Vowels In a String

// Given a string
// Return a new string that has it's vowels reversed

// Examples: 
  // 'Hello!' -> 'Holle!'
  // "Tomatoes" => "Temotaos"
  // "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

// Function:
// initalize arrStr as an array of the str
// initialize vowelPositions as the indexes of all the vowels in the arrStr
// loop halfway through the vowelPositions
  // swap arrStr[i] with arrStr[vowelPositions.length - 1 - i]
// return arrStr.join('')
  

function reverseVowels(str) {
  const arrStr = [...str];
  const vowelPositions = arrStr.reduce((arr, char, i) => {
    if('aeiou'.includes(char.toLowerCase())){arr.push(i)}
    // if vowel, push index into arr
    return arr
  }, []);
  function swapArrValues(arr, a, b){
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
  for(let i = 0; i < vowelPositions.length / 2; i++){
    const index = vowelPositions[i]
    const reverseIndex = vowelPositions[vowelPositions.length - 1 - i];
    swapArrValues(arrStr, index, reverseIndex)
  }
  return arrStr.join('')
}

// Regex Approach:
function reverseVowels(str){
  let vowelArr = [...str].filter(char => /[aeiou]/i.test(char))
  // filters characters of the string as elements of an array if they're a vowel (case-insensitive)
  return str.replace(/[aeiou]/gi, () => vowelArr.pop());
};
// Lesson learned:
  // Don't assign a variable the value of a regex that has a global flag due to lastIndex property state changes.