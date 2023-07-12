// Given a nested array (grid-like) of numbers
  // where 0 are safe-spots, 1 are dangerous walls, 2 is the start tile, 3 is the finish tile.
// Also given an array of directions/moves as "N", "S", "E", "W"
// Return whether the directions will lead you to "Finish", "Dead", or "Lost"
// Example:
// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// direction = ["N","N","N","N","N","E","E","E","E","E"] 
// returns "Finish"
// Step 1: Find where the start of the maze "2" is and set your starting position there.
// Step 2: Loop through the steps in the direction.
  // as you loop if you go on a wall (have value of 1) at any point or go out of bounds (value of undefined), return "Dead"
  // if the tile you're on is 3, return "Finish"
// return "Lost"
function mazeRunner(maze, directions) {
  let [row, col] = findStart(maze)
  for(let step = 0; step < directions.length; step++){
    switch(directions[step]){
        case "N": 
          row--;
          break;
        case "E": 
          col++;
          break;
        case "S": 
          row++;
          break;
        case "W": 
          col--;      
    }  
  // movement part for each direction
    let pos = maze[row]?.[col]
    if(pos === 1 || pos === undefined){return "Dead"}
    if(pos === 3){return "Finish"}
  }
  return "Lost"
  function findStart(maze){
    for(let i = 0; i < maze.length; i++){
      for(let j = 0; j < maze[i].length; j++){
        if(maze[i][j] === 2){return [i, j]}
      }
    } 
  }
}