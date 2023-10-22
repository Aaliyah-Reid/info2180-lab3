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
        checkWinner()
 }
}

function checkWinner(){
    const allSquares = document.querySelectorAll(".square")

    winningSlots = [[0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    

    for (const slot of winningSlots){
        const [a,b,c] = slot;
        if (cells[a] && cells[a]===cells[b] && cells[a] === cells[c]){
            const winner = cells[a];
            document.getElementById('status').textContent = `Congratulations! ${winner} is the Winner!`;
            document.getElementById('status').classList.add('you-won');
            return;
        }
    }

    if (!cells.includes("")){
        document.getElementById('status').textContent = "It's a Draw!";
    }

}

createBoard();

});
