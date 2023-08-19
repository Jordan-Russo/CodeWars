// Given two strings
// Return a boolean if they're anagrams of each other
  // anagrams have the same characters but are rearranged
  // an Anagram will count for itself.
  // all words will be lower-cased.
  // will only be a single word (no special characters)
  
console.log(isAnagram('silent', 'listen'), true)
console.log(isAnagram('banana', 'yogurt'), false)
console.log(isAnagram('apple', 'apple'), true)
console.log(isAnagram('donut', 'nodut'), true)

function isAnagram(str1, str2){
  if(str1.length !== str2.length){return false}
  // if words are not the same length return false
  let arr1 = [...str1].sort()
  let arr2 = [...str2].sort()
  // sort both strings by their characters
  for(let i = 0; i < arr1.length; i++){
  // loop through each character
    if(arr1[i] !== arr2[i]){return false}
    // if not equal return false
  }
  return true
  // return true
}

function isAnagram(str1, str2){
  // if words are not the same length return false
  if(str1.length !== str2.length){return false}
  // initialize hashmap
  const charList = {}
  // loop through the str
  for(const char of str1){
    // add word and count to a hashmap
    charList[char] ??= 0
    charList[char]++
  }
  for(const char of str2){
  // loop through the other str
    if(!charList[char]){return false}
    // if word doesn't exist on the hashmap or if the count is 0, return false
    charList[char]--
    // reduce the count of the hashmap
  }
  // return true
  return true
}