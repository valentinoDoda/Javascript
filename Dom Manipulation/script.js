'use strict';

// Selecting and Manipulating Elements

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Guess My Number Challenge

let guessNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heightscore = 0;
let message = document.querySelector('.message');
let scoreMsg = document.querySelector('.score');
let heightScoreMsg = document.querySelector('.highscore');
let secretNumber = document.querySelector('.number');
document.querySelector('.check').addEventListener('click', function () {
  let userNumber = Number(document.querySelector('.guess').value);
  console.log(userNumber);
  if (!userNumber || !(userNumber < 21 && userNumber > 0)) {
    message.textContent = 'Not correct input';
  } else {
    if (guessNumber === userNumber) {
      message.textContent = 'You win !!';
      secretNumber.textContent = guessNumber;
      secretNumber.style.width = "30rem";
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > heightscore) {
        heightscore = score;
        heightScoreMsg.textContent = heightscore;
      }
    } else {
      if (score > 0) {
        score--;

        if (userNumber > guessNumber) {
          message.textContent = `${userNumber} is Bigger than the number you search for`;
        } else {
          message.textContent = `${userNumber} is Smaller than the number you search for`;
        }
        scoreMsg.textContent = score;
      }
    }
  }
  document.querySelector('.guess').value =" ";
  
});

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "#222";
    score = 20;
    guessNumber = Math.trunc(Math.random() * 20 + 1);
    secretNumber.textContent = "?";
    message.textContent = "Start guessing...";
    scoreMsg.textContent = score;
})