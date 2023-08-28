// Given a quantity of time in seconds
// return it in a human friendly manner.
// time passed into the function will be a non-negative integer.
  // if 0 return 'now'
  // otherwise return a combination of year, day, hour, minute, and seconds when needed.
// Examples:
  console.log(formatDuration(1) === "1 second")
  console.log(formatDuration(62) === "1 minute and 2 seconds")
  console.log(formatDuration(120) === "2 minutes")
  console.log(formatDuration(3600) === "1 hour")
  console.log(formatDuration(3662) === "1 hour, 1 minute and 2 seconds")

function formatDuration (seconds) {
  const times = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }
  
  if(seconds === 0){return 'now'}
  // quick check for no time.
  
  // greedy algorithm
  
  // create an object that stores the following keys and amount of seconds they take as values in order:
    // year, day, hour, minute, second
  
  // initialize a duration array as an empty one.
  const duration = []
  // initialize a quantity count of how many time units (starts at 0)
  let count;
  Object.entries(times).forEach(([unit, length]) => {
    count = 0;
    while(seconds - length >= 0){
      seconds -= length
      count++
    }
    if(count > 0){
      let timeUnit = `${count} ${unit}`;
      if(count > 1){timeUnit += 's'}
      duration.push(timeUnit)
    }
  })
  // Loop through each of the keys of the time object
    // if the difference of time is greater than or equal to 0 increment number
    // if not then take the quantity count
      // if 0 then loop through the next time unit
      // if greater than 0
        // push <quantity> <time unit> as a string into an duration array
          // if the number was greater than 1, add an 's' to the end of the time unit ('3 second' -> '3 seconds')
  let lastComponent = duration.pop()
  if(duration.length > 0){
    lastComponent = ' and ' + lastComponent
  }
  // adds ' and ' if there are multiple time units.
  const timeDurationString = duration.join(', ') + lastComponent
  return timeDurationString
  // ['1 hour, 1 minute, 2 seconds'] -> '1 hour, 1 minute and 2 seconds'
  // if length is greater than 1
    // pop last value
      // append ' and ' to it's value
  // join all elements in the array with ', '
  // concatenate the formatted last value if it doesn't exist just use empty string.
  // return the final string.
}
