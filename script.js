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

    return {
        createBoard,
        displayBoard
    };
})();

gameBoard.createBoard();
gameBoard.displayBoard();

const controller = (() => {
    function test () {
        var userSelection = document.getElementsByClassName('box');

        for(var i = 0; i < userSelection.length; i++) {
            userSelection[i].addEventListener('click', function(e) {
                board[this.id] = 'X';
                console.log(board);
                console.log('The id of the element you clicked: ' + this.id);
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
            gameBoard.createBoard();
        }
    }

    return {
        winCheck,
        test
    }
})();

controller.winCheck();
controller.test();

