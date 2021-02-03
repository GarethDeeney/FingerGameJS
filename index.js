//jshint esversion: 6


guessGame();

function guessGame() {

  var result = document.querySelector(".result");
  var button = document.querySelector(".button");
  var finger = Math.floor(Math.random() * 6);

  button.addEventListener("click", function() {

    var guess = document.querySelector(".guess").value;

    if (guess == finger) {
      result.innerHTML = "Well done you guessed it!";
    } else {
      result.innerHTML = "Sorry, the right answer was " + finger;
    }
    
  });
}
