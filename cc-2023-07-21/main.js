// url: https://www.codewars.com/kata/6481c68ffdf80b6147d85248
// Join Two Arrays by Id
// Takes two arrays as arguments, with both having objects that have an id propertys as an integer inside them.
// function should merge arr1 and arr2 baseed on id and return a new array
// Example:
  // const arr1 = [
  //   { id: 1, x: 2, y: 3 },
  //   { id: 2, x: 3, y: 6 },
  // ]
  // const arr2 = [
  //   { id: 2, x: 10, y: 20 },
  //   { id: 3, x: 0, y: 0 },
  // ]

  // console.log(joinArraysById(arr1, arr2))
  // Output: [
  //   { "id": 1, "x": 2, "y": 3 },
  //   { "id": 2, "x": 10, "y": 20 },
  //   { "id": 3, "x": 0, "y": 0 }
  // ]
// some rules for the joining process:
  // length of joinedArray should be equal to length of unique id values from both arrays.
  // if an object has a unique id that is not repeated, it should be included without modification.
  // if two objects share the same id then we need to merge them
  // HOW WE MERGE THEM:
    // properties should be merged into a single object
    // if a key only exists in one object, include that key-value pair in the merged one.
    // if the key exists in both objects, the value from arr2 should be assigned to override the value from arr1.
// the joinedArr should be sorted such that it's ascending based on id key 
// return joinedArr
function joinArraysById(arr1, arr2) {
  const joinedArr = [...arr1]
  for(let i = 0; i < arr2.length; i++){
    let matchIndex = joinedArr.findIndex(({id}) => id === arr2[i].id)
    // finds previous match with same id value
    if(matchIndex !== -1){
      joinedArr[matchIndex] = Object.assign(joinedArr[matchIndex], arr2[i])
    }else{
      joinedArr.push(arr2[i])
    }
    // if we have match, assign the new properties, otherwise just push the new object.
  }
  return joinedArr.sort((a,b) => a.id - b.id)
}