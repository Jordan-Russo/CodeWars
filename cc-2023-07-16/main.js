// url: https://www.codewars.com/kata/55cc20eb943f1d8b11000045
// X marks the spot!
// Given a number n
// Return a nested-grid array of n x n dimensions that makes an X on its grid (represented by 1s)
// examples:
  // x(5) === [[1, 0, 0, 0, 1],
  //           [0, 1, 0, 1, 0],
  //           [0, 0, 1, 0, 0],
  //           [0, 1, 0, 1, 0],
  //           [1, 0, 0, 0, 1]];

  // x(6) === [[1, 0, 0, 0, 0, 1],
  //           [0, 1, 0, 0, 1, 0],
  //           [0, 0, 1, 1, 0, 0],
  //           [0, 0, 1, 1, 0, 0],
  //           [0, 1, 0, 0, 1, 0],
  //           [1, 0, 0, 0, 0, 1]];
// function that takes a natural number, n
// initialize grid array
// loop that happens n times
  // initialize array of n.length filled with 0s
  // replace two positions that start off as the first and last term 
    // but through each loop increment in index until they become last and first term instead
  // push array into the grid array
// return grid array
function x(n) {
  const grid = []
  for(let i = 0; i < n; i++){
    const row = new Array(n).fill(0)
    row[i] = 1
    row[n - 1 - i] = 1
    grid.push(row)
  }
  return grid
}
