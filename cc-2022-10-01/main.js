// url: https://www.codewars.com/kata/5772da22b89313a4d50012f7
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet (name = guest, owner) {
  const title = name === owner ? 'boss' : 'guest';
  return `Hello ${title}`;
}