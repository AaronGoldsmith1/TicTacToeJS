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

      $scope.checkPlayers = function(){
        $("#JoinGameForm").show();
        $("#info").hide();
        if ($scope.firebase.players[0].nick == ""){
            $scope.player = 1;
            $("#joinGameBtn").attr("disabled", false);
            return "P1 - Available";
        }
        else if ($scope.firebase.players[1].nick == ""){
            $scope.player = 2;
            $("#joinGameBtn").attr("disabled", false);
            return "P2 - Available";
        }
        else {
            $scope.player = 0;
            $("#joinGameBtn").attr("disabled", true);
            return "No Slots Available";
        }
    }

        $scope.addPlayer = function(){
            console.log("click");
            if($scope.nick != ""){
                if ($scope.player == 1){
                    $scope.firebase.$child("players").$child("0").$update({"nick":$scope.nick});
                    $("#JoinGameForm").hide();
                    $("#info").show();
                }
                else if ($scope.player == 2){
                    var player2 = new Firebase("https://tictactoe123456789.firebaseio.com/players/1");
                    $scope.firebase.$child("players").$child("1").$update({"nick":$scope.nick});
                    $("#JoinGameForm").hide();
                    $("#info").show();
                    $scope.firebase.turn = 1;
                    $scope.firebase.$save("turn");
                }
            }else{
                console.log("You need to choose a nickname");
            }
        }
