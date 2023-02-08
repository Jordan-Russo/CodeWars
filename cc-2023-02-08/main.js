// url: https://www.codewars.com/kata/57a37f3cbb99449513000cd8
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
  return Number([...s].filter(char => char === "0" || parseInt(char)).join(''));
}
// spaces were put inbetween numbers which caused parsing issues
// we want to filter anything that isn't a string number