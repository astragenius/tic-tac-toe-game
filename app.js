'use strict';

const Player = (name, symbol, num, status) => {

    let point = num;
    const getName = () => name;
    const getSymbol = () => symbol;
    const getPoint = () => point;
    const addPoint = (num) => point = point + num;
    const getStatus = () => status;
    const setStatus = () => {

        if(status == true) {
            status = false;
        }else {
            status = true;
        }
        return status
    }
 
    return {getPoint, addPoint, getName, getSymbol, getStatus, setStatus}

}







const GameBoard = (() => {

    const resetBtn = document.getElementById("resetBtn");

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


    const resetBoard = () => {
        const cell = document.querySelectorAll('.cell');

        resetBtn.addEventListener('click', function() {

                cell.forEach(el => {

                    if(el.classList[1] == "x"){

                        el.classList.remove("x");
                        
                    }
                    if(el.classList[1] == "circle") {

                        el.classList.remove('circle');
                    }
                })
        })

    }

    const checkWinn = () => {

        // checkt das aktuelle gameBoard ob ein sieger feststeht.
        // ob das gleiche symbol in einer reiher oder queer ist.
        // und wenn welches symbol gewonnen hatt.
    }



    return {createBoard, resetBoard}


})();










const Game = (() => {
    
    const cell = document.querySelectorAll('.cell');
    const playerO = Player("PlayerO", "circle",0, false);
    const playerX = Player("PlayerX", "x", 0, true);
    
    

    const init = () => {

        
        boardClick(cell);
        GameBoard.resetBoard();
        
       

    }


   

    const boardClick = (cell) => {

       

        //setzt symbol wenn auf das Gameboard geklickt wird.
        cell.forEach( (el) => {

            el.addEventListener('click', function(e) {
                
                if(playerX.getStatus() == true && e.target.classList == 'cell'){

                    e.target.classList.add(playerX.getSymbol());
                    playerX.setStatus(); // playerX == false
                    playerO.setStatus(); // playerO == true
                } 
                if(playerO.getStatus() == true && e.target.classList == 'cell') {

                    e.target.classList.add(playerO.getSymbol());
                    playerO.setStatus(); // playerO == false;
                    playerX.setStatus(); // playerX == true;
                }

            })
        })
    }

    

    const choseSymbol = () => {
        const xBtn = document.getElementById("xBtn");
        const oBtn = document.getElementById("oBtn");

        xBtn.addEventListener('click', function() {

          
            xBtn.classList.add("no");
            oBtn.classList.add('no');
        })

        oBtn.addEventListener('click', function() {

           
            xBtn.classList.add("no");
            oBtn.classList.add('no');
        })



    }

   
    
    return {init, boardClick}



})();

Game.init()





