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
    const playerDisplay = document.querySelector("#current-player")
    playerDisplay.textContent = `Current player: Player ${currentPlayer + 1}`
  }

  const checkWinner = () => {
    const board = gameBoard.board
    for (let i = 0; i < 3; i++) {
      if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i]) {
        return true
      }
      if (board[3 * i] === board[3 * i + 1] && board[3 * i] === board[3 * i + 2] && board[3 * i]) {
        return true
      }
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0]) {
      return true
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2]) {
      return true
    }
  }

  displayCurrentPlayer()

  const getBoard = Array.from(document.querySelectorAll("td"));
  for (let i = 0; i < getBoard.length; i++) {
    const box = getBoard[i];
    box.addEventListener("click", () => {
      if (box.textContent === "") {
        gameBoard.board[i] = (currentPlayer === 0 ? "x" : "o")
        gameBoard.displayBoard()
        if (checkWinner()) {
          document.querySelector("#winner").textContent = `Player ${currentPlayer + 1} won`
        }
        currentPlayer = (currentPlayer + 1) % 2
        displayCurrentPlayer()
      }
    })
  }
})();

