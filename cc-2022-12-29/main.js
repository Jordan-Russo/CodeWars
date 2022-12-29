// url: https://www.codewars.com/kata/5842df8ccbd22792a4000245
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
function expandedForm(num) {
  let expanded = [];
  for (let i = 0; i < num.toString().length; i++){
    if (num.toString()[i] !== "0" && i + 1 !== num.toString().length){
      expanded.push(num.toString()[i] + "0".repeat(num.toString().length-1-i))  
    } else if (num.toString()[i] !== "0") {
      expanded.push(num.toString()[i])
    }
      
  }
  return expanded.join(' + ');
}