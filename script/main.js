function gameBoard() {
    const board = {
        game: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
    };
    const getBoard = () => board;
    return { board, getBoard };
}
gameBoard();

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

function addToken() {
    let value = "";
    const addMarker = (playerMarker) => {
        value = playerMarker;
    };

    return { addMarker };
}
const playerOne = createPlayer("Marlen", "X");
const playerTwo = createPlayer("Computer", "O");

function gameFlow(playerOne = "player one", playerTwo = "player two") {
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
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
}

playerOne.giveScore();
let a = playerOne.getScore();

gameFlow(playerOne, playerTwo);
console.log(a);
// console.log(borad);
