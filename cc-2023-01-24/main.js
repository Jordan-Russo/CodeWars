// url: https://www.codewars.com/kata/583a02740b0a9fdf5900007c
// Just another day in the world of Minecraft, Steve is getting ready to start his next exciting project -- building a railway system!

// But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots.ironingot_icon32

// Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

// Buckets of lava, each lasts 800 seconds*bucketL
// Blaze rod, each lasts 120 secondsblazerod
// Coals, each lasts 80 secondscoal
// Blocks of Wood, each lasts 15 secondslogs
// Sticks, each lasts 1 second*stick
// In Ruby: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a hash of the form {:lava => 2, :blaze_rod => 1, :coal => 1, :wood => 0, :stick => 0} In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} In Python: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a dictionary of the form {"lava": 2, "blaze rod": 1, "coal": 1, "wood": 0, "stick": 0}

function calcFuel(n) {
  let ingotTime = 11 * n;
  let fuelTime = { lava: 800, blazeRod: 120, coal: 80, wood: 15, stick: 1 };
  for (let fuel in fuelTime){
    const amount = Math.floor(ingotTime / fuelTime[fuel]);
    ingotTime -= amount * fuelTime[fuel];
    fuelTime[fuel] = amount;
  }
  return fuelTime;
};



// Test.assertDeepEquals(calcFuel(37), { lava: 0, blazeRod: 3, coal: 0, wood: 3, stick: 2 });
// Test.assertDeepEquals(calcFuel(21), { lava: 0, blazeRod: 1, coal: 1, wood: 2, stick: 1 });
// Test.assertDeepEquals(calcFuel(123), { lava: 1, blazeRod: 4, coal: 0, wood: 4, stick: 13 }); 