// Given a string
// Return the string as pigLatin
// pigLatin is done in the following way:
  // if word begins with a vowel
    // return it with a 'way' prefix
  // otherwise
    // return it starting on it's first vowel
    // then concatenate characters before the first vowel
    // then concatenate it with 'ay'
    
console.log(pigLatin('pig'), 'igpay')
console.log(pigLatin('glove'), 'oveglay')
console.log(pigLatin('explain'), 'explainway')

function pigLatin(word){
  const vowels = 'aeiou'
  const vowelIndex = [...word]
    .findIndex(char => vowels.includes(char.toLowerCase()))
  // grab index of first vowel
  if(vowelIndex === 0){return word + 'way'}
  // if index is 0
    // return word + 'way'
  if(vowelIndex !== -1){return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay'}
  // else
    // return word substring starting at vowel
      // + the substring before the vowel + 'ay'
  return word + 'ay'
}