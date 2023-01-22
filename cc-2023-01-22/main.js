// url: https://www.codewars.com/kata/59c633e7dcc4053512000073
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
function solve(s) {
  let highScore = 0;
  //we store highscore
  let currScore = 0;
  // we store current score
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++){
  // we loop and  add to current score if consonant
//     switch(true){
//       case (!vowels.includes(s[i])):
//         currScore += s[i].charCodeAt(0) - 96;
//       case (vowels.includes(s[i])):
//       case ((i === s.length - 1)):
//         if(currScore > highScore){highScore = currScore};
//         currScore = 0;
//     }
    if(!vowels.includes(s[i])){
      currScore += s[i].charCodeAt(0) - 96;
      // 'a'.charcodeAt(0) = 97;
    } 
    if(vowels.includes(s[i]) || i === s.length - 1){
      if(currScore > highScore){highScore = currScore};
      currScore = 0;
    }
  // we add current score by using charCodeAt([i]) and subtracting ('a'.charCodeAt(0) + 1)
  // if not consonant but currScore is truthy, we update high score if currScore is greater
  }
  return highScore;
};

// lowercase string no spaces
// return highest value of consonant substring

// we loop, we store the score