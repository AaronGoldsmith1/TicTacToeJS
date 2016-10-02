/*var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var xImage = "images/X.png"
var oImage = "images/O.png" */



var counter = 0;
var activePlayer = null;
var resetButton = document.getElementById("newGameButton");

var gameState = function {

buttons = document.getElementsByClassName("boardButton")

var playerXMove = function() {
  if (counter == 0) {

    for (var i = 0; i < buttons.length; i++){

      if (buttons[i].innerHTML=null){
      buttons[i].addEventListener(click, function() {
      buttons[i].innerHTML="<img src='images/X.png'/>";
      buttons[i].addAttribute(true);
        }
      }
    }
  activePlayer = "X"
  if (checkWin(); == false){
    counter++;
    playerOMove();
  }
  else {
    gameOver();
  }

}

var playerOMove = function(){
  if (counter == 1) {

    for (var i = 0; i < buttons.length; i++){

      if (buttons[i].innerHTML=null){
      buttons[i].addEventListener(click, function() {
      buttons[i].innerHTML="<img src='images/O.png'/>";
      buttons[i].addAttribute(true);
        }
      }
    }
    activePlayer = "O"
    if (checkWin() == false {
      counter--;
      playerXMove();
  }
    else {
      gameOver();
    }

}


var checkWin = function() {

        if(button1 == true && button2 == true && button3 == true){
            return true;
        }
        if(button4 == true && button5 == true && button6 == true){
            return true;
        }
        if(button7 == true && button8 == true && button9 == true){
            return true;
        }
        if(button1 == true && button4 == true && button7 == true){
            return true;
        }
        if(button2 == true && button5 == true && button8 == true){
            return true;
        }
        if(button3 == true && button6 == true && button9 == true){
            return true;
        }
        if(button1 == true && button5 == true && button9 == true){
            return true;
        }
        if(button3 == true && button5 == true && button7 == true){
            return true;
        }
        return false;
    }

}


var gameOver = function() {

  document.GetElementById("displayWinner").innerHTML= currentPlayer + " is the winner!";
}

var resetBoard = function() {

        restartButton.addEventListener("click", function {
          for (var i = 0; i < buttons.length; i++)
          buttons[i].innerHTML = null;
        }

}
