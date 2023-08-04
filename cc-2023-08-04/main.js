// url: https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6
// Assemble string
// given array of strings
// return recovered string (/w '*' replaced by actual character or '#')
// examples:
  // assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"]), "Hello, World!");
  // assembleString([".** . .' .'' ! ! .", ". . . .' **' ! * .", "* . .*.* .'' * ! .", ". . .*.' .**** ! .", "**. * .* .*' ! ! ."]), ". . . .' .'' ! ! .");
  // assembleString([". . . .", ". . . .", ". . . .", ". . . .", ". . . ."]), ". . . .");
  // assembleString(["12***6789", "**3456789", "12345**8*", "***456**9", "1*3*5*7*9", "*2*456789"]), "123456789");
  // assembleString(["******", "******", "******", "******"]), "######");
  // assembleString(["*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*", "*#*#*#*#*#*#*#*"]), "###############");
// loop through each character
  // loop through each string at each character
    // if not '*' break loop
  // if '*' is the current value push '#' instead
// return fixed Str.
function assembleString(array){
  let fixedStr = ''
  const wordLength = array[0]?.length ?? 0
  for(let i = 0; i < wordLength; i++){
    let value;
    for(let str of array){
      if(str[i] !== '*'){
        value = str[i]
        break
      }
    }
    fixedStr += value ? value : '#'
  }
  return fixedStr
}