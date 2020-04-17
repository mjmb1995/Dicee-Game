"use strict";

var randomNumber1 = 0;
var randomNumber2 = 0;
var playButton = document.getElementsByClassName('button')[0];
var winnerSection = document.getElementsByClassName('winner')[0];
var diceImg1 = document.getElementsByClassName("img1")[0];
var diceImg2 = document.getElementsByClassName("img2")[0];

function generateNumber() {
  return (Math.floor(Math.random() * 6) + 1);
}

function updateDiceImg(){
  diceImg1.setAttribute("src", `assets/images/dice${randomNumber1}.png`);
  diceImg2.setAttribute("src", `assets/images/dice${randomNumber2}.png`);
}

function calculateWinner(){
  if (randomNumber1 > randomNumber2) {
    winnerSection.innerText = 'Player 1 Wins!';
  } else if (randomNumber1 < randomNumber2){
    winnerSection.innerText = 'Player 2 Wins!';
  } else {
    winnerSection.innerText = 'Draw!';
  }
}

function rollDice() {
  randomNumber1 = generateNumber();
  randomNumber2 = generateNumber();
  updateDiceImg();
  calculateWinner();
}

playButton.addEventListener("click", rollDice);
