var prompt = require('prompt');
console.log(`Player 1 is Xs, Player 2 is Os`);
prompt.start();

var TicTacToe = function() {
    const printGameboard = (board) => {
      console.log(`Tic - Tac - Toe!`)
      console.log(`|${board[0][0] || " "}|${board[0][1] || " "}|${board[0][2] || " "}|`);
      console.log(`-------`);
      console.log(`|${board[1][0] || " " }|${board[1][1] || " "}|${board[1][2] || " "}|`);
      console.log(`-------`);
      console.log(`|${board[2][0] || " " }|${board[2][1] || " "}|${board[2][2] || " "}|`);
    }

  const initializeGame = () => {
    this.gameBoard = [[null, null, null],[null, null, null],[null, null, null]];
    this.currentPlayer = 1;
    this.gameOver = false;
    printGameboard(this.gameBoard);
  }

  initializeGame();

  const checkWinStateRowsCols = (board) => {
    let solutions = [[],[],[],[],[],[],null,null];
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        solutions[i].push(board[i][j]);
        solutions[i + 3].push(board[j][i])
      }
    }
    // check diagonals
    solutions[6] = [board[0][0], board[1][1], board[2][2]]
    solutions[7] = [board[0][2], board[1][1], board[2][0]]
    solutions = solutions.map(rowCol => {
      return rowCol.join('');
    })
    solutions.forEach(rowCol => {
      if(rowCol === 'XXX') {
        declareWinner('X');
      } else if (rowCol === 'OOO') {
        declareWinner('O');
      }
    })
  }

  const declareWinner = (piece) => {
    console.log(`${piece} wins!!! Congratulations Player ${this.currentPlayer}!`);
    this.gameOver = true;
  }

  const gameLoop = () => {
    let gamePiece;
    if (this.currentPlayer === 1) {
      gamePiece = 'X';
    } else {
      gamePiece = 'O';
    }
    console.log(`Player ${this.currentPlayer}, what row? (1-3)`);
    prompt.get([{name: 'row'}], (err, result) => {
      let targetRow = result.row;
      console.log(`you entered row ${result.row} and your piece is ${gamePiece}`);
      console.log(`Player ${this.currentPlayer}, what column? (1-3)`);
      prompt.get([{name: 'col'}], (err, result) => {
        if(this.gameBoard[targetRow - 1][result.col - 1]) {
          console.log(`Sorry, you can't place a mark there!`);
          printGameboard(this.gameBoard);          
          gameLoop();
        } else {
          this.gameBoard[targetRow - 1][result.col - 1] = gamePiece;
          console.log(`you entered column ${result.col} and your piece is ${gamePiece}`);
          printGameboard(this.gameBoard);
          checkWinStateRowsCols(this.gameBoard);
          if(this.gameOver) {
            return;
          } else {
            if( this.currentPlayer === 1) {
              this.currentPlayer = 2;
              gameLoop();
            } else {
              this.currentPlayer = 1
              gameLoop();
            }
          }
        }
      });
    })
  }
  gameLoop(this.currentPlayer);
}

TicTacToe();



// prompt.get([{name: 'turn', description: 'Enter your name'}, {name: 'password', description: 'Enter your password'}], (err, result) => {
//   console.log("you put: ", result.username, result.password)
// })