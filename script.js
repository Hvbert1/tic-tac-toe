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

gameBoard.createBoard();

const controller = (() => {
    let count = 1;
    const huPlayer = 'X';
    const aiPlayer = 'O';

    function select () {
        var cells = document.querySelectorAll('div.box');

        cells.forEach(function(elem) {
            elem.addEventListener('click', function(event) {
                console.log(event.target.id)
                playMove(event.target.id);
            });
        });
    }

    function playMove(cellId) {
        if(board[cellId] === "") {
            turn(cellId, huPlayer);
            }
        }

    function turn(cellId, player) {
        board[cellId] = player;
        document.getElementById(cellId).innerText = player;
        winCheck(board, player)
    }

    function winCheck(board, player) {
        if (board[0] == player && board[1] == player && board[2] == player ||
            board[3] == player && board[4] == player && board[5] == player ||
            board[6] == player && board[7] == player && board[8] == player ||
            board[0] == player && board[3] == player && board[6] == player ||
            board[1] == player && board[4] == player && board[7] == player ||
            board[2] == player && board[5] == player && board[8] == player ||
            board[0] == player && board[4] == player && board[8] == player ||
            board[2] == player && board[4] == player && board[6] == player
        ) {
            alert('You win!');
            gameBoard.reset();
            gameBoard.createBoard();
        }
        else if(count == 6) {
            alert('Draw');
            gameBoard.reset();
            gameBoard.createBoard();
        }
    }

    function computerSelection() {
        randomInt = Math.floor(Math.random() * (8 - 0 + 1) + 0);

        if(count != 6) {
            while (board[randomInt] != "") {
                randomInt = Math.floor(Math.random() * (8 - 0 + 1) + 0);
                if(board[randomInt] == "") {
                    break;
                }
            }
            console.log('true');
            board[randomInt] = 'O';
            document.getElementById(randomInt).innerText = 'O';
        }
    }

    // function turn() {
    //     if(count % 2 == 0) {
    //         sign = 'O';
    //     }

    //     else {
    //         sign = 'X';
    //     }
    //     count++;
    //     console.log(count);
    // }

    return {
        winCheck,
        select,
        computerSelection,
        // turn
    }
})();

controller.select();