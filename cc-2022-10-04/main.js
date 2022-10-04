// url: https://www.codewars.com/kata/59441520102eaa25260000bf
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
function unusualFive() {
  const fiveSquaredSquared = 'ɱ'.charCodeAt(Math.floor(Math.random()));
  const fiveSquared = Math.sqrt(fiveSquaredSquared);
  const five = Math.sqrt(fiveSquared);
  return five;
}