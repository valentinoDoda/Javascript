'use strict';
/*
1. user roll
2. user hold 
3. user reset game

*/
// const user1 = {
//     name : "",
//     currentScore : ""
// }

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

score0El.textContent = '0';
score1El.textContent = '0';
let playing = true;
let scores = [0, 0];
//Rolling Btn Functionallity
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    console.log(randomDice);
    diceEl.src = `dice-${randomDice}.png`;

    if (randomDice == 1) {
      playerChanging();
      // switch player
    } else {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    if (scores[activePlayer] >= 20) {
      playing = false;
      showingPlayersScore();
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      showingPlayersScore();
      playerChanging();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  scores = [0, 0];
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  showingPlayersScore();
  playerChanging();
  playing = true;
});

function showingPlayersScore() {
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
}
function playerChanging() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.player--0').classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
}
