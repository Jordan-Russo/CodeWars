// url: https://www.codewars.com/kata/5a1cb5406975987dd9000028
// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]
function sortArray(array) {
  const descendingEvens = array.filter(x => !(x % 2)).sort((a,b) => a - b);
  const ascendingOdds = array.filter(x => x % 2).sort((a, b) => b - a);
  return array.map(x => {
    return (x % 2) ? ascendingOdds.pop() : descendingEvens.pop();
  })
}