// url: https://www.codewars.com/kata/59f70440bee845599c000085
// Find Cracker
// Given an array that has student name, score, and their grades on their classes
// Return which students are hacking
  // Rules:
    // if the student has 5 or more grades and they're all over 'B', we increase score by 20
    // Hacking is where the rules where score cap is 200 points
    // if score doesn't equal our calculated score push the name of the student into the array and return it.
// examples: 
  // var array = [
  //   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
  //   ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
  //   ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
  //   ,
  //   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
  // ];

  // return ["name1", "name3"];
// Initialize hackedStudentsArr
// Loop through students
  // if reported score doesn't match calculated score push student name onto that array
    // Calculation works by assigning 30 points for A, 20 for B, 10 for C, 5 for D, 0 for anything else.
    // if all 'B' or above and there are 5 or more grades, add another 20
    // if number is over 200, cap it at 200.
// return hackedStudentsArr
function findHack(arr) {
  const hacked = []
  for(const [name, score, grades] of arr){
    if(score !== calcScore(grades)){hacked.push(name)}
  }
  function calcScore(courseGradeArr){
    const letters = {
      'A': 30,
      'B': 20,
      'C': 10,
      'D': 5,
    }
    let baseScore = courseGradeArr.reduce((sum, letter) => sum + (letters[letter] || 0), 0)
    if(courseGradeArr.length >= 5 && courseGradeArr.every(grade => 'AB'.includes(grade))){baseScore += 20}
    baseScore = Math.min(200, baseScore)
    return baseScore
  }
  return hacked
}