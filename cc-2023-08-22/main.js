// Given two or more arrays
// Return a function that returns an array into one without any duplicate elements.
// order is first occuring elements starting with the first array then second.

console.log(mergeUniques([1,2], [2,3]), [1,2,3])
console.log(mergeUniques(['apple', 'banana', 'apple', 'cherry'], ['apple', 'cherry', 'lemon']), ['apple', 'banana', 'cherry', 'lemon'])
console.log(mergeUniques([4,5,6], [1,2,3,4,5,6], [0, 10, 13]), [4,5,6,1,2,3,0,10,13])

function mergeUniques(...arrays){
  return [...new Set(arrays.flat())]
}

// this is still O(n) because we have one task for each element 
function mergeUniques(...arrays) {
  const uniqueMap = {};
  const result = [];
 
  for (const arr of arrays) {
    for (const value of arr) {
      if (!uniqueMap[value]) {
        uniqueMap[value] = true;
        result.push(value);
      }
    }
  }
 
  return result;
}