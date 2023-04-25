url: https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

// given n and m, non-negative integer dimensions of a bar of chocolate
// Edge case: return 0
// determine how many breaks of the chocolate you need to seperate all of the chocolate into 1 x 1 squares
// function breakChocolate(1,1) === 0
// function breakChocolate(1,2) === 1
// function breakChocolate(1,3) === 2
// function breakChocolate(5,5) === 24
// function breakChocolate(3,2) === 5

// make function
  // return product of n and m but remove one break (since 1 x 1 piece needs 0 break)
  // if there is no chocolate, one or both dimensions are 0, return 0

const breakChocolate = (n, m) => Math.max(n * m - 1, 0)