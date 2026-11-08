/*-------------------------------- Constants --------------------------------*/
let currentPlayer = 'X';


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById('message');
const sqr0E1 = document.getElementById('0');
const sqr1E1 = document.getElementById('1');
const sqr2E1 = document.getElementById('2');
const sqr3E1 = document.getElementById('3');
const sqr4E1 = document.getElementById('4');
const sqr5E1 = document.getElementById('5');
const sqr6E1 = document.getElementById('6');
const sqr7E1 = document.getElementById('7');
const sqr8E1 = document.getElementById('8');


/*-------------------------------- Functions --------------------------------*/
message.textContent = `It's ${currentPlayer}'s turn`;


/*----------------------------- Event Listeners -----------------------------*/
sqr0E1.addEventListener('click',() => {
    sqr0E1.textContent = currentPlayer
})
sqr1E1.addEventListener('click',() => {
    sqr1E1.textContent = currentPlayer
})
sqr2E1.addEventListener('click',() => {
    sqr2E1.textContent = currentPlayer
})
sqr3E1.addEventListener('click',() => {
    sqr3E1.textContent = currentPlayer
})
sqr4E1.addEventListener('click',() => {
    sqr4E1.textContent = currentPlayer
})
sqr5E1.addEventListener('click',() => {
    sqr5E1.textContent = currentPlayer
})
sqr6E1.addEventListener('click',() => {
    sqr6E1.textContent = currentPlayer
})
sqr7E1.addEventListener('click',() => {
    sqr7E1.textContent = currentPlayer
})
sqr8E1.addEventListener('click',() => {
    sqr8E1.textContent = currentPlayer
})