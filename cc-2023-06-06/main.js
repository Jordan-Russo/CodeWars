// url: https://www.codewars.com/kata/5966eeb31b229e44eb00007a
// V A P O R C O D E
// Given a string
// return it as a V  A  P  O  R  S  T  R  I  N  G
  // ignore spaces in the original string, with 2 spaces '  ' between each character, and each character is UPPER-case
// examples:
  // "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
  // "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
// function /w string paramter
  // filters/ignores spaces in the string
  // produces a new string / modifies old string in vaporwave format
    // either split characters, map them as UpperCase, then join them with a space-delimiter
    // or... concatenate non-space characters into the new string
  // returns new/modified string
function vaporcode(string) {
  string = string.trim()
  let vapor = string[0]
  for(let i = 1; i < string.length; i++){
    if(string[i] === ' '){continue}
    vapor += '  ' + string[i]
  }
  vapor = vapor.toUpperCase()
  return vapor
}