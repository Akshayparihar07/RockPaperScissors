const userChoiceDisplay = document.querySelector('.user-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const possibleUserChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;
const resultDisplay = document.getElementById('result')


possibleUserChoice.forEach(possibleChoice => addEventListener('click', (e) => {
      userChoice = e.target.id
      userChoiceDisplay.innerHTML = userChoice
      generateComputerChoice();
      getScores();
}))

function generateComputerChoice() {
      let randomNumber = Math.floor(Math.random() * 3) + 1
      if (randomNumber === 1) computerChoice = 'Rock🪨'
      if (randomNumber === 2) computerChoice = 'Paper📃'
      if (randomNumber === 3) computerChoice = 'Scissors✂️'
      computerChoiceDisplay.innerHTML = computerChoice
}


function getScores() {

      // COMPUTER WIN CASES
      if (computerChoice === 'Paper📃' && userChoice === 'Rock🪨') resultDisplay.innerHTML = 'You Lost'
      if (computerChoice === 'Scissors✂️' && userChoice === 'Paper📃') resultDisplay.innerHTML = 'You Lost'
      if (computerChoice === 'Rock🪨' && userChoice === 'Scissors✂️') resultDisplay.innerHTML = 'You Lost'

      // USER WIN CASES
      if (userChoice === 'Paper📃' && computerChoice === 'Rock🪨') resultDisplay.innerHTML = 'You Won'
      if (userChoice === 'Scissors✂️' && computerChoice === 'Paper📃') resultDisplay.innerHTML = 'You Won'
      if (userChoice === 'Rock🪨' && computerChoice === 'Scissors✂️') resultDisplay.innerHTML = 'You Won'

      // DRAW CASE
      if (userChoice === computerChoice) resultDisplay.innerHTML = "It's A Tie"

}
