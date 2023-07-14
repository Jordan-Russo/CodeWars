// url: https://www.codewars.com/kata/51e704f2d8dbace389000279
// Arrays Similar
// Given two arrays
// Return whether both contain matching elements of the same amounts (regardless of order within the array)
// example:
  // var arr1 = [1, 2, 2, 3, 4],
  //     arr2 = [2, 1, 2, 4, 3],
  //     arr3 = [1, 2, 3, 4],
  //     arr4 = [1, 2, 3, "4"]
  // arraysSimilar(arr1, arr2); // Should equal true
  // arraysSimilar(arr2, arr3); // Should equal false
  // arraysSimilar(arr3, arr4); // Should equal false
// function that intakes two arrays while making sure not to mutate them
  // if arrays don't have the same amount of elements return false
  // sort both arrays
  // if the sorted arrays don't have the same value on each index position, return false
// if all sorted array values match return true
function arraysSimilar([...arr1], [...arr2]) {
  if(arr1.length !== arr2.length){return false}
  arr1.sort()
  arr2.sort()
  return arr1.every((e,i) => e === arr2[i])
}