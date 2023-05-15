// url: https://www.codewars.com/kata/525c65e51bf619685c000059
// Pete, the baker

// Given a recipe object that has the required ingredients and their quantity, ingredient: amount
// also given an object that contains what's available, (contains extra stuff or missing stuff)
// Return the number of portions we can make of the recipe using what we have available.

// Examples:
  // must return 2
  cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
  // must return 0
  cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

// Function:
// initialize a variable that holds the least amount of portions 'bottleneck' we can make from our ingredients (will change as we go through ingredients)
// Loop through the recipe item
  // if the item isn't available or the recipe requires for more than we have
    // return 0
  // set bottle neck to the minimum between itself and available / recipe of the values
// return bottleneck
function cakes(recipe, available) {
  let bottleneck = Infinity
  for(let item in recipe){
    if(!available[item] || available[item] < recipe[item]){
      return 0
    }
    bottleneck = Math.min(Math.floor(available[item] / recipe[item]), bottleneck)
  }
  return bottleneck
}