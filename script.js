const gameBoard = (() => {
    function createBoard () {
        board = ["", "", "", "", "", "", "", "", ""];
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
gameBoard.displayBoard();

const controller = (() => {
    let count = 1;
    let sign = "";

    function select () {
        var userSelection = document.getElementsByClassName('box');

        for(var i = 0; i < userSelection.length; i++) {
            userSelection[i].addEventListener('click', function() {
                turn();
                board[this.id] = sign;
                document.getElementById(this.id).innerText = sign;
                console.log(board);
                winCheck();
            })
        }
    }

    function winCheck() {
        if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X' ||
            board[3] == 'X' && board[4] == 'X' && board[5] == 'X' ||
            board[6] == 'X' && board[7] == 'X' && board[8] == 'X' ||
            board[0] == 'X' && board[3] == 'X' && board[6] == 'X' ||
            board[1] == 'X' && board[4] == 'X' && board[7] == 'X' ||
            board[2] == 'X' && board[5] == 'X' && board[8] == 'X' ||
            board[0] == 'X' && board[4] == 'X' && board[8] == 'X' ||
            board[2] == 'X' && board[4] == 'X' && board[6] == 'X'
        ) {
            alert('You win!');
            gameBoard.reset();
            gameBoard.createBoard();
        }

        else if (
            board[0] == 'O' && board[1] == 'O' && board[2] == 'O' ||
            board[3] == 'O' && board[4] == 'O' && board[5] == 'O' ||
            board[6] == 'O' && board[7] == 'O' && board[8] == 'O' ||
            board[0] == 'O' && board[3] == 'O' && board[6] == 'O' ||
            board[1] == 'O' && board[4] == 'O' && board[7] == 'O' ||
            board[2] == 'O' && board[5] == 'O' && board[8] == 'O' ||
            board[0] == 'O' && board[4] == 'O' && board[8] == 'O' ||
            board[2] == 'O' && board[4] == 'O' && board[6] == 'O'
        ) {
            alert('You lose!');
            gameBoard.reset();
            gameBoard.createBoard();
        }

        else if(count == 10) {
            alert('Draw');
            gameBoard.reset();
            gameBoard.createBoard();
        }
    }

    function turn() {
        if(count % 2 == 0) {
            sign = 'X';
        }

        else {
            sign = 'O';
        }
        count++;
        console.log(count);
    }

    return {
        winCheck,
        select,
        turn
    }
})();

controller.select();


