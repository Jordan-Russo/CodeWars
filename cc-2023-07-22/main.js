// url: https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
// Simple Frequency Sort
// Given an array of numbers
// Return them sorted by decreasing frequency, then by increasing value.
// example: 
  // solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
  // -- We sort by highest frequency to lowest frequency.
  // -- If two elements have same frequency, we sort by increasing value.
// create hash
// in hash store quantity of value
// after hash is complete get the keys and values
// sort then firstly by highest value
  // if values are equal then sort them by the key's lowest value first.
// push the amount of keys equal to the value into the array in that order
// return sorted array
function solve(arr){
  const list = new Map()
  for(const num of arr){
    list.set(num, list.get(num) + 1 || 1)
  }
  const sortedHash = [...list]
    .sort((a,b) => {
      const [key, freq] = [0, 1]
      if(a[freq] < b[freq]){return 1}
      if(a[freq] > b[freq]){return -1}
      if(a[key] < b[key]){return -1}
      if(a[key] > b[key]){return 1}
      return 0
      // sort first by decreasing frequency, then by increasing value
    })
  const sortedArr = sortedHash.reduce((acc, [key, freq]) => {
    acc.push(...new Array(freq).fill(key))
    return acc
  }, [])
  return sortedArr
}