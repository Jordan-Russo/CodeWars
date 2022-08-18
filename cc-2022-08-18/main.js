// url: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
const multiplicationTable = function(size) {
  let table = [];
  for (let i = 1; i <= size; ++i) {
    let indexArray = Array.from({length: size}, (_, index) => (index + 1) * i);
    table.push(indexArray);
  }
  return table;
}