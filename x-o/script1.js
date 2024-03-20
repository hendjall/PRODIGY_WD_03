
const PLAYER_X = 'X';
const PLAYER_O = 'O';


let currentPlayer = PLAYER_X;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;


function handleCellClick(cellIndex) {
  if (gameActive && gameBoard[cellIndex] === '') {
    
    gameBoard[cellIndex] = currentPlayer;
    
    renderGameBoard();
   
    checkWinCondition();
    
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  }
}


function checkWinCondition() {
  
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  
  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      
      document.getElementById(`cell-${a}`).classList.add('win');
      document.getElementById(`cell-${b}`).classList.add('win');
      document.getElementById(`cell-${c}`).classList.add('win');
    
      gameActive = false;
      return;
    }
  }

  
  if (!gameBoard.includes('')) {
    gameActive = false;
  }
}


function resetGame() {

  currentPlayer = PLAYER_X;
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('win');
  });
}


function renderGameBoard() {
  gameBoard.forEach((symbol, index) => {
    document.getElementById(`cell-${index}`).textContent = symbol;
  });
}


document.querySelectorAll('.cell').forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

function checkWinCondition() {
   
    const winCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
    ];
  
    
    for (let combination of winCombinations) {
      const [a, b, c] = combination;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        
        document.getElementById(`cell-${a}`).classList.add('win');
        document.getElementById(`cell-${b}`).classList.add('win');
        document.getElementById(`cell-${c}`).classList.add('win');
      
        showMessage(`${gameBoard[a]} wins!`);
       
        gameActive = false;
        return;
      }
    }
  
    
    if (!gameBoard.includes('')) {
    
      showMessage("It's a draw!");
      gameActive = false;
    }
  }
  
  function showMessage(message) {
    alert(message);
  }
  