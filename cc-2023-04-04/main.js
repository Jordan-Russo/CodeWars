// url: https://www.codewars.com/kata/58712dfa5c538b6fc7000569
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// b rr b rr b rr b rr b

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
  return Math.max(n-1, 0) * 2
}
// we have a system where two red beads in a row are between two blue beads in the following configuration:
// brrbrrbrrbrrbrrb; where b is a blue bead and red beads are r.
// given the number of blue beads, we want to calculate the number of red beads between them
// given only one blue bead, we would return 0, but with two we would have 2, for 3 blue beads we would have 4, and so on.
// we will assume only whole numbers blue beads can be provided.
// we can model this with an equation:
// where n equals blue beads and we want the red beads
// return Math.max(n-1, 0) * 2