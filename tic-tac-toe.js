document.addEventListener("DOMContentLoaded", function (){
    const gameBoard = document.querySelector('#board');
    const cells = ["","","","","","","","","" ];
    let currPlayer = 'X'; 


function createBoard(){
    cells.forEach((_cell,index) => {
        const squareCell = document.createElement('div');
        squareCell.classList.add('square');
        squareCell.id = index;

        squareCell.addEventListener('click' , () => addPlayerSymbol(squareCell, index));
        squareCell.addEventListener('mouseover', () => squareCell.classList.add('hover'));
        squareCell.addEventListener('mouseout', () => squareCell.classList.remove('hover'));

        gameBoard.append(squareCell);
    });
}


function addPlayerSymbol(squareCell, index){
    if (cells[index] ==="") {
        cells[index] = currPlayer;
        squareCell.classList.add(currPlayer);
        squareCell.textContent = currPlayer;
        currPlayer = currPlayer === 'X' ? 'O' : 'X';
            
 }
}



createBoard();

});
