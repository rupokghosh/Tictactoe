//global variables
const grids = document.querySelectorAll('.gridChild');
const XBtn = document.getElementById("XBtn");
const OBtn = document.getElementById("OBtn");
const choiceBtn = document.querySelectorAll('.choiceBtn');
const restartBtn = document.getElementById('restartBtn');
const declareWinner = document.getElementById('winner');
let gameOver = false;

// player objects

let currentPlayer = 'X';
// create functions

function clearGrid(){

    grids.forEach((grid) => {
        grid.textContent = '';
    });
    gameOver = false;expl
}

function chooseXorO(choice){
    if(!gameOver){
        currentPlayer = choice;
        XBtn.disabled = true;
        OBtn.disabled = true;
    }

}

function switchPlayer(){

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner(){
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                           [0 ,3 ,6], [1 ,4 ,7], [2 ,5 ,8], // column
                           [0 ,4 ,8], [2, 4, 6]             // diagonals
                        ];

}

function displayWinner(){

}

// calling functions

restartBtn.addEventListener('click', () => {
    clearGrid();

});

// callback chooseXorO()

XBtn.addEventListener('click', () => {
    chooseXorO('X');
});
OBtn.addEventListener('click', () => {
    chooseXorO('O');
});

console.log(currentPlayer);

// click on gameBoard to display X or O

grids.forEach((grid) =>{

    if(!gameOver && !grid.textContent && !grid.classList.contains('marked')){
        grid.addEventListener('click', () => {
            grid.textContent = currentPlayer;
            grid.classList.add('marked');
            switchPlayer();
            checkWinner();
        });
            
    }
    
})