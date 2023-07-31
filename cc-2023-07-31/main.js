// url: https://www.codewars.com/kata/53fc954904a45eda6b00097f
// Custom Array filters
// Create a set of specialized filtering methods for arrays that only show integers that meet the right condition.
// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]

// For each function:
// First apply conditional check for an integer then apply secondary conditionals based on what type of filter is wanted
// Make sure to return the filtered array

Array.prototype.even = function(){
  return this.filter(n => Number.isInteger(n) && n % 2 === 0)
}

Array.prototype.odd = function(){
  return this.filter(n => Number.isInteger(n) && n % 2)
}

Array.prototype.under = function(x){
  return this.filter(n => Number.isInteger(n) && n < x)
}

Array.prototype.over = function(x){
  return this.filter(n => Number.isInteger(n) && n > x)
}

Array.prototype.inRange = function(min,max){
  return this.filter(n => Number.isInteger(n) && n >= min && n <= max)
}