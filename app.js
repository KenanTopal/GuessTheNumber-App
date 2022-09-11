var randomNumber = Math.ceil(Math.random()*100);
var guesses = document.querySelector('.guesses');
var guessfield = document.querySelector('.guess-field');
var resultEl = document.querySelector('.p-1');
var body = document.querySelector('.body');
var checkBtn = document.querySelector('.check-btn');
var attempts = document.querySelector('.p-2');
var countAttempts = document.querySelector('#attempted');
var guessCount = 1;
var body = document.querySelector('body');
var warning = document.querySelector('.warning')
var currentScore = 0;
var newGameBtn = document.querySelector('.new-game');


checkBtn.addEventListener('click', function(){
  var userGuess = document.querySelector('.guess-field').value;
  if(userGuess < 0 || userGuess > 100){
    alert('please enter a valid number');
    guessfield.value = '';
    return;
  }

  if(randomNumber==userGuess){
    let background = document.querySelector('body')
    background.style.backgroundImage = 'linear-gradient(to bottom right, rgb(80, 160, 86), rgb(172, 172, 159))'
    resultEl.textContent = `Congrats! Your number ${userGuess} is the right number!`
    warning.textContent = '';
  } else {
    resultEl.textContent = `Wrong!`;
    if(userGuess < randomNumber){
      warning.textContent = `Too low. The number is greater than ${userGuess} `
    } else if (userGuess > randomNumber){
      warning.textContent = `Too high. The number is smaller than ${userGuess}`
    }
  }
  currentScore++;
  countAttempts.textContent = currentScore;
  guessfield.value = '';
})
;

newGameBtn.addEventListener('click', function(){
  let background = document.querySelector('body')
  randomNumber = Math.ceil(Math.random()*100);
  resultEl.textContent = `Write the Number`;
  warning.textContent = '';
  background.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 160, 86), rgb(172, 172, 159))';
  countAttempts.textContent = 0;
  currentScore = 0;
  countAttempts.textContent = currentScore;
  guessfield.value = '';
})

