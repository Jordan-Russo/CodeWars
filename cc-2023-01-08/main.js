// url: https://www.codewars.com/kata/565f5825379664a26b00007c
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth){
  return [2 * (width * height + width * depth + height * depth), (width * height * depth)];
}