const gameboard = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
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
  const playerOne = createPlayer("marlen", "x");
  const playerTwo = createPlayer("Ai", "o");
  let activePlayer = playerOne;
  let currentMarker = playerOne.playerMarker;

  const getActivePlayer = () => activePlayer;

  const board = gameboard.getBoard();

  const switchPlayer = () => {
    if (currentMarker === "x") {
      currentMarker = playerTwo.playerMarker;
      activePlayer = playerTwo;
    } else {
      currentMarker = playerOne.playerMarker;
      activePlayer = playerOne;
    }
    return currentMarker;
  };

  const checkEmptyBoard = () => {
    let isFull = board.flat().every((cell) => cell === "x" || cell === "o");
    if (isFull) console.log("The cell is full");
    return isFull;
  };

  const addMarkerToBoard = (row, column, currentMarker) => {
    if (board[row][column] === "x" || board[row][column] === "o") {
      return console.log("This spot is taken!");
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
      return { isGameOver: true };
    }
    return { isGameOver: false };
  };

  const playRound = (row, column) => {
    if (checkEmptyBoard()) return;

    addMarkerToBoard(row, column, currentMarker);
    const winCheck = checkWinner();

    if (!winCheck.isGameOver) {
      switchPlayer();
    }
  };

  return {
    playRound,
    getActivePlayer,
    getBoard: () => board,
  };
}

function screenController() {
  const game = gameController();
  const boardDiv = document.querySelector(".board");
  const playerTurnDiv = document.querySelector(".turn");

  const updateScreen = () => {
    boardDiv.textContent = "";
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        const button = document.createElement("button");
        button.textContent = cell;
        button.setAttribute("data-row", rowIndex);
        button.setAttribute("data-column", columnIndex);
        button.classList.add("cell", "btn");

        button.addEventListener("click", () => {
          game.playRound(rowIndex, columnIndex);
          updateScreen();
        });

        boardDiv.appendChild(button);
      });
    });

    playerTurnDiv.textContent = `${activePlayer.playerName}'s turn`;
  };

  updateScreen();
}

screenController();
