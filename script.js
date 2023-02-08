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
        var button = document.getElementById("reset");

        button.addEventListener('click', function() {
            document.getElementById("game").innerText = "";
            document.querySelector("h2").innerText = "Click a grid to start";
            document.querySelector("h2").style.color = "#A38D96";
            button.style.backgroundColor = "#E7E0E4";
            createBoard();
            controller.select();
        });
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
            });
        });
    }

    function playMove(cellId) {
        if (board[cellId] === "" && !winCheck(board, huPlayer) && !winCheck(board, aiPlayer)) {
            turn(cellId, huPlayer);

            if (!winCheck(board, huPlayer)) {
                turn(computerSelection(), aiPlayer);
            } else {
                gameBoard.reset();
            }
        }
    }

    function turn(cellId, player) {
        board[cellId] = player;
        document.getElementById(cellId).innerText = player;
        winCheck(board, player)
    }

    function winCheck(board, player) {
        var winner = document.querySelector("h2");

        if (board[0] == player && board[1] == player && board[2] == player ||
            board[3] == player && board[4] == player && board[5] == player ||
            board[6] == player && board[7] == player && board[8] == player ||
            board[0] == player && board[3] == player && board[6] == player ||
            board[1] == player && board[4] == player && board[7] == player ||
            board[2] == player && board[5] == player && board[8] == player ||
            board[0] == player && board[4] == player && board[8] == player ||
            board[2] == player && board[4] == player && board[6] == player
        ) {
            winner.innerText = player + " wins";
            winner.style.color = "#F4D018";
            document.querySelector("button").style.backgroundColor="#F4D018";
            return true;
        }
        else if (emptySpots().length === 0) {
            winner.innerText = "Draw";
            return true;
        }
        return false;
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
        for (i = 0; i < 25; i++) {
            var random = randomNumber();
            if (board[random] === "X" || board[random] === "O") {
                continue;
            }
            else {
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
