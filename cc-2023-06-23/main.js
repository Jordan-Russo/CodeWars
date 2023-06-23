// url: https://www.codewars.com/kata/56a32dd6e4f4748cc3000006
// Rainfall
// Given a string that contains rainfall amount in an organized way
// Extract the data so that it can then be used to calculate mean and variance
// Given the string first split to get only the string of the city by the '\n'
  // then get only the temperatures
  // make sure each temperature is a number
// Then use mean function on the array to get average and return it
// Then use the mean on the variance calculation to get variance
  // to calculate variance
  // Summation of the squared difference between mean and element in array, then divide by its length
  function getData(town, strng){
    if(!strng.includes(town)){return -1}
    let townStr = strng.split('\n').filter(place => place.includes(town))[0]
    let townMonths = townStr.split(`${town}:`)[1]
    let townArr = townMonths.split(',').map(month => Number(month.split(' ')[1]))
    return townArr
  }
  function mean(town, strng) {
      const townArr = getData(town, strng)
      const sum = townArr.reduce((sum, term) => sum + term, 0)
      const avg = sum / townArr.length
      return avg
  }
  function variance(town, strng) {
      const townArr = getData(town, strng)
      const avg = mean(town, strng)
      const sum = townArr.reduce((acc, c) => acc + (avg - c)**2 ,0)
      let populationVarience = sum / townArr.length
      return populationVarience
  }
  // FEEDBACK:
    // This code would be a GREAT CANDIDATE for being written using OOP