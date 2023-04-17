url: https://www.codewars.com/kata/57b06f90e298a7b53d000a86

// Write a function to calculate the total time for all customers to check out!
// Given an array of positive intergers representing the queue. Each element is a customer, with the value of the element being the amount of time they need to check out.
// Also given whole number, n, number of checkout tills
// We should return the integer time, how long it takes to checkout everyone

// Some examples:

// queueTime([5,3,4], 1) => 5 + 3 + 4 = 12

// queueTime([10,2,3,3], 2) => 10

// queueTime([2,3,10], 2) => 12

// Additional Clarificatons:
// order of the queue doesn't change
// front person always fills an empty spot
// Are we allowed to mutate the array?

function queueTime(customers, n){
  // start with n tills that are empty
  const tillTimes = customers.reduce((tills, customer) => {
    // find the least occupied till and join it
    const fastTill = tills.indexOf(Math.min(...tills))
    tills[fastTill] += customer
    return tills
  }, Array(n).fill(0))
  // return the slowest till
  return Math.max(...tillTimes)
}

// more redundant, less concise approach
function queueTime(customers, n){
  // We can represent tills as an array
  // We first check that all tills be filled
  // then from the two tills, we subtract the smaller of the two values from all, and add that to total time
  // then we add a new element whereever any of the elements are zero
  // repeat until the array has been iterated and the tills are empty
  let tills = customers.slice(0, n)
  // how do I fill the array before I start the other operations
  let totalTime = 0
  for(let i = n - 1; i < customers.length; i++){
    // loop from a filled tilled until there are no more customers on queue
    if(tills.includes(0)){
      // checks for empty till
      const emptyTill = tills.indexOf(0)
      tills[emptyTill] = customers[i]
      // let anyone who can get on an empty till
    }
    // get another customer if possible to fill all tills before proceeding 
    if(tills.includes(0) && i !== customers.length - 1){continue}
    const checkoutTime = Math.min(...tills)
    // determine how long until the next person leaves
    totalTime += checkoutTime
    tills = tills.map(till => till - checkoutTime)
    // and let that time pass for everyone else
  }
  // All customers are now on a till or done
  totalTime += Math.max(...tills, 0)
  // Determine the last person to finish on the till and add that
  return totalTime
}