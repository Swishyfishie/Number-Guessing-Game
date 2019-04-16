// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements 
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessButton = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//generate random number
winningNum = Math.floor(1 + Math.random() * max);
console.log(winningNum);


// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//play again event listener 
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
  window.location.reload();
  }
});


//listen for guess button
guessButton.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  //validate input 
  if(guess < min || isNaN(guess) || guess > max){
    setMessage( `Enter a value between ${min} and ${max}`, "red");
    return false;
  } else {
    setMessage();
  };

  //check if won 
  if(guess == winningNum){
    setMessage(`Your winning number is ${winningNum}!`, "green"),
    guessInput.disabled = true;
    guessInput.style.background = "grey";
    guessButton.value = "Play Again";
    guessButton.className = 'play-again';

  } else {
    guessesLeft -= 1;

    if(guessesLeft === 0){
      //GameOver
      guessInput.disabled = true;
      guessInput.style.background = "grey";
      setMessage(`You Lost! The correct number was ${winningNum}`);
      guessInput.value = '';
      //play again
      guessButton.value = "Play Again";
      guessButton.className = 'play-again';
    } else {
      //game continues - answer wrong.
      setMessage(`Wrong answer. You have ${guessesLeft} guesses left!`);
      guessInput.value = '';
    }
    

  }
  

});


function setMessage(msg, color){
  message.style.background = color;
  message.textContent = msg;
}
