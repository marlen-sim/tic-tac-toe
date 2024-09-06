const gameBoard = {
//   board: [
//     [[], [], []],
//     [[], [], []],
//     [[], [], []],
//   ],
  board: [
    ['x', 'o', 'x'],
    ['x', 'o', 'o'],
    ['o', 'x','x'],
  ],
};

const players = {
  playerOne: {
    name: 'First',
    marker: 'x',
  },

  playerTwo: {
    name: 'second',
    marker: 'o',
  },
};

let currentMarker = players.playerOne.marker;

const game = {
  addMarkerToBoard(row, column, currentMarker) {
    if (
      gameBoard.board[row][column] === 'x' ||
      gameBoard.board[row][column] === 'o'
    ) {
      return console.log('This spot is taken!');
    }
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
    if (game.checkEmptyBoard()) {
      console.log('The board is full! Tie!');
    } else {
      console.log('There are still empty spaces.');
    }

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
      return console.log(`${currentMarker} won the game`);
    } else {
      console.log(`${currentMarker} turn`);
    }
  },
  checkEmptyBoard() {
    let isFull = gameBoard.board
      .flat()
      .every((cell) => cell === 'x' || cell === 'o');

    return isFull;
  },
};

game.addMarkerToBoard(0, 0, currentMarker);
game.switchPlayer(currentMarker);
game.addMarkerToBoard(0, 0, currentMarker);
game.checkWinner();
game.addMarkerToBoard(1, 1, currentMarker);
game.switchPlayer(currentMarker);
game.checkWinner();
game.addMarkerToBoard(2, 2, currentMarker);
game.switchPlayer(currentMarker);
game.checkWinner();
game.checkEmptyBoard();

console.log(gameBoard.board);
