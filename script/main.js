const gameboard = (function () {
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const getBoard = () => board;
  return { getBoard };
})();

function createPlayer(name, marker) {
  const playerName = name;
  const playerMarker = marker;
  return { playerName, playerMarker };
}

function gameController() {
  const playerOne = createPlayer('marlen', 'x');
  const playerTwo = createPlayer('Ai', 'o');
  let activePLayer = playerOne;
  let currentMarker = playerOne.playerMarker;

  const getActivePlayer = () => activePLayer;

  const board = gameboard.getBoard();

  const switchPlayer = () => {
    if (currentMarker === 'x') {
      currentMarker = playerTwo.playerMarker;
      activePLayer = playerTwo;
    } else {
      currentMarker = playerOne.playerMarker;
      activePLayer = playerOne;
    }
    return currentMarker;
  };

  const checkEmptyBoard = () => {
    let isFull = board.flat().every((cell) => cell === 'x' || cell === 'o');
    if (isFull) console.log('The cell is full');
    return isFull;
  };

  const addMarkerToBoard = (row, column, currentMarker) => {
    if (board[row][column] === 'x' || board[row][column] === 'o') {
      return console.log('This spot is taken!');
    }
    board[row][column] = currentMarker;
  };

  const checkWinner = () => {
    let isRowWinner =
      (board[0][0] === currentMarker &&
        board[0][1] === currentMarker &&
        board[0][2] === currentMarker) ||
      (board[1][0] === currentMarker &&
        board[1][1] === currentMarker &&
        board[1][2] === currentMarker) ||
      (board[2][0] === currentMarker &&
        board[2][1] === currentMarker &&
        board[2][2] === currentMarker);

    let isColumnWinner =
      (board[0][0] === currentMarker &&
        board[1][0] === currentMarker &&
        board[2][0] === currentMarker) ||
      (board[0][1] === currentMarker &&
        board[1][1] === currentMarker &&
        board[2][1] === currentMarker) ||
      (board[0][2] === currentMarker &&
        board[1][2] === currentMarker &&
        board[2][2] === currentMarker);

    let isDiagonalWinner =
      (board[0][0] === currentMarker &&
        board[1][1] === currentMarker &&
        board[2][2] === currentMarker) ||
      (board[0][2] === currentMarker &&
        board[1][1] === currentMarker &&
        board[2][0] === currentMarker);

    if (isRowWinner || isDiagonalWinner || isColumnWinner) {
      console.log(`${getActivePlayer().playerName} won the game`);
      return;
    } else {
      console.log(`${getActivePlayer().playerName}'s turn`);
    }
  };

  const playRound = (row, column) => {
    checkEmptyBoard();
    addMarkerToBoard(row, column, currentMarker);
    checkWinner();
    switchPlayer();
  };

  playRound(0, 1);
  playRound(0, 2);
  playRound(2, 1);
  playRound(2, 0);
  playRound(2, 2);
  playRound(1, 1);

  console.log(board);
}

gameController();
