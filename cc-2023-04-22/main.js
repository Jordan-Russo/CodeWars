url: https://www.codewars.com/kata/63ebadc7879f2500315fa07e

// given an array of numbers that are positive, integers, greater than one (WHOLE NUMBERS) that represent a cells growing population.
// Array will never be empty

// return the numbers array such that each of elements is kept the same except making sure that the population does not decrease at any point, since this is the same population over time and change the array to do so.
// Do NOT mutate the array

// cleanedCount([10,11,12]) === [10,11,12]
// cleanedCount([3,2,1,5]) === [3,3,3,5]
// cleanedCount([2,2,4,5,3,3,6,1]) === [2,2,4,5,5,5,6,6]
// cleanedCount([2,1,2]) === [2,2,2]
// cleanedCount([3,3,3,6,4,4,5]) === [3,3,3,6,6,6,6]



// make a function with a parameter for array
// Make a copy of the parameter population array
// loop through the array starting with the 2nd element
  // if the previous element is greater than the current element, set the current element equal to the previous one
// return the modified data
function cleanedCounts(populationData){
  const modifiedData = [...populationData]
  for(let i = 1; i < modifiedData.length; i++){
    if(modifiedData[i] < modifiedData[i-1]){
      modifiedData[i] = modifiedData[i-1]
    }
  }
  return modifiedData
}