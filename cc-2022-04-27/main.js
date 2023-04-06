// url: https://www.codewars.com/kata/5bb0c58f484fcd170700063d
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
let pillars = (numPill, dist, width) => {
  return (numPill > 1) ? width * (numPill - 2) + (numPill - 1) * (dist * 100)
  : 0;
}
// dist is in meters and width is in centimeters and we're solving for cm so we will multiply 
// distance in meters by 100 to convert distance to cm