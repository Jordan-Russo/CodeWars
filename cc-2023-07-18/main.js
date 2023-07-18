// url: https://www.codewars.com/kata/52998bf8caa22d98b800003a
// Manhattan Distance
// Given two arrays that define coordinates
// Return the amount of blocks you would have to walk, to get from point A to point B
  // Blocks can only be walked through in a horizontal or vertical manner (you can't go through a block)
// examples:
  // * Input [1, 1], [1, 1] => Output 0
  // * Input [5, 4], [3, 2] => Output 4
  // * Input [1, 1], [0, 3] => Output 3
// Take the absolute values of the vertical coordinates and the horizontal coordinates
// sum them
// return them
function manhattanDistance([xA, yA], [xB, yB]){
  const [horizontal, vertical] = [Math.abs(xA - xB), Math.abs(yA - yB)]
  const distance = vertical + horizontal
  return distance
}