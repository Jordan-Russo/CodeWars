// url: https://www.codewars.com/kata/53417de006654f4171000587
// Simple Card Game
// givens two equal decks of cards
// return the end of the game message
  // "Steve wins x to y" if Steve wins; where x is Steve's score, y is Josh's score;
  // "Josh wins x to y" if Josh wins; where x is Josh's score, y is Steve's score;
  // "Tie" if the score is tied at the end of the game.
// Example:
  // Steve is dealt: ['A','7','8']
  // Josh is dealt: ['K','5','9']
  // returns "Steve wins 2 to 1"
// When comparing two cards to each other, give the person with the higher card a point in score
// if cards are the same value give NEITHER OF THEM a point
// Make a deck of cards
// initialize scores for steve and jack
// loop through their decks
  // determine the value of their cards
  // if one has a card bigger than the other assign a point to them
// determine winner by score
// if tie 
  // return tie
// find the min and max scores
// return <winner> wins <max> to <min>
const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
function winner(deckSteve, deckJosh) {
  let steveScore = 0
  let joshScore = 0
  for(let i = 0; i < deckSteve.length; i++){
    const steveCard = cards.indexOf(deckSteve[i])
    const joshCard = cards.indexOf(deckJosh[i])
    if(steveCard > joshCard){steveScore++}
    if(joshCard > steveCard){joshScore++}
  }
  const winner = steveScore > joshScore ? 'Steve' : joshScore > steveScore ? 'Josh' : 'Tie'
  if(winner === 'Tie'){return winner}
  const min = Math.min(steveScore, joshScore)
  const max = Math.max(steveScore, joshScore)
  const msg = `${winner} wins ${max} to ${min}`
  return msg
}