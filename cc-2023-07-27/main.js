// Given an array of objects with the property of age
// Return whether or not the ages of people include those in every 10yr age bracket from teenager(10s) to cenenarian(100s)
// Example:
  // var list1 = [
    // { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    // { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    // { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    // { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    // { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    // { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    // { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    // { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    // { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    // { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  // ];
  // isAgeDiverse(list1) // true
// Loop through each person in the list
  // Determine the decade of each(how many 10s of yrs lived rounded down)
    // if the decades of age is 0, ignore it (aka age 0-9)
    // if the decades of age is 10+, make it just 10
  // Record the unique decades of age if it has one (isn't 0)
  // if the size of the unique values reaches 10, return true
// return false
function isAgeDiverse(list) {
  const groups = new Set()
  for(const {age} of list){
    const decades = Math.min(Math.trunc(age/10), 10)
    if(decades){groups.add(decades)}
    // excludes kids (age 0-9)
    if(groups.size === 10){return true}
  }
  return false
}