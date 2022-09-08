// url: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
var humanYearsCatYearsDogYears = function(humanYears) {
  const youngYears = humanYears > 1 ? 24 : 15;
  const cat = 4;
  const dog = 5;
  const petYears = (pet) => Math.max((pet * (humanYears-2)), 0) + youngYears;
  return [humanYears,petYears(cat),petYears(dog)];
}