// url: https://www.codewars.com/kata/582a53ed261c2af9d200018c
// Create usernames
// Given an array of people objects
// Return the same list of people but add a new property called "username" for each
// the username property should contain firstname and first letter of lastname all in lowercase which is then followed by birth year
// Example:
  // var list1 = [
  //   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  //   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  // ];
  // addUsername(list) // returns:
  // [
  //   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
  //     username: 'emilyn1990' },
  //   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
  //     username: 'nore2000' }
  // ]
// loop through the list
  // determine birthyear using age property (currentyear - age) = birthyear
  // determine name of username with firstName + first letter in lastName ALL in LOWER casing
  // initialize username property to the name concatenated by the birthyear
  // set username property for person
// return list
function addUsername(list) {
  list.forEach(({age, firstName, lastName}, i) => {
    const birthYear = new Date().getFullYear() - age
    const name = `${firstName}${lastName.slice(0,1)}`.toLowerCase()
    list[i].username = `${name}${birthYear}`
  })
  return list
}