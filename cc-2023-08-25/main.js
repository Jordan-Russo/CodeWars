// Given both an array and a function
// return the first value in the array that isn't returned as false by the function
console.log(arrayFilter([1,2,3,4,5], v => v > 3), 4)
console.log(arrayFilter([1,2], v => v < 5), 1)
console.log(arrayFilter([1,2,3,4,5,6,7], v => v === 6), 6)
console.log(arrayFilter([1,2,3,4,5], v => v === 6), undefined)

// find and return first value that the function returns as truthy
// if no such value exists, return undefined.
function arrayFilter(arr, func){
  return arr.find(func)
}

function arrayFilter(arr, func){
  return arr.filter(func)?.[0]
}