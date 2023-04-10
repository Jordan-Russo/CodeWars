// url: https://www.codewars.com/kata/550554fd08b86f84fe000a58
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1,array2){
  const inArray2 = (substr) => array2.some(element => element.includes(substr))
  let filteredArray1 = array1.filter(inArray2)
  return filteredArray1.sort()
}
// for more stringent tests, we can use a custom sort or .sort((a,b) => a.localeCompare(b)) at the cost of performance
// we could also try using a set data structure for more performance iterating


// Given two arrays of strings a1 and a2
// return an array that contains only the elements from a1 that can be found as a substring of any of the elements in a2 in alphabetical order.
// examples: 

// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// return a filtered version of a1 in which the elements in a1 are included as part of a word in a2
// iterate every a1 word with an a2 word
// once you find a match continue to the next word
// Once you have the filtered array sort it "lexicographically" which is just default sorting.