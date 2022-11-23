// url: https://www.codewars.com/kata/5899642f6e1b25935d000161
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
function mergeArrays(arr1, arr2) {
  const ascendingCheck = (arr) => {
    if (arr[0] > arr[arr.length -1]) {arr.reverse()};
  }
  ascendingCheck(arr1);
  ascendingCheck(arr2);
  let n1 = 0, n2 = 0;
  let arr3 = new Set();
  while (n1 < arr1.length && n2 < arr2.length) {
    if (arr1[n1] <= arr2[n2]){
      arr3.add(arr1[n1++]);
    } else {
      arr3.add(arr2[n2++]);
    }
  }
  while (n1 < arr1.length){
      arr3.add(arr1[n1++]); 
  }
  while (n2 < arr2.length){
      arr3.add(arr2[n2++]);
  }
  return [...arr3];
}