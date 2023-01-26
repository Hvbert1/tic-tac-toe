const gameBoard = (() => {
    const board = [];
    
    for(var i = 0; i < 9; i++) {
        board.push[i];
        const grid = document.createElement("div");
        grid.id = i;
        document.getElementById("game").appendChild(grid);
    }
})();

const player = (name, icon) => {
    return {name, icon};
}

const newPlayer = player();