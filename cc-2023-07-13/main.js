// url: https://www.codewars.com/kata/55de9c184bb732a87f000055
// "I need more speed!"
// Given an array
// Return nothing, but reverse an array in place with efficient time complexity
// example:
// input: [1,2,3,4,5]
// output: undefined, but if we look at the array, it's now equal to [5,4,3,2,1]
function reverse(arr) {
  for(let i = 0; i < arr.length / 2; i++){
    let placeholder = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = placeholder
  }
}
// TODAY I LEARNED THAT DESTRUCTURING Reverse Technique [a, b] = [b, a] is far slower than I expected, but does that make it not worth using?