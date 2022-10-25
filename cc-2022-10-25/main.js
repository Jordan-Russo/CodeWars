// url: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
function incrementString (string) {
  
  const incrementRegex = /[0-9]*$/;
  // always grabs end of string and will greedily grab numbers at end too i.e. '001' or ''
  return string.replace(incrementRegex, function increment (number) {
    number ||= '0';
    // Logical OR Assignment Operator to catch strings that had no ending number (falsy)
    let parsedNum = parseInt(number);
    let zeros = number.match(/0/g)?.length || 0;
    // determines number of zeros if none then null is Or operated into the value of 0
    if (zeros === number.length || String(parsedNum).slice(0, 1) === "9" && zeros > 0) {
      --zeros;
    }
    return `${'0'.repeat(zeros)}${++parsedNum}`;
  })
  // step 1: create a function that can take a string input of a number with leading zeros and incrememnt it's value by one
  // making adjustments in the number as neccesary
  // prob check for number of zeros
  // if entirely made out of zeros remove one and add a 1
  // step 1.5: if the number when incremented gains another digit then we need to remove an additional zero.
  // stitch numbers together again
  // step 2 put this function in a replace regex which creates capture groups for alphanumericals that end with numericals.
}