var prompt = require('prompt');
console.log(`Player 1 is Xs, Player 2 is Os`);
prompt.start();

var TicTacToe = function() {
  let gameBoard = [[" ", "O", "X"],[" ", "O", " "],["X", " ", " "]];

  const printGameboard = (board) => {
    console.log(`|${board[0][0]}|${board[0][1]}|${board[0][2]}|`);
    console.log(`-------`);
    console.log(`|${board[1][0]}|${board[1][1]}|${board[1][2]}|`);
    console.log(`-------`);
    console.log(`|${board[2][0]}|${board[2][1]}|${board[2][2]}|`);
  }
  printGameboard(gameBoard);
}

console.log(`Player, what row?`);
console.log(`Player, what column?`);


TicTacToe();



// prompt.get([{name: 'turn', description: 'Enter your name'}, {name: 'password', description: 'Enter your password'}], (err, result) => {
//   console.log("you put: ", result.username, result.password)
// })