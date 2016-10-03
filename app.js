var board ={

button1 : document.getElementById("button1"),
button2 : document.getElementById("button2"),
button3 : document.getElementById("button3"),
button4 : document.getElementById("button4"),
button5 : document.getElementById("button5"),
button6 : document.getElementById("button6"),
button7 : document.getElementById("button7"),
button8 : document.getElementById("button8"),
button9 : document.getElementById("button9"),
xImage : "<img src = 'images/X.png'></img>",
oImage : "<img src = 'images/O.png'></img>",
}





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
