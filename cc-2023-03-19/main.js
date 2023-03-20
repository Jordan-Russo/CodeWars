// url: https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258
// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!

// How many kookaburras are there?

// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3

const kookaCounter = laugh => {
  let uniqueKooka = ''
  for(let i = 0; i < laugh.length; i++){
    if(!uniqueKooka && laugh[i].toLowerCase() === 'h'){
      uniqueKooka += laugh[i]
    }
    if(laugh[i].toLowerCase() === 'h' && laugh[i] !== uniqueKooka.at(-1)){
      uniqueKooka += laugh[i]
    }
  }
  return uniqueKooka.length
}

// this one is a bit of a thinker
// make a counter at zero
// once we hold a value (h or H) we start our counter at 1 now
// once we hold a value (if we find the other value h -> H or H -> h)
// we would swap the value that gets held and increment
// once at the end of the string we would return our counter
// or just add to a string and measure length at end since string holds more info then number