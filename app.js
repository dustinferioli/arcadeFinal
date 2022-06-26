document.addEventListener("DOMContentLoaded", () => {
    const gameState = {
        players: ['x', 'o'],
        board: [null, null, null, 
                null, null, null, 
                null, null, null]
    };

    let xPlayer = gameState.players[0];
    let oPlayer = gameState.players[1];
    let tttBoard = [null, null, null, 
                    null, null, null, 
                    null, null, null];
    let currentPlayer = xPlayer;
    let turnCount = 0;

    // let playerXName = document.getElementById('xname');
    // let playerOName = document.getElementById('oname');



    
    let playerTurn = document.getElementById('playerturn');

    // let winConds = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ];    

    let gameBoard = document.getElementById('board');
    create3x3Grid();
    function create3x3Grid() {
        gameBoard.style.cursor = "pointer";
        for (let i = 0; i < 9; i++){
            let allTiles = document.createElement('div');
            allTiles.classList.add('tile');
            allTiles.setAttribute('data-value', i);
            gameBoard.appendChild(allTiles);
        }
    }

    let tile = document.getElementsByClassName("tile");
    function ticTacToeFunc(event){
        let tileValue = event.target.dataset.value
        function switchPlayers(){
            if (currentPlayer === xPlayer){
                event.target.innerHTML = 'x';
                event.target.style.color = 'white';
                playerTurn.innerHTML = (`It is player O's turn.`);
                event.target.style.cursor = 'not-allowed';
                tttBoard.splice(tileValue, 1, 'x')
                currentPlayer = oPlayer;
                turnCount++;
                console.log(tttBoard);
                // event.target.readOnly = 'true';
                // event.target.style.pointerEvents = 'none';
            } else {
                event.target.innerText = 'o';
                event.target.style.color = 'white';
                // event.target.style.cursor = 'not-allowed';
                // event.target.style.pointerEvents = 'none';
                playerTurn.innerHTML = (`It is player X's turn.`);
                tttBoard.splice(tileValue, 1, 'o');
                currentPlayer = xPlayer;
                turnCount++
                console.log(tttBoard);
                event.target.style.cursor = 'not-allowed';
            }
        }
        switchPlayers();

        function xWin3x3(){
            if (tttBoard[0] === 'x' && tttBoard[0] === tttBoard[1] && tttBoard[1] === tttBoard[2] || 
            tttBoard[3] === 'x' && tttBoard[3] === tttBoard[4] && tttBoard[4] === tttBoard[5] ||
            tttBoard[6] === 'x' && tttBoard[6] === tttBoard[7] && tttBoard[7] === tttBoard[8] ||
            tttBoard[0] === 'x' && tttBoard[0] === tttBoard[3] && tttBoard[3] === tttBoard[6] ||
            tttBoard[1] === 'x' && tttBoard[1] === tttBoard[4] && tttBoard[4] === tttBoard[7] ||
            tttBoard[2] === 'x' && tttBoard[2] === tttBoard[5] && tttBoard[5] === tttBoard[8] ||
            tttBoard[0] === 'x' && tttBoard[0] === tttBoard[4] && tttBoard[4] === tttBoard[8] ||
            tttBoard[2] === 'x' && tttBoard[2] === tttBoard[4] && tttBoard[4] === tttBoard[6]){
                gameBoard.style.pointerEvents = "none";
                playerTurn.innerHTML = 'Player X wins!'
                window.alert ('Player X wins!');
            }    
        }
        xWin3x3();

        function oWin3x3(){
            if (tttBoard[0] === 'o' && tttBoard[0] === tttBoard[1] && tttBoard[1] === tttBoard[2] || 
            tttBoard[3] === 'o' && tttBoard[3] === tttBoard[4] && tttBoard[4] === tttBoard[5] ||
            tttBoard[6] === 'o' && tttBoard[6] === tttBoard[7] && tttBoard[7] === tttBoard[8] ||
            tttBoard[0] === 'o' && tttBoard[0] === tttBoard[3] && tttBoard[3] === tttBoard[6] ||
            tttBoard[1] === 'o' && tttBoard[1] === tttBoard[4] && tttBoard[4] === tttBoard[7] ||
            tttBoard[2] === 'o' && tttBoard[2] === tttBoard[5] && tttBoard[5] === tttBoard[8] ||
            tttBoard[0] === 'o' && tttBoard[0] === tttBoard[4] && tttBoard[4] === tttBoard[8] ||
            tttBoard[2] === 'o' && tttBoard[2] === tttBoard[4] && tttBoard[4] === tttBoard[6]){
                window.alert ('Player O wins!');
                gameBoard.style.pointerEvents = "none";
                playerTurn.innerHTML = 'Player O wins!'
            }    
        }
        oWin3x3();

        function gameTie(){
            if (turnCount > 7){
                alert(`It's a draw!`);
                playerTurn.innerHTML = `It's a draw!`;
                gameBoard.style.pointerEvents = "none";
            }
        }
        gameTie();
    
    }
    board.addEventListener('click', ticTacToeFunc);


    let resetButton = document.getElementById('reset');
    function resetGame(){
        tttBoard = [null, null, null, 
            null, null, null, 
            null, null, null];
        currentPlayer = xPlayer;
        turnCount = 0;
        gameBoard.replaceChildren();
        playerTurn.innerHTML = 'Place a tile to begin game.';
        create3x3Grid();

    }
    resetButton.addEventListener('click', resetGame);
    resetGame();

    let cpuButton = document.getElementById('CPU');
    
    function playCPU (event){
        resetGame();
        let tileValue = event.target.dataset.value
        if (currentPlayer === xPlayer){
            // event.target.innerHTML = 'x';
            // event.target.style.color = 'white';
            playerTurn.innerHTML = (`It is player O's turn.`);
            event.target.style.cursor = 'not-allowed';
            tttBoard.splice(tileValue, 1, 'x')
            currentPlayer = oPlayer;
            turnCount++;
            console.log(tttBoard);
        } else {
            // target.innerText = 'o';
            // target.style.color = 'white';
            playerTurn.innerHTML = (`It is the CPU's turn.`);
            for (i = 0; i <= tttBoard.length; i++){
                if (tttBoard[i] == ''){
                    tttBoard.splice(tileValue, 1, 'o');
                }
            }
            currentPlayer = xPlayer;
            turnCount++
            console.log(tttBoard);
            target.style.cursor = 'not-allowed';
        }
    }
    cpuButton.addEventListener('click', playCPU);












})