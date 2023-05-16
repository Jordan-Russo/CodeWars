// url: https://www.codewars.com/kata/5a58d889880385c2f40000aa
// Automorphic Numbers

// A Number is automorphic if it's square ends in the same digits as the number itself

// Given a positive integer (whole number), if automorphic, return "Automorphic" else return "Not!!"

// Examples:
  // autoMorphic (25) -->> return "Automorphic"
    // 625 ends with 25, therefore we return automorphic
  // autoMorphic(10) -->> return "Not!!"
    // 100 doesn't end with 10, therefore we return Not!!

// automorphic function:
// conditional n**2 to string, ends with n
  // true: return "Automorphic"
  // false: return "Not!!"

function automorphic(n){
  return String(n**2).endsWith(n) ? "Automorphic" : "Not!!"
}