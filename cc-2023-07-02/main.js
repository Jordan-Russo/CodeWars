// url: https://www.codewars.com/kata/52945ce49bb38560fe0001d9
// pascal triangle #2
// Given a depth
// Return a pascal triangle of that depth as a nested array
// example:
  // pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
// loop while incrementing the depth of pascal we add until it's the same depth
  // create the next layer by taking the previous layer, and mapping each element as the sum of itself and ahead element
    // (if undefined then 0)
  // push the next layer after prepending it with 1
// return the pascal arr
function pascal(depth) {
  const pascalArr = [[1]]
  for(let i = 1; i < depth; i++){
    let layer = pascalArr[i - 1]
    pascalArr.push([1, ...layer.map((n, i, a)=> n + (a[i + 1] || 0))])
  // push another term into the array of the sum of each of the first two numbers
  // push the new array into the pascal arr
  }
  return pascalArr
}