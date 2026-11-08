/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X';
isGameOver = false;


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
    if (sqr0E1.textContent === '' || isGameOver === true) {
        sqr0E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
            message.textContent = `It's ${currentPlayer}'s turn`;
        } else {
            currentPlayer = 'X'
            message.textContent = `It's ${currentPlayer}'s turn`;
        }
    } else {
        return
    }
})
sqr1E1.addEventListener('click',() => {
    if (sqr1E1.textContent === '' || isGameOver === true) {
        sqr1E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr2E1.addEventListener('click',() => {
    if (sqr2E1.textContent === '' || isGameOver === true) {
        sqr2E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr3E1.addEventListener('click',() => {
    if (sqr3E1.textContent === '' || isGameOver === true) {
        sqr3E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr4E1.addEventListener('click',() => {
    if (sqr4E1.textContent === '' || isGameOver === true) {
        sqr4E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr5E1.addEventListener('click',() => {
    if (sqr5E1.textContent === '' || isGameOver === true) {
        sqr5E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr6E1.addEventListener('click',() => {
    if (sqr6E1.textContent === '' || isGameOver === true) {
        sqr6E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr7E1.addEventListener('click',() => {
    if (sqr7E1.textContent === '' || isGameOver === true) {
        sqr7E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})
sqr8E1.addEventListener('click',() => {
    if (sqr8E1.textContent === '' || isGameOver === true) {
        sqr8E1.textContent = currentPlayer
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

    } else {
        return
    }
    message.textContent = `It's ${currentPlayer}'s turn`;
})