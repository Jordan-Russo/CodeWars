// url: https://www.codewars.com/kata/57a6633153ba33189e000074
// Ordered Count of Characters

// Given a str of text

// Return an array, containing elements that have the [key, count] in order of first appearance.

// Examples:
  // orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
  // ["233312"] = [['2', 2], ['3', 3], ['1', 1 ]]]

// Make a hash (obj/map)
// Loop through the str values
  // Initalize and count the characters in the string in the object as they appear.
// Return elements in the hash in the order that they appear.

const orderedCount = text => {
  const charCount = new Map()
  for(let char of text){
    if(!charCount.has(char)){charCount.set(char, 0)}
    charCount.set(char, charCount.get(char) + 1)
  }
  return Array.from(charCount)
}