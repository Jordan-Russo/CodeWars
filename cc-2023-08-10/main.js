// url: https://www.codewars.com/kata/57c1f22d8fbb9fd88700009b
// Three sticks
// Given 2 sticks
// Return the length of 3 equal length sticks that are as long as possible.
// Examples:
// (1, 9) -> 3
// (1, 2.5) -> 1
// (1, 1.5) -> .75
// If large stick is 3x or greater than small stick, split big stick into 3.
// If large stick is between 2x-3x greater than small stick, split big stick into 2, then cut to match length of small stick.
// If large stick is less than 2x greater than the small stick, split the big stick into 2, but now cut the small stick into the length of the halfed big stick.
function maxlen(l1, l2) {
  let maxLength = Math.max(l1, l2)
  let minLength = Math.min(l1, l2)
  if(maxLength / minLength >= 3){return maxLength / 3}
  if(maxLength / minLength >= 2){return minLength}
  return maxLength / 2
}