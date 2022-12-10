// url: https://www.codewars.com/kata/520b9d2ad5c005041100000f
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str){
  const piggy = str => str.slice(1) + str.slice(0, 1) + 'ay';
  return str.split(' ').map(part => /[a-z]/i.test(part) ? piggy(part) : part).join(' ');
}