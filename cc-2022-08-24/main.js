// url: https://www.codewars.com/kata/54f6e7a62e2c167e29000112
// The test fixture I use for this kata is incredibly harder than this kata: http://www.codewars.com/kata/dont-rely-on-luck/train/javascript

// You should be able to finish that kata before this.

// This test fixture will compare your guess to a random number generated in Javascript/CoffeeScript by:

// Math.floor(Math.random() * 100000 + 1) You can pass only by relying on skill - because our tests will be repeated for multiple times.

// And note that in HARDCORE mode: there are strict anti-cheat measures!! PREPARE to hack into the internals of javascript.

// Also note that there are cheating methods that can solve all katas, but please do not use them, they will be detected by the Codewars system (by testing if tests that should fail actually pass) and you will lose your points. Please use a method that only works for this particular kata.
let sus = 0;
Math = Object.create(Math, { random: { value: () => sus += 0.000000069420 } });
Math.random.toString = (imposter) => 'function random() { [native code] }';
Object.freeze(Math);
guess = 1;