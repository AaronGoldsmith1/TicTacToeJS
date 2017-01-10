 var myApp = angular.module("TicTacToe", ["firebase"]);


 function MainCtrl($scope, $firebase, $timeout) {

   	 $scope.player = 0;
     $scope.nick = "";
     $scope.message = "";
     $scope.gameover = false;

     //Lets start by making a simple connection to the firebase
     var firebase = new Firebase("https://tictactoe123456789.firebaseio.com/");
     //We can use Once to trigger a function like an onLoad. After the First data finishes loading, we trigger our function
     firebase.once('value', function(dataSnapshot) {
     $scope.message = $scope.checkPlayers();
        });
     //here we store the values of the firebase in a firebase AngularJS variable
     $scope.firebase = $firebase(firebase);

     $scope.firebase.$child("board").$on('child_changed', function(childSnapshot, prevChildName)  {
        	$timeout($scope.checkBoard,150);
    	});
