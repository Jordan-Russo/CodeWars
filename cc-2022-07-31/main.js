// url: https://www.codewars.com/kata/56c19316e8b139dff60006da
// Capitalize First Letter of a String
// Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

// Input	Output
// string	String
// hello World	Hello World
// i love codewars	I love codewars
// This sentence is already capitalized	This sentence is already capitalized
// 0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
// JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
String.prototype.capitalize= function() {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let capitalAlpahbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (alphabet.includes(this[0]) ? capitalAlpahbet[alphabet.indexOf(this[0])] + this.slice(1) : this.slice(0))
}