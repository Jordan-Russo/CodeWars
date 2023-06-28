// url: https://www.codewars.com/kata/526233aefd4764272800036f
// matrix addition
// Given 2 square matrices (Array of length N x each element is an array with N elements) 
// 2-D arrays (that contains only integers)
// Return the sum of the 2 arrays.
// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]

// given 2 square arrays (same length of integers inside of each element)
// initialize a new array
// loop through the elements
  // initialize matrix row
  // for each nested element, grab the same position in the other array add them together and push it to the matrix row.
  // push the matrix row into the new array
// return the new array
function matrixAddition(a, b){
  let sumMatrix = []
  for(let row = 0; row < a.length; row++){
    const matrixRow = []
    a[row].forEach((val, i) => {
      const sum = val + b[row][i]
      matrixRow.push(sum)
    })
    sumMatrix.push(matrixRow)
  }
  return sumMatrix
}