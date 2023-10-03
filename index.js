//global variables
const grids = document.querySelectorAll('.gridChild');
const XBtn = document.getElementById('XBtn');
const OBtn = document.getElementById('OBtn');
const restartBtn = document.getElementById('restartBtn');
const declareWinner = document.getElementById('winner');

// player objects

const player1 = {

}
const player2 = {

}

// functions

function clearGrid(){

    grids.forEach((grid) => {
        grid.textContent = '';
    });
}

//calling functions

restartBtn.addEventListener('click', () => {
    clearGrid();
});