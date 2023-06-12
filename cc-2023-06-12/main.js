// Given 2 arrays of the same length
  // correct answers array
  // student answers array
// Return the score for the student answers, +4 score for each correct answer, -1 for each incorrect answer, 0 for a blank answer
// Examples:
  // checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
  // checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
  // checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
  // checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
// loop through both the student answers and the answer sheet
  // if the student answers '', add 0 to score
  // if student answer matches answer key answer, add 4
    // if not REMOVE 1
// return final score of the student (if lower than 0 return 0)
function checkExam(array1, array2) {
  let score = 0
  for (let i = 0; i < array1.length; i++){
    score += scoreQuestion(array1[i], array2[i])
  }
  function scoreQuestion(answer, guess){
    if(!guess){return 0}
    if(guess === answer){return 4}
    if(guess !== answer){return -1}
  }
  return Math.max(score, 0)
}