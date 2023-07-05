// url: https://www.codewars.com/kata/5853213063adbd1b9b0000be
// Character selection SF2
// Given a nested array (grid-like) of string character names.
// Default starting position is at the top-left first element of the first array in the nested array.
// Also given the moves (up,down,left, and right)
// Return an array that says where the cursor points to after pressing the buttons in the game.
  // The game cursor rotates horizontally but not vertically.
// Examples:
  // fighters = [
  //   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  //   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  // ]
  // initial_position = (0,0)
  // moves = ['up', 'left', 'right', 'left', 'left']
// returns ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
  // moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// returns ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
// For each move that we make in the moves array
  // change the position of the cursor
    // if left/right wrap around the other side if the position goes off the grid
    // if up/down stay still if the position goes off the grid
  // return the character that's at the new grid index position
// return the mapped list of characters the cursor was moved over.
function streetFighterSelection(fighters, [row = 0, col = 0], moves){
  return moves.map(move => {
    if(move === 'up'){row = row === 0 ? row : row - 1}
      // if(move === 'up'){row = fighters[--row] ? row : ++row}
    if(move === 'down'){row = row === fighters.length - 1 ? row : row + 1}
      // if(move === 'down'){row = fighters[++row] ? row : --row}
    if(move === 'left'){col = (col - 1 + fighters[row].length) % fighters[row].length}
    if(move === 'right'){col = (col + 1) % fighters[row].length}
    return fighters[row][col]
  })
}
// Future: update up/down so that they check whether or not the new row has an element on the same column index.
  // aka check fighters[row][col] itself at the new expected position.