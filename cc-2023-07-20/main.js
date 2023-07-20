// url: https://www.codewars.com/kata/536e9a7973130a06eb000e9f
// Pokemon Damage Calculator
// Given yourtype, opponentType, an attack stat and a defense stat
// return how much daamge it would do
// examples:
  //calculateDamage("fire", "water", 100, 100), 25);
  //calculateDamage("grass", "water", 100, 100), 100);
  //calculateDamage("electric", "fire", 100, 100), 50);
  //calculateDamage("grass", "electric", 57, 19), 150);
  //calculateDamage("grass", "water", 40, 40), 100);
  //calculateDamage("grass", "fire", 35, 5), 175);
  //calculateDamage("fire", "electric", 10, 2), 250);
// Use the formula damage = 50 * (atk / def) * effectiveness
// Determine effectiveness using your and opponent type
  // if they're the same multiplier is 0.5.
  // if they're both in the superEffective multiplier in order it's 2
    // if in opposite order it's 0.5
  // return effectiveness
// calculate damage 
// return damage
function calculateDamage(yourType, opponentType, attack, defense){
  console.log(yourType, opponentType)
  const effectiveness = findAttackMultiplier(yourType, opponentType)
  return 50 * (attack / defense) * effectiveness
}
function findAttackMultiplier(yourType, opponentType){
  // if matches return 2, if word swap matches return 0.5, otherwise return 1
  const superEffective = {
    'fire grass': 2,
    'water fire': 2,
    'grass water': 2,
    'electric water': 2,
  }
  let multiplier = 1
  if(`${yourType} ${opponentType}` in superEffective){multiplier = 2}
  if(`${opponentType} ${yourType}` in superEffective){multiplier = 0.5}
  if(yourType === opponentType){multiplier = 0.5}
  return multiplier
}