var prompt = require('prompt');
console.log(`Player 1 is Xs, Player 2 is Os`);
prompt.start();

var TicTacToe = function() {
  let gameBoard = [[null, null, null],[null, null, null],[null, null, null]];
  var currentPlayer = 1;

  const printGameboard = (board) => {
    console.log(`Tic - Tac - Toe!`)
    console.log(`|${board[0][0] || " "}|${board[0][1] || " "}|${board[0][2] || " "}|`);
    console.log(`-------`);
    console.log(`|${board[1][0] || " " }|${board[1][1] || " "}|${board[1][2] || " "}|`);
    console.log(`-------`);
    console.log(`|${board[2][0] || " " }|${board[2][1] || " "}|${board[2][2] || " "}|`);
  }
  printGameboard(gameBoard);

  const gameLoop = (currentPlayer) => {
    let gamePiece;
    if (currentPlayer === 1) {
      gamePiece = 'X';
    } else {
      gamePiece = 'O';
    }
    console.log(`Player ${currentPlayer}, what row? (1-3)`);
    prompt.get([{name: 'row'}], (err, result) => {
      let targetRow = result.row;
      console.log(`you entered row ${result.row} and your piece is ${gamePiece}`);
      console.log(`Player ${currentPlayer}, what column? (1-3)`);
      prompt.get([{name: 'col'}], (err, result) => {
        gameBoard[targetRow - 1][result.col - 1] = gamePiece;
        console.log(`you entered column ${result.col} and your piece is ${gamePiece}`);
        printGameboard(gameBoard);
        if( currentPlayer === 1) {
          gameLoop(2);
        } else {
          gameLoop(1);
        }
      });
    })
    // console.log(`Player ${currentPlayer}, what column?`);

    // prompt.get([{name: 'turn', description: 'Enter your name'}, {name: 'password', description: 'Enter your password'}], (err, result) => {
    //   console.log("you put: ", result.username, result.password)
    // })
   
  }

  gameLoop(currentPlayer);

}




TicTacToe();



// prompt.get([{name: 'turn', description: 'Enter your name'}, {name: 'password', description: 'Enter your password'}], (err, result) => {
//   console.log("you put: ", result.username, result.password)
// })