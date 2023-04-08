// url: https://www.codewars.com/kata/56484848ba95170a8000004d
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:
// With the above data your function gps(s, x) should return 74

// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.
function gps(s, x) {
  const netDistance = x.map((distance, index) => x[index+1] - x[index] || 0)
  const fastestSection = Math.max(...netDistance, 0)
  const maximumAverageSpeedPerHour = fastestSection * 60 * 60 / s
  return Math.floor(maximumAverageSpeedPerHour)
}
// given an array of distance traveled and a number of seconds between them
// return the maximum average speed per hour;
// create an array that has the difference of each element of its previous element
// find the element in that new array with the highest value
// divide that value by the time between intervals to get speed (aka speed = distance / time)
// return the calculated speed (rounded down to the nearest number)
// if x has 0 or one values return 0
// examples
// x = [0.0, 0.01, 0.36, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75];
// s = 17;
// u = 82;
// testing(gps(s, x), u);
// x = [0.0, 0.2, 0.4, 0.69, 0.92, 1.15, 1.38, 1.61, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36];
// s = 19;
// u = 58;
// testing(gps(s, x), u);
// x = [];
// s = 19;
// u = 0;
// testing(gps(s, x), u);
// x = [0.0];
// s = 19;
// u = 0;
// testing(gps(s, x), u);
