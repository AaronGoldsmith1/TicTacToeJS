
var imgX = document.createElement('img');
imgX.src = 'images/X.png';
var imgO = document.createElement('img');
imgO.src = 'images/O.png'

console.log(imgEl)
document.getElementById("button1").appendChild(imgEl);

//
// document.getElementById("button1").addEventListener("click", function(){
//   document.getElementById("button1").src(<"images/X.png">)
// })

/* var X.src = 'images/X.png';


document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("button1").appendChild(X);
})

*/









/* var board ={
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
var buttons = []

for (i=0; i < 9; i++){
board.buttons[i] = document.getElementsByClassName("boardButton");
}




(function() {
  if (counter == 0) {

    for (var i = 0; i < buttons.length; i++){

      if (board.button[i].innerHTML == ""){
      board.button[i].addEventListener('click', function() {
      board.button[i].style.backgroundImage = (xImage);
      board.button[i].addAttribute(true);
        })
      }
    }
  activePlayer = "O";
  if (checkWin() == false){
    counter++;
    playerOMove();
  }
  else {
    gameOver();
  }

}

function playerOMove(){
  if (counter == 1) {

    for (var i = 0; i < buttons.length; i++){

      if (buttons[i].innerHTML == "") {
      board.buttons[i].addEventListener('click', function() {
      console.log('click');
      board.buttons[i].appendChild(document.createElement(oImage));
      board.buttons[i].addAttribute(true);
        })
      }
    }
    activePlayer = "X";
    if (checkWin() == false) {
      counter--;

  }
    else {
      gameOver();
    }

}



}


var gameOver = function() {

  document.GetElementById("displayWinner").innerHTML= currentPlayer + " is the winner!";
}

var resetBoard = function() {

        restartButton.addEventListener("click", function() {
          for (var i = 0; i < buttons.length; i++)
          buttons[i].innerHTML = null;
        })

}
}
)()
*/
