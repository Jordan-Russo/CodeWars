// Given a string of text, will always be a string, may be an empty string, no character limitations.
// Return the count of vowels (both upper and lower case) that are found within the text.
  // vowels include 'a', 'e','i', 'o', 'u'
  // vowels DO NOT INCLUDE 'y'
  function vowelsCount(text){
    // loop through the text, return the number of characters that are vowels
    // vowels mean that they're equal to 'a', 'e', 'i', 'o', and 'u'. CASE INSENSITIVE
    let count = 0
    const vowels = 'aeiou'
    for(let i = 0; i < text.length; i++){
      if('aeiou'.includes(text[i].toLowerCase())){
        count++
      }
    }
    return count
  }
  
  // const vowelsCount = text => [...text].filter(char => 'aeiou'.includes(char.toLowerCase())).length
  
  function vowelsCount(text){
    const vowels = new Set(['a','e','i','o','u'])
    let count = 0
    for(const char of text){
      if(vowels.has(char.toLowerCase())){count++}
    }
    return count
  }
  
  console.log(vowelsCount('duck'), 1)
  console.log(vowelsCount('hello...   HAAA!'), 5)
  console.log(vowelsCount('racoon w/ RABIES'), 6)
  console.log(vowelsCount(''), 0)
  console.log(vowelsCount('FLY'), 0)