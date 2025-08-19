'use strict';

//  Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let current1 = document.querySelector('#current--0');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


const btnRoll = document.querySelector('.btn--roll').addEventListener('click', function () {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    console.log(randomDice);

    if (randomDice === 1) {
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-1.png';
        console.log(`Active Player: ${activePlayer}`);
        currentScore = -1;
        activePlayer = 1;
        switchPlayer();

    } else if (randomDice === 2) {
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-2.png';
    } else if (randomDice === 3) {
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-3.png';
    } else if (randomDice === 4) {
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-4.png';
    } else if (randomDice === 5) {
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-5.png';
    } else if (randomDice === 6) {
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-6.png';
    }
    currentScore += randomDice;
    current1.textContent = currentScore;

    if (activePlayer === 1) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    }
});

function switchPlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

const btnHold = document.querySelector('.btn--hold').addEventListener('click', function () {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    switchPlayer();
    current1.textContent = 0;

});
