// Given a sorted array (ascending sort), and a number
// Return the index where the number should be put.
// The number will NEVER be equal to one of the elements in the given array
console.log(whereIBelong([], 1), 0)
console.log(whereIBelong([1,2,3], 1.5), 1)
console.log(whereIBelong([1,2,3], 0.5), 0)
console.log(whereIBelong([1,2,3], 4), 3)
console.log(whereIBelong([1,2,3,4,5,6,7,8,9], 8.3), 8)

// O(n) time-complexity
function whereIBelong(arr, newValue){
  // returns index to insert value
  for(let i = 0; i < arr.length; i++){
    if(newValue < arr[i]){return i}
  }
  return arr.length ? arr.length : 0
}

// O(log n) time complexity
function whereIBelong(arr, num){
  if(arr.length === 0){return 0}
  if(num < arr[0]){return 0}
  if(num > arr[arr.length - 1]){return arr.length}
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  while(start < end){
    if(middle - start === 1 && arr[middle] > num && arr[start] < num){return start + 1}
    if(arr[middle] < num){
      start = middle
      middle = Math.ceil((start + end) / 2)
    }else{
      end = middle
      middle = Math.floor((start + end) / 2)
    }
  }
}