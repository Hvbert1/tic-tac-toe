const gameBoard = (() => {
    function createBoard () {
        board = ["", "", "", "", "", "", "", "", ""];
        displayBoard();
    }

    function displayBoard () {
        for(var i = 0; i < 9; i++) {
            const grid = document.createElement("div");
            grid.id = i;
            grid.className = "box";
            document.getElementById("game").appendChild(grid);
        }
    }

    function reset() {
        document.getElementById("game").innerText = "";
    }

    return {
        createBoard,
        displayBoard,
        reset
    };
})();

const controller = (() => {
    const huPlayer = 'X';
    const aiPlayer = 'O';

    function select () {
        var cells = document.querySelectorAll('div.box');

        cells.forEach(function(elem) {
            elem.addEventListener('click', function(event) {
                playMove(event.target.id);
                console.log(board);
            });
        });
    }

    function playMove(cellId) {
        if (board[cellId] === "") {
            turn(cellId, huPlayer);

            if (!winCheck(board, huPlayer)) {
                turn(computerSelection(), aiPlayer);
            } else {
                gameBoard.reset();
                gameBoard.createBoard();
            }
        }
    }

    function turn(cellId, player) {
        board[cellId] = player;
        document.getElementById(cellId).innerText = player;
        winCheck(board, player)
    }

    function winCheck(board, player) {
        let win = false;
        if (board[0] == player && board[1] == player && board[2] == player ||
            board[3] == player && board[4] == player && board[5] == player ||
            board[6] == player && board[7] == player && board[8] == player ||
            board[0] == player && board[3] == player && board[6] == player ||
            board[1] == player && board[4] == player && board[7] == player ||
            board[2] == player && board[5] == player && board[8] == player ||
            board[0] == player && board[4] == player && board[8] == player ||
            board[2] == player && board[4] == player && board[6] == player
        ) {
            win = true;
            alert('You win!');
        }
        else if (emptySpots().length === 0) {
            win = true;
            alert('Draw');
        }
        return win;
    }

    function emptySpots() {
        return board.filter(function (el) {
            return el !== "X" && el !== "O";
        });
    }

    function randomNumber() {
        return Math.floor(Math.random() * 9);
    }

    function computerSelection() {
        for (i = 0; i < 9; i++) {
            var random = randomNumber();
            if (board[random] === "X" || board[random] === "O") {
                continue;
            }
            else {
                console.log(random);
                return random;
            }
        }
    }

    return {
        winCheck,
        select,
        computerSelection,
    }
})();

gameBoard.createBoard();
controller.select();