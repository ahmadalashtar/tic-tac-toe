// Initializes and returns an empty 3x3 Tic Tac Toe board
function initBoard() {
  // Your code here
  const board = [];
  for (let i = 0 ; i < 3 ; i++){
    let row = [];
    for (let j = 0 ; j < 3 ; j++){
      row.push(" ")
    }
    board.push(row)
  }
  return board;
}

// Displays the current state of the board in the console
function displayBoard(board) {
  // Your code here
  board.forEach((element, index) => {
    console.log(`${element[0]} | ${element[1]} | ${element[2]}`);
    if (index != board.length-1) {
      console.log("---------");
    }
  })
}

// Places the player's move on the board if the chosen cell is unoccupied
// Returns true if the move is valid, false otherwise
function makeMove(board, row, col, player) {
  // Your code here
  board[row][col] = player;
  return board;
}

// Checks if the given player has won the game
// Returns true if the player has won, false otherwise
function checkForWin(board, player) {
  // Your code here
}

// Checks if the game has ended in a draw
// Returns true if the game is a draw, false otherwise
function checkForDraw(board) {
  // Your code here
}



module.exports = {
  initBoard,
  displayBoard,
  makeMove,
  checkForWin,
  checkForDraw
};
