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
    const cell = document.querySelectorAll('.cell');

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

    const checkWinn = (playerSymbol) => {

        let winCombo = [

            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winCombo.some(combination => {
             return combination.every(index => {
                
                return cell[index].classList.contains(playerSymbol);
                
            })
        })
        

    }



    return {createBoard, resetBoard, checkWinn}


})();










const Game = (() => {
    
    const cell = document.querySelectorAll('.cell');
    const playerO = Player("PlayerO", "circle",0, false);
    const playerX = Player("PlayerX", "x", 0, true);
    
    

    const init = () => {

       
        boardClick(cell);
        GameBoard.resetBoard();  
    }


  


    const winner = () => {

        if(GameBoard.checkWinn(playerX.getSymbol())) {

           console.log(`Der Gewinner ist ${playerX.getName()}`);
           return 
        }
        if(GameBoard.checkWinn(playerO.getSymbol())){

            console.log(`Der Gewinner ist ${playerO.getName()}`);
            return 
        }
       

    }

    const boardClick = (cell) => {

       
       

        //setzt symbol wenn auf das Gameboard geklickt wird.
        cell.forEach( (el) => {

            el.addEventListener('click', function(e) {


                    if(playerX.getStatus() == true && e.target.classList == 'cell'){

                        e.target.classList.add(playerX.getSymbol());
                        playerX.setStatus(); // playerX == false
                        playerO.setStatus(); // playerO == true
                        winner();
                    } 
                    if(playerO.getStatus() == true && e.target.classList == 'cell') {
    
                        e.target.classList.add(playerO.getSymbol());
                        playerO.setStatus(); // playerO == false;
                        playerX.setStatus(); // playerX == true;
                        winner();
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

   
    
    return {init, boardClick, winner}



})();

Game.init()







