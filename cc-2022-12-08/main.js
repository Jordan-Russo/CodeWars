// url: https://www.codewars.com/kata/517abf86da9663f1d2000003
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
function toCamelCase(str){
  const kebabRegex = /-|_/g;
  const strArr = str.split(kebabRegex);
  const beginning = strArr.slice(0, 1);
  const toCamelCase = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
  const end = strArr.slice(1).map(s => toCamelCase(s)).join('')
  return `${beginning}${end}`;
}