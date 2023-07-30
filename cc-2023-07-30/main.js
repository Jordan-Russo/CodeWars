// url: https://www.codewars.com/kata/583d972b8bbc0402cf000121
// Ask for missing details
// Given an array of objects that represent people with properties
// Return an array that only contains the objects with a property that has a value of null in the same order of the original list
// make sure each returned object in that array also contains a new property "question" which has the following format:
// 'Hi, could you please provide your <null property name>.'
// Example:
  // var list1 = [
  //   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  //   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  //   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  // ];
  // returns [
  //   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  //   question: 'Hi, could you please provide your firstName.' },
  //   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  //   question: 'Hi, could you please provide your language.' }
  // ]
// Initialize empty array
  // filter array if one of it's key values is null
  // add property to question
// return new array
function askForMissingDetails(list) {
  let missing = []
  for(const person of list){
    let missingProp;
    const properties = Object.keys(person)
    for(const property of properties){
      if(person[property] === null){
        missingProp = property
        break;
      }
    }
    if(missingProp){
      person.question = `Hi, could you please provide your ${missingProp}.`
      missing.push(person)
    }
  }
  return missing
}