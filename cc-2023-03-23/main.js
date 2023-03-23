// url: https://www.codewars.com/kata/5763bb0af716cad8fb000580
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.
function countSquares(cuts){
  return (cuts + 1) ** 3 - Math.max(cuts - 1, 0) ** 3
}
// malignant no-paint cube grows inside of the painted cube after 1 x-y-z cut
// find the difference in volume