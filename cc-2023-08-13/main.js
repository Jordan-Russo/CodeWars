// Given a string, find the most recurring character. (argument will ALWAYS be a string). 
// ONLY ONE Character will ALWAYS be the most frequent

// Given a string of text, find and return the most recurring character
// argument is always going to be a string. If there are no characters, return an empty string
// one character will always have the most frequency (so no leading ties).
// Characters are case-sensitive.
console.log(maxRecurringChar('captain'), 'a')
console.log(maxRecurringChar('books'), 'o')
console.log(maxRecurringChar('I'), 'I')
console.log(maxRecurringChar('Iiii'), 'i')

function maxRecurringChar(str){
  const characterList = {}
  // initialize a datastructure to hold onto elements and their frequency
  const maxRecurring = {value: '', count: 0}
  // initialize a maxRecurring variable with a value of {value: '', count: 0}
  for(const char of str){
  // loop through characters in string
    characterList[char] ??= 0
    // initialize every character into a data structure
    characterList[char]++
    // keep count by incrementing the value of value
    if(characterList[char] > maxRecurring.count){
      maxRecurring.value = char
      maxRecurring.count++
    }
    // if count is greater than maxRecurring's reassign maxRecurring value and count
  }
  return maxRecurring.value
  // return the value in the maxRecurring object.
}

// this time using MAP
function maxRecurringChar(str){
  const characterList = new Map()
  // initialize a datastructure to hold onto elements and their frequency
  const maxRecurring = {value: '', count: 0}
  // initialize a maxRecurring variable with a value of {value: '', count: 0}
  for(const char of str){
  // loop through characters in string
    characterList.set(char, (characterList.get(char) ?? 0) + 1)
    // initialize every character into a data structure
    // keep count by incrementing the value of value
    if(characterList.get(char) > maxRecurring.count){
      maxRecurring.value = char
      maxRecurring.count++
    }
    // if count is greater than maxRecurring's reassign maxRecurring value and count
  }
  return maxRecurring.value
  // return the value in the maxRecurring object.
}