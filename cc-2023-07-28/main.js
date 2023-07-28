// url: https://www.codewars.com/kata/58381907f8ac48ae070000de
// Given an array of objects that represent people
// Return a boolean indicating whether the most common language property is not greater than 2 times more common than the least common one
// Example:
  // var list1 = [
  //   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  //   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  //   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  //   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  //   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  //   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  // ];
  // isLanguageDiverse(list1) // returns false 3 Javascript : 1 Python 3:1 ratio is greater than 2 times ratio allowed.
// Make a datastructure to hold the languages and their quantity
// loop through people
  // if they have a language that's not in the datastructure add it (initialized as 0)
  // increment the number of people who use that language
// Find the ratio of the most common language to least common language
// if greater than 2 return false
// otherwise return true
function isLanguageDiverse(list) {
  const languages = {}
  for(const {language} of list){
    languages[language] ??= 0
    languages[language]++
  }
  const frequency = Object.values(languages)
  const ratio = Math.max(...frequency) / Math.min(...frequency)
  return ratio <= 2
}