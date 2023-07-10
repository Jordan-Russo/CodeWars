// url: https://www.codewars.com/kata/5b6db1acb118141f6b000060
// Let's recycle
// Given an array of objects
// sort and return them by name in a nested array of arrays in the following order:
  // paper, glass, organic, and plastic
// Example:
  // input = [
  //   {"type": "rotten apples", "material": "organic"},
  //   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  //   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  //   {"type": "amazon box", "material": "paper"},
  //   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  // ]

  // output = [
  //   ["wine bottle", "amazon box", "beer bottle"],
  //   ["wine bottle", "beer bottle"],
  //   ["rotten apples", "out of date yogurt"],
  //   ["out of date yogurt"]
  // ]
// Create a datastructure to hold the an array of types of food items in the following order
// paper, glass, organic, and plastic
// then loop through the food items
// if the food item contains the material property matching one of those names, or a secondMaterial matching those names
  // then add the name of the type to the array
// Return a nested array for each of the type arrays in the datastructure.
function recycle(array) {
  const trashbin = {
    paper: [],
    glass: [],
    organic: [],
    plastic: []
  }
  for(const {type, material, secondMaterial} of array){
    if(trashbin[material]){trashbin[material].push(type)}
    if(trashbin[secondMaterial]){trashbin[secondMaterial].push(type)}
  }
  return Object.values(trashbin)
}