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
var activePlayer = "X";

var resetButton = document.getElementById("newGameButton");
var buttons = document.getElementsByClassName("boardButton");

var gameState = function {

var playerXMove = function() {
  if (counter == 0) {

    for (var i = 0; i < buttons.length; i++){

      if (buttons[i].innerHTML == ""){
      buttons[i].addEventListener('click', function() {
      buttons[i].innerHTML="<img src='images/X.png'/>";
      buttons[i].addAttribute(true);
        }
      }
    }
  activePlayer = "O";
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

      if (buttons[i].innerHTML == "") {
      buttons[i].addEventListener('click', function() {
      buttons[i].innerHTML="<img src='images/O.png'/>";
      buttons[i].addAttribute(true);
        }
      }
    }
    activePlayer = "X";
    if (checkWin() == false) {
      counter--;
      playerXMove();
  }
    else {
      gameOver();
    }

}


var checkWin = function() {

        if(board.button1 == true && board.button2 == true && board.button3 == true){
            return true;
        }
        if(board.button4 == true && board.button5 == true && board.button6 == true){
            return true;
        }
        if(board.button7 == true && board.button8 == true && board.button9 == true){
            return true;
        }
        if(board.button1 == true && board.button4 == true && board.button7 == true){
            return true;
        }
        if(board.button2 == true && board.button5 == true && board.button8 == true){
            return true;
        }
        if(board.button3 == true && board.button6 == true && board.button9 == true){
            return true;
        }
        if(board.button1 == true && board.button5 == true && board.button9 == true){
            return true;
        }
        if(board.button3 == true && board.button5 == true && board.button7 == true){
            return true;
        }
        else {
          return false;
        }
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
