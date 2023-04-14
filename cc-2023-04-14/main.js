// url: https://www.codewars.com/kata/587731fda577b3d1b0001196

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function(){
  return this.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join('')
}

// Important clarification that needs to be made, this class states that we're producing camelCase, but in reality it wants us to actually make PascalCase.
// start with a string with spaces between each word end with a SingleWordConnected in pascal case.
// split the string /w a delimiter of a space
// map each element with the first character in uppercase concatenated with the rest of the characters in lowercase.
// join the elements back together w/o a delimiter and return that value