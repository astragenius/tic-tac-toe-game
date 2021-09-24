const Player = (name, symbol, num) => {

    let point = num;
    const getName = () => name;
    const getSymbol = () => symbol;
    const getPoint = () => point;
    const addPoint = (num) => point = point +num;
 
    return {getPoint, addPoint, getName, getSymbol}

}






const GameBoard = (() => {

    let board = [];

    const createBoard = () => {
        // Kreiert ein neues leeres gameBoard
        for(var i = 0; i < 3; i++) {
            let subArray = [];
            board.push(subArray);

            for(var j = 0; j < 3; j++) {

                subArray.push("");
            }
        }
        console.table(board);
    }

    const updateBoard = () => {

        // sollte nur abschecken welche elemente sich auf dem board befinden
    }

    const setSymbol = (symbol, position) => {

        // soll symbol im board bei angegebener position setzen

    }

    const checkBoard = (symbol, position) => {

        // checkt das aktuelle board ab ob das symbol auf der position schon besetzt ist.

    }

    const checkWinn = () => {

        // checkt das aktuelle gameBoard ob ein sieger feststeht.
        // ob das gleiche symbol in einer reiher oder queer ist.
        // und wenn welches symbol gewonnen hatt.
    }



    return {createBoard, updateBoard}


})();


const Game = (() => {

   

    const init = () => {


    }

    const boardClick = () => {

        //setzt symbol wenn auf das Gameboard geklickt wird.
    }

    const createPlayer = () => {

        // Spieler objecte werden kreiert
        // Player Factory Function wird aufgerufen
    }

    const renderBoard = (board) => {

        // gameboard wird im DOM geredert
    }


    const updateDisplay = () => {

        // gameBoard wird im DOM nach jedem Spieler zug neu gerendert.
        // aktuelles board wird vom gameBoard Objekt geholt.
    }







})();