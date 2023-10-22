document.addEventListener("DOMContentLoaded", function (){
    const gameBoard = document.querySelector('#board');
    const cells = ["","","","","","","","","" ];


function createBoard(){
    cells.forEach((_cell,index) => {
        const squareCell = document.createElement('div');
        squareCell.classList.add('square');
        gameBoard.append(squareCell);
    });
}


createBoard()

});
