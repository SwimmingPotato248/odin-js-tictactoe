const gameBoard = (() => {
  let board = new Array(9)
  const displayBoard = () => { 
    const getBoard = Array.from(document.querySelectorAll("td"));
    for (let i = 0; i < getBoard.length; i++) {
      getBoard[i].textContent = gameBoard.board[i]
    }
  }
  return { board, displayBoard }
})();

const displayController = (() => {

  let currentPlayer = 0

  const displayCurrentPlayer = () => {
    
  }

  const getBoard = Array.from(document.querySelectorAll("td"));
  for (let i = 0; i < getBoard.length; i++) {
    const box = getBoard[i];
    box.addEventListener("click", () => {
      if (box.textContent === "") {
        gameBoard.board[i] = (currentPlayer === 0 ? "x" : "o")
        gameBoard.displayBoard()
        currentPlayer = (currentPlayer + 1) % 2
      }
    })
  }
})();

