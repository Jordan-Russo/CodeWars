// url: https://www.codewars.com/kata/584c7b1e2cb5e1a727000047
// Hello World w/o strings

// define a function that is capable of producing 'Hello, World!' without the usage of any quotes or ticks.

// Use the String.fromCharCode(...)
// first turn the string into its charcodes /w String.charCodeAt(i)
// [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
// helloWorld() // 'Hello, World!'
const helloWorld = _ => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)