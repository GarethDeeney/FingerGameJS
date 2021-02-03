//jshint esversion: 6


guessGame();

function guessGame() {

  var result = document.querySelector(".result");
  var button = document.querySelector(".button");
  var heading2 = document.querySelector("h2");
  var finger = Math.floor(Math.random() * 6);
  console.log(finger); //- checks random number
  var count = 5;

  // Click event listener for button
  button.addEventListener("click", function() {

    // Stores user guess
    var guess = document.querySelector(".guess").value;

    //Checks guess against random number, if wrong adds 1 to amount of guesses.
    if (count > 0){

     if(guess > finger) {
      count--;
      heading2.innerHTML = "You have " + count + " guesses left.";
      //console.log(count);
      result.innerHTML = "Too High! Try Again";
    } else if (guess < finger){
      count--;
      heading2.innerHTML = "You have " + count + " guesses left.";
      //console.log(count);
      result.innerHTML = "Too low! Try Again";
    } else {
      result.innerHTML = "Well Done! The correct answer was " + finger + ". It took you " + count + " guesses.";
    }
  } else {
    heading2.innerHTML = "Sorry You have no guesses left.";
  }

  });
}
