
class TicTacToe {
  constructor() {
    this.gameBoard = [[null, null, null],[null, null, null],[null, null, null]];
    this.currentPlayer = 1;
    this.gameOver = false;
    this.prompt = require('prompt');
    console.log(`Player 1 is Xs, Player 2 is Os`);
    this.prompt.start();
  }

  printGameboard (board) {
    console.log(`Tic - Tac - Toe!`)
    console.log(`|${board[0][0] || " "}|${board[0][1] || " "}|${board[0][2] || " "}|`);
    console.log(`-------`);
    console.log(`|${board[1][0] || " " }|${board[1][1] || " "}|${board[1][2] || " "}|`);
    console.log(`-------`);
    console.log(`|${board[2][0] || " " }|${board[2][1] || " "}|${board[2][2] || " "}|`);
  }

  checkIfGameBoardFull() {
    let isFull = true;

    this.gameBoard.forEach(row => {
      if(row.includes(null)) {
        isFull = false;
      }
    })
    return isFull;
  }

  checkWinStateRowsCols (board) {
    let solutions = [[],[],[],[],[],[]];
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        solutions[i].push(board[i][j]);
        solutions[i + 3].push(board[j][i])
      }
    }
    // check diagonals
    solutions.push([board[0][0], board[1][1], board[2][2]]);
    solutions.push([board[0][2], board[1][1], board[2][0]]);

    let boardIsFull = this.checkIfGameBoardFull();

    solutions = solutions.map(rowCol => {
      return rowCol.join('');
    })
    for(let i = 0; i < solutions.length; i++) {
      if(solutions[i] === 'XXX') {
        this.declareWinner('X');
      } else if (solutions[i] === 'OOO') {
        this.declareWinner('O');
      } else if (boardIsFull) {
        this.declareWinner(null);
        break;  
      }
    }
  }

  declareWinner (piece) {
    if(piece === null) {
      console.log('This match was a stalemate.');   
      this.gameOver = true;      
    } else {
      console.log(`${piece} wins!!! Congratulations Player ${this.currentPlayer}!`);
      this.gameOver = true;
    }
  }
  
  gameLoop () {
    let gamePiece = this.currentPlayer === 1 ? 'X' : 'O';

    console.log(`Player ${this.currentPlayer}, what row? (1-3)`);
    this.prompt.get([{name: 'row'}], (err, result) => {
      let targetRow = result.row;
      console.log(`you entered row ${result.row} and your piece is ${gamePiece}`);
      console.log(`Player ${this.currentPlayer}, what column? (1-3)`);
      this.prompt.get([{name: 'col'}], (err, result) => {
        if(this.gameBoard[targetRow - 1][result.col - 1]) {
          console.log(`Sorry, you can't place a mark there!`);
          this.printGameboard(this.gameBoard);          
          this.gameLoop();
        } else {
          this.gameBoard[targetRow - 1][result.col - 1] = gamePiece;
          console.log(`you entered column ${result.col} and your piece is ${gamePiece}`);
          this.printGameboard(this.gameBoard);
          this.checkWinStateRowsCols(this.gameBoard);
          if(this.gameOver) {
            return;
          } else {
            if( this.currentPlayer === 1) {
              this.currentPlayer = 2;
              this.gameLoop();
            } else {
              this.currentPlayer = 1
              this.gameLoop();
            }
          }
        }
      });
    })
  }

  startGame() {
    this.printGameboard(this.gameBoard);    
    this.gameLoop(this.currentPlayer);
  }
}

let game = new TicTacToe();
game.startGame();
