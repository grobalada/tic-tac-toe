/*-------------------------------- Constants --------------------------------*/

const square0 = document.getElementById('0')
const square1 = document.getElementById('1')
const square2 = document.getElementById('2')
const square3 = document.getElementById('3')
const square4 = document.getElementById('4')
const square5 = document.getElementById('5')
const square6 = document.getElementById('6')
const square7 = document.getElementById('7')
const square8 = document.getElementById('8')

const message = document.getElementById('message')
const resetBtn = document.getElementById('reset')


/*---------------------------- Variables (state) ----------------------------*/

let player = 'X'
let moves = 0
let gameOver = false


/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/

function checkWinner(){

    if(square0.textContent === player &&
       square1.textContent === player &&
       square2.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square3.textContent === player &&
            square4.textContent === player &&
            square5.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square6.textContent === player &&
            square7.textContent === player &&
            square8.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square0.textContent === player &&
            square3.textContent === player &&
            square6.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square1.textContent === player &&
            square4.textContent === player &&
            square7.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square2.textContent === player &&
            square5.textContent === player &&
            square8.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square0.textContent === player &&
            square4.textContent === player &&
            square8.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }

    else if(square2.textContent === player &&
            square4.textContent === player &&
            square6.textContent === player){

        message.textContent = player + ' wins!'
        gameOver = true
    }
}


function changePlayer(){

    if(gameOver === false){

        if(player === 'X'){
            player = 'O'
        }
        else{
            player = 'X'
        }

        message.textContent = player + "'s turn"
    }
}


function checkTie(){

    if(moves === 9 && gameOver === false){
        message.textContent = 'Tie!'
        gameOver = true
    }
}


function square0Click(){

    if(square0.textContent === '' && gameOver === false){
        square0.textContent = player
        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square1Click(){
    if(square1.textContent === '' && gameOver === false){

        square1.textContent = player
        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square2Click(){

    if(square2.textContent === '' && gameOver === false){
        square2.textContent = player

        moves = moves + 1
        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square3Click(){
    if(square3.textContent === '' && gameOver === false){
        square3.textContent = player
        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square4Click(){

    if(square4.textContent === '' && gameOver === false){

        square4.textContent = player
        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square5Click(){
    if(square5.textContent === '' && gameOver === false){

        square5.textContent = player
        moves = moves + 1
        checkWinner()
        checkTie()

        changePlayer()
    }
}


function square6Click(){

    if(square6.textContent === '' && gameOver === false){
        square6.textContent = player
        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square7Click(){
    if(square7.textContent === '' && gameOver === false){
        square7.textContent = player

        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function square8Click(){

    if(square8.textContent === '' && gameOver === false){
        square8.textContent = player
        moves = moves + 1

        checkWinner()
        checkTie()
        changePlayer()
    }
}


function resetGame(){

    square0.textContent = ''
    square1.textContent = ''
    square2.textContent = ''
    square3.textContent = ''
    square4.textContent = ''
    square5.textContent = ''
    square6.textContent = ''
    square7.textContent = ''
    square8.textContent = ''

    player = 'X'
    moves = 0
    gameOver = false

    message.textContent = "X's turn"
}


/*----------------------------- Event Listeners -----------------------------*/

square0.addEventListener('click', square0Click)
square1.addEventListener('click', square1Click)
square2.addEventListener('click', square2Click)
square3.addEventListener('click', square3Click)
square4.addEventListener('click', square4Click)
square5.addEventListener('click', square5Click)
square6.addEventListener('click', square6Click)
square7.addEventListener('click', square7Click)
square8.addEventListener('click', square8Click)

resetBtn.addEventListener('click', resetGame)

resetGame()