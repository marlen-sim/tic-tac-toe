const gameBoard = (function () {
    const board = {
        game: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
    };
    const getBoard = () => board;
    return { board, getBoard };
})();

function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;
    let score = 0;
    const giveScore = () => {
        return score++;
    };
    const getScore = () => {
        return score;
    };
    return { playerName, playerMarker, giveScore, getScore };
}

const playerOne = createPlayer("Marlen", "X");
const playerTwo = createPlayer("Computer", "O");

console.log(playerOne.playerName);

function gameFlow(playerOne = "player one", playerTwo = "player two") {
    let board = gameBoard.getBoard();

    console.log("BOARD:", board);

    const players = [
        {
            name: playerOne.playerName,
            marker: playerOne.playerMarker,
        },
        {
            name: playerTwo.playerName,
            marker: playerTwo.playerMarker,
        },
    ];

    // Смена игрока
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    function playRound(activePlayer, row, column) {
        return (board.game[row][column] = activePlayer.marker);
    }

    playRound(activePlayer, 0, 2);
    switchPlayerTurn();
    playRound(activePlayer, 0, 0);
    playRound(activePlayer, 1, 1);
    playRound(activePlayer, 2, 2);

    // Проверка победителя
    for (i = 0; i < 3; i++) {
        if (
            (board.game[i][0] &&
                board.game[i][1] &&
                board.game[i][2] === activePlayer.marker) ||
            (board.game[0][i] &&
                board.game[1][i] &&
                board.game[2][i] === activePlayer.marker) ||
            (board.game[0][0] &&
                board.game[1][1] &&
                board.game[2][2] === activePlayer.marker) ||
            (board.game[0][2] &&
                board.game[1][1] &&
                board.game[2][0] === activePlayer.marker)
        ) {
            console.log(`${activePlayer.name} wins`);
            break;
        } else {
            return;
        }
    }

    /*
    Вариант проверки через свич

    for (let i = 0; i < 3; i++) {
        switch (true) {
            case board.game[i][0] &&
                board.game[i][1] &&
                board.game[i][2] === "O":
                console.log("Player two win");
                break;
            case board.game[0][i] &&
                board.game[1][i] &&
                board.game[2][i] === "O":
                console.log("Player two win");
                break;
            case board.game[0][0] &&
                board.game[1][1] &&
                board.game[2][2] === "O":
                console.log("Player two win");
                break;

            case board.game[0][2] &&
                board.game[1][1] &&
                board.game[2][0] === "O":
                console.log("Player two win");
                break;
            default:
                return console.log("tie");
        }
    }
    */
}

console.log(gameBoard.boardObj);
playerOne.giveScore();
let a = playerOne.getScore();

gameFlow(playerOne, playerTwo);
console.log(a);

console.log(gameBoard.getBoard());
