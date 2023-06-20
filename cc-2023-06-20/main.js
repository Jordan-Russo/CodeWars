// url: https://www.codewars.com/kata/5d23d89906f92a00267bb83d
// Space/shift orders
// Given a string of characters concatenated together that are menu items
// Return a formatted string with each menu item beginning with a capital and a space between them
// Examples:
  // "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza" 
    // -> "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
  // "pizzachickenfriesburgercokemilkshakefriessandwich" 
    // -> "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
// Have a collection of all the menu items
// Take the input
  // initialize finalOrder as an empty string
  // initialize the variable currItem with an empty string
  // Loop through the input
    // add a character from the input to the currItem (if currItem is empty uppercase it first)
    // check if the set has the current item
      // if so, then add the currentItem + ' ' to the finalOrder
      // reassign currItem to an empty string
  // trim the end of the currentOrder to remove the extra space
  // return the items in order
// edit: returning the food must be in quantity and order, using a hash is ideal for this.
  // loop through the string, incrementing items in the hash (with its keys in order of the menu)
  // then go through the keys in order at the end adding the string until
function getOrder(input) {
  const foodMenu = {
'Burger': 0,
'Fries': 0,
'Chicken': 0,
'Pizza': 0,
'Sandwich': 0,
'Onionrings': 0,
'Milkshake': 0,
'Coke': 0
}
  let finalOrder = ''
  let currentOrder = ''
  for (let char of input){
    currentOrder += currentOrder ? char : char.toUpperCase()
    if(currentOrder in foodMenu){
      foodMenu[currentOrder]++
      currentOrder = ''
    }
  }
  for (let food in foodMenu){
    finalOrder += `${food} `.repeat(foodMenu[food])
  }
  return finalOrder.trimEnd()
}