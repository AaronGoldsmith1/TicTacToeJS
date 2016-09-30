
var board = document.getElementById('boardDiv');
	var boardSize = 3;

	var loadBoard = function() {



		for ( var y = 0; y < boardSize; y++ ) {

			var rowDiv = document.createElement('div');

			for ( var x = 0; x < boardSize; x++ ) {

				var button = document.createElement( 'button' );
				

				rowDiv.appendChild( button );
			}

			board.appendChild( rowDiv );
		}
	}

	loadBoard();
