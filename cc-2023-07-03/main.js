// url: https://www.codewars.com/kata/528d9adf0e03778b9e00067e
// Find the Mine!
// Given a nested array (2D-grid) square of N x N elements (one of which a 1 and the rest 0)
// Return the x,y coordinates (first element is 0,0) of the mine(position of the value 1)
// examples
  // mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
  // mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
  // mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
// loop through each array inside of the given nested array
// once the element you loop through has a value of 1
  // get the index of the nested array and the index within that array
  // return that as an array [row, col]
function mineLocation(field){
  for(const row of Object.keys(field)){
    for(const [col, val] of Object.entries(field[row])){
      if(val){return [+row, +col]}
    }
  }
}