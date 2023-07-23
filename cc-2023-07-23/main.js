// url: https://www.codewars.com/kata/59fa8e2646d8433ee200003f
// Sorting by bits
// given an array of 32-bit integers
// sort them in ascending order of the number of bits they have
  // and then by ascending order of them numbers themselves if there is a bit length tie
// example:
  // Given the array [7, 6, 15, 8]
  // 7 has 3 on bits (000...0111)
  // 6 has 2 on bits (000...0011)
  // 15 has 4 on bits (000...1111)
  // 8 has 1 on bit (000...1000)
  // [8, 6, 7, 15].
// make sure to mutate array (sort in place)
// make function returing length of bits
// create ascending sort that uses that function as well as a backup ascending sort
// return sortedArray made using the array
function sortByBit(arr) {
  return arr.sort((a,b) => {
    const aBitLength = bitLength(a)
    const bBitLength = bitLength(b)
    if(aBitLength < bBitLength){return -1}
    if(aBitLength > bBitLength){return 1}
    if(a < b){return -1}
    if(a > b){return 1}
    return 0
  })
  function bitLength(int){
    return [...int.toString(2)].filter(digit => digit === '1').length
  }
}