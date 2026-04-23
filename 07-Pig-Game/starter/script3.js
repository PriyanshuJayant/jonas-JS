'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currPlayer = document.querySelector('.player--active')


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;



btnRoll.addEventListener('click', () => {
    let num = Math.trunc(Math.random() * 6) + 1;
    
    // Show dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;
    
    // Check if rolled 1
    if (num === 1) {
        switchPlayer();
    } else {
        // Add to current score only if NOT 1
        currentScore += num;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
})

btnHold.addEventListener('click', () => {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchPlayer();
    diceEl.classList.add('hidden');
})

btnNew.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Reset scores
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    
    // Reset UI
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    // Reset to player 0
    activePlayer = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    
    // Hide dice
    diceEl.classList.add('hidden');
})

function switchPlayer(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
}
