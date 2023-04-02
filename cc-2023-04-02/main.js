// url: https://www.codewars.com/kata/55ccdf1512938ce3ac000056
// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

function isLockNessMonster(s) {
  return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
}
// we are given a string as the parameter because we are being spoken to by someone
// we return a boolean in the end, which represents whether or not they are the monster 
// to be a monster the response (must include 'tree fiddy', '3.50', or 'three fifty')
// "Your girlscout cookies are ready to ship. Your total comes to tree fiddy" -> true
// "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance." -> false