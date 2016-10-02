console.log("hi")

var counter = 0;
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var xImage = "images/X.png"
var oImage = "images/O.png"
var resetButton = document.getElementById("newGameButton");



document.getElementById("button1").onclick




var playerXMove = function () {
  if (counter == 0) {

document.getElementsByClassName("boardButton").addEventListener('click', function (){document.getElementsByClassName("boardButton").innerHtml = xImage})
  }
  counter++;
  playerOMove();
}

var playerOMove = function (){
  if (counter == 1) {}
  document.getElementsByClassName("boardButton").addEventListener('click', function (){document.getElementsByClassName("boardButton").innerHtml = oImage})
    }
    counter++;
    playerOMove();

counter ++
playerXMove();
