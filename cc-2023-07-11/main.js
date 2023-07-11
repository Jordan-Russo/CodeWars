// Given list of people (array of objects)
// Return an array of all people who have the oldest age (can be multiple)
// example:
  // var list1 = [
  //   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  //   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  //   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  //   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  // ];
  // returns [
  //   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  //   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  // ]
// loop through the people in the list
  // find max age
// filter people who have that max age
function findSenior([...list]) {
  const maxAge = list.sort((a,b) => a.age - b.age).at(-1).age
  return list.filter(({age}) => age === maxAge)
}
// Solved using 2 loops, but can also be done with just one.
// i.e. loop through the values in array starting with the first one already in the array
// if the next value has a lower age skip it, 
// if it has the same age, add it with the first one, 
// if it's older, clear all people in array then add new person
// after looping return nested arr.