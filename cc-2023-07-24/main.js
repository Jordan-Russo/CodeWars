// url: https://www.codewars.com/kata/58291fea7ff3f640980000f9
// Will all continents be represented
// Given an array of objects that contain properties, which include contintent
// Return whether or not there is at least one person in all 5 continents ('Africa', 'Americas', 'Asia', 'Europe', 'Oceania')
  // otherwise return false
// Example:
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// allContinents(list1) // returns true
// Make an array that has all the continents
// loop through the array list 
  // if we have a person from a continents in the array (remove it from the array)
  // if the continents array is empty return true
// if the continent array still has continents that people aren't from return false
function allContinents(list) {
  const continents = new Set()
  for(const {continent} of list){
    continents.add(continent)
    if(continents.size === 5){return true}
  }
  return false
}