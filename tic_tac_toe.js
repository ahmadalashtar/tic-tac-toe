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
  if (board[row][col] === " "){
    board[row][col] = player;
    return true;
  } 
  return false;
}

// Checks if the given player has won the game
// Returns true if the player has won, false otherwise
function checkForWin(board, player) {
  function getWinningString(board, player){
    let winningString = "";  
    board.forEach(() => winningString+=player);
    return winningString;
  }
  let winningString = getWinningString(board,player);

  function checkHorizontally(board, player, winningString){
    let horizontalLines = board.map(
      (element)=> element.reduce(
        (acc,e)=> acc+e
      )
    )
    return hasWinningString(horizontalLines, winningString)
  }
  function checkVertically(board,player, winningString){
    let verticalLines = board.map(
      (element,index)=> {
        let cell = "";
        for (let i = 0 ; i < board.length ; i++){
          cell+= board[i][index];
        }
        return cell;
      }
    )
    return hasWinningString(verticalLines,winningString)
  }
  function checkDiagonally(board,player,winningString){
    let diagonalLines = [];
    let firstDiag = "";
    let secondDiag = "";
    for (let i = 0 ; i < board.length; i++){
      firstDiag  += board[i][i];
      secondDiag += board[i][board.length-1-i];
    }
    diagonalLines = [firstDiag, secondDiag]
    return hasWinningString(diagonalLines,winningString);
  }
  function hasWinningString(lines,winningString){
    if (lines.indexOf(winningString) > -1){
      return true;
    }
    return false;
  }
  
  let horizontalResult = checkHorizontally(board,player,winningString);
  let verticalResult = checkVertically(board,player,winningString);
  let diagonalResult = checkDiagonally(board,player,winningString);

  return (horizontalResult || verticalResult || diagonalResult);
}


// Checks if the game has ended in a draw
// Returns true if the game is a draw, false otherwise
function checkForDraw(board) {
  let players = ["X","O"];
  let winningResults = players.map((element)=>checkForWin(board,element));
  let fullBoard = true;
  board.forEach((element)=>element.forEach(
    (e)=>{
      if (e === " "){
        fullBoard = false;
      }
    }
  ));
  let winnerExists = winningResults.reduce((acc,element)=> acc || element)
  if (winnerExists) {
    return false;
  } 
  return fullBoard
}




module.exports = {
  initBoard,
  displayBoard,
  makeMove,
  checkForWin,
  checkForDraw
};

function gameLoop(){
  // alternate
  // ask for move
  // make move update the game board
  
}

function startGame(){
  let board = initBoard();
  // start the game loop
  // handle the end of the game (after the game end, display board, win or draw)
}

function playGame(){
  // handles the game loop 
  // manages player input using the readline-sync library. (promt)
}

playGame();