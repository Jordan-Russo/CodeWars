// url: https://www.codewars.com/kata/530e15517bc88ac656000716
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){

  let keyStr = "";

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

  const key = 13;

  for (let i = 0; i < message.length; i++) {
  const cipherConversion = (alphabet.indexOf(message[i].toLowerCase()) + key) % alphabet.length;
   
    if (/[A-Z]/.test(message[i])) {
     keyStr += alphabet[cipherConversion].toUpperCase();
   } 
    if (/[a-z]/.test(message[i])){
     keyStr += alphabet[cipherConversion];
   }
    if (!/[a-zA-Z]/.test(message[i])) {
      keyStr += message[i];
    }
    
  }

  return keyStr;

}