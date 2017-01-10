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
        $scope.checkBoard = function(){
            $scope.boardX = [false,false,false,false,false,false,false,false,false];
            $scope.boardO = [false,false,false,false,false,false,false,false,false];
            //building the two arrays
            for (key in $scope.firebase.board){
                if ($scope.firebase.board[key] == 1){
                    $scope.boardX[key] = true;

                }else if ($scope.firebase.board[key] == 2){
                    $scope.boardO[key] = true;
                }
            }

            if($scope.checkWinningCondition($scope.boardX)){
                $scope.gameover = true;
                $scope.firebase.$update({"title":"=== P1 Wins ==="});
            }else if($scope.checkWinningCondition($scope.boardO)){
                $scope.gameover = true;
                $scope.firebase.$update({"title":"=== P2 Wins ==="});
            }else {
                console.log("=== No Winner Yet ==");
            }
        }

        $scope.checkWinningCondition = function(BoardXO){
            if(BoardXO[0] == true && BoardXO[1] == true && BoardXO[2] == true){
                return true;
            }
            if(BoardXO[3] == true && BoardXO[4] == true && BoardXO[5] == true){
                return true;
            }
            if(BoardXO[6] == true && BoardXO[7] == true && BoardXO[8] == true){
                return true;
            }
            if(BoardXO[0] == true && BoardXO[3] == true && BoardXO[6] == true){
                return true;
            }
            if(BoardXO[1] == true && BoardXO[4] == true && BoardXO[7] == true){
                return true;
            }
            if(BoardXO[2] == true && BoardXO[5] == true && BoardXO[8] == true){
                return true;
            }
            if(BoardXO[0] == true && BoardXO[4] == true && BoardXO[8] == true){
                return true;
            }
            if(BoardXO[2] == true && BoardXO[4] == true && BoardXO[6] == true){
                return true;
            }
            return false;
        }

        $scope.reset = function(){
            $scope.firebase.board = [0,0,0,0,0,0,0,0,0];
            $scope.firebase.title = "Tic Tac Toe";
            $scope.firebase.turn = 0;
            $scope.firebase.players = [{"nick":"","score":0},{"nick":"","score":0}];
            $scope.firebase.$save("title");
            $scope.firebase.$save("board");
            $scope.firebase.$save("turn");
            $scope.firebase.$save("players");
    		$scope.player = 0;
    	    $scope.nick = "";
    		$scope.message = $scope.checkPlayers();
            $scope.gameover = false;

        }

        $scope.updateBoard = function(slot,player){
            switch(slot){
                        case 0:$scope.firebase.$child("board").$update({0:player});
                        break;
                        case 1:$scope.firebase.$child("board").$update({1:player});
                        break;
                        case 2:$scope.firebase.$child("board").$update({2:player});
                        break;
                        case 3:$scope.firebase.$child("board").$update({3:player});
                        break;
                        case 4:$scope.firebase.$child("board").$update({4:player});
                        break;
                        case 5:$scope.firebase.$child("board").$update({5:player});
                        break;
                        case 6:$scope.firebase.$child("board").$update({6:player});
                        break;
                        case 7:$scope.firebase.$child("board").$update({7:player});
                        break;
                        case 8:$scope.firebase.$child("board").$update({8:player});
                        break;
            }
        }


        $scope.play = function(slot){
            //when turn % 2 == 0 then the P2 should make a move
            //when turn % 2 == 1 then the P1 should make a move
            //We check the board after updating the board too since the listener trigger only triggers when you receive data and not when you send.
            //Also there is a condition to let the user play only if the game is not over.
            if($scope.gameover == false){
                if ($scope.player == 1){
                    //Playing as X
                    if($scope.firebase.turn % 2 == 1 && $scope.firebase.turn>0){
                        var currentTurn = $scope.firebase.turn;
                        currentTurn++;
                        $scope.firebase.turn = currentTurn;
                        $scope.firebase.$save("turn");
                        $scope.updateBoard(slot,1);
                        $scope.checkBoard();
                    }
                }
                else if ($scope.player == 2){
                    //Playing as O
                    if($scope.firebase.turn % 2 == 0 && $scope.firebase.turn>0){
                        var currentTurn = $scope.firebase.turn;
                        currentTurn++;
                        $scope.firebase.turn = currentTurn;
                        $scope.firebase.$save("turn");
                        $scope.updateBoard(slot,2);
                        $scope.checkBoard();
                    }
                }

            }
        }

     }
