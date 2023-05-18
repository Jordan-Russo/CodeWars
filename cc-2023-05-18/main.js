// url: https://www.codewars.com/kata/63cbe409959401003e09978b
// set reducer

// Given an array of integers (ranged 0 - 9)
// reduce the array into a count of consecutive numbers in a row that are equal
// repeat this reduce until the array only has one value
// return that value

// Examples:
  // {
  //   input: [0, 4, 6, 8, 8, 8, 5, 5, 7],
  //   output: 2,
  // },
  // {
  //   input: [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2],
  //   output: 3,
  // },
  // {
  //   input: [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0],
  //   output: 13,
  // },
  // {
  //   input: [0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4],
  //   output: 5,
  // },
  // {
  //   input: [9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9],
  //   output: 3,
  // },
  // {
  //   input: [5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7],
  //   output: 3,
  // },
  // {
  //   input: [5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1],
  //   output: 2,
  // },
  // {
  //   input: [7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3],
  //   output: 3,
  // },
  // {
  //   input: [6, 0, 5, 9, 5, 0, 0, 2, 5, 0],
  //   output: 3,
  // }

  function setReducer(input) {
    const inputReduced = []
    let currNum = input[0]
    let count = 1
    for(let i = 1; i < input.length; i++){
      if(currNum !== input[i]){
        inputReduced.push(count)
        count = 0
        currNum = input[i]
      }
      count++
      if( i === input.length - 1){
        inputReduced.push(count)
      }
    }
    if(inputReduced.length === 1){return inputReduced[0]}
    return setReducer(inputReduced)
  }