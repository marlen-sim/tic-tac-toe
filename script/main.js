const gameBoard = {
  board: [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ],
};

const players = {
  playerOne: {
    name: 'first',
    marker: 'x',
  },

  playerTwo: {
    name: 'second',
    marker: 'y',
  },
};

let currentMarker = players.playerOne.marker;

const game = {
  addMarkerToBoard(row, column, currentMarker) {
    gameBoard.board[row][column] = currentMarker;
  },
  switchPlayer(plyerMaker) {
    if (plyerMaker === 'x') {
      currentMarker = players.playerTwo.marker;
    } else {
      currentMarker = players.playerOne.marker;
    }
  },
  checkWinner() {
    if (
      (gameBoard.board[0][0] === currentMarker &&
        gameBoard.board[0][1] === currentMarker &&
        gameBoard.board[0][2] === currentMarker) ||
      (gameBoard.board[1][0] === currentMarker &&
        gameBoard.board[1][1] === currentMarker &&
        gameBoard.board[1][2] === currentMarker) ||
      (gameBoard.board[2][0] === currentMarker &&
        gameBoard.board[2][1] === currentMarker &&
        gameBoard.board[2][2] === currentMarker) ||
      (gameBoard.board[0][0] === currentMarker &&
        gameBoard.board[1][1] === currentMarker &&
        gameBoard.board[2][2] === currentMarker) ||
      (gameBoard.board[0][2] === currentMarker &&
        gameBoard.board[1][1] === currentMarker &&
        gameBoard.board[2][0] === currentMarker)
    ) {
      return console.log(`${players.playerOne.name} win`);
    } else {
      console.log('play again');
    }
  },
};

game.addMarkerToBoard(0, 0, currentMarker);
game.checkWinner();
game.addMarkerToBoard(1, 1, currentMarker);
game.checkWinner();
game.addMarkerToBoard(2, 2, currentMarker);
game.checkWinner();

console.log(gameBoard.board);
