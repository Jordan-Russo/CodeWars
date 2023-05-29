// url: https://www.codewars.com/kata/5a4138acf28b82aa43000117
// Maximum Product

// Given an array of integers
// Return maximum product obtained from multiplying two adjacent numbers in the array.
// Arr will always be bigger than 2 (so if it isn't just return undefined)
// elements can be both negative and positive, regardless return the maximum product.

// Examples:
// adjacentElementsProduct([5, 8]) => 40
// adjacentElementsProduct([1, 2, 3]) => 6
// adjacentElementsProduct([1, 5, 10, 9]) => 90
// adjacentElementsProduct([4, 12, 3, 1, 5]) => 48
// adjacentElementsProduct([5, 1, 2, 3, 1, 4]) => 6

// function that has an array param
  // initialize maxProduct at -Infinity
  // Loop through the array(second element to last element)
    // multiply previous and current element as a product
    // if product is larger replace it as this product
  // return maxProduct

function adjacentElementsProduct(arr) {
  let maxProduct = -Infinity
  for(let i = 1; i < arr.length; i++){
    const prev = arr[i-1]
    const curr = arr[i]
    const prod = prev * curr
    maxProduct = Math.max(prod, maxProduct)
  }
  return maxProduct
}