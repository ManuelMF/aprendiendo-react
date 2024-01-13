import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { saveGameToStorage, resetGameStorage } from "./logic/storage"

function App() {
  //cargar la partida
  // const [board, setBoard] = useState(Array(9).fill(null))

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage 
    ? JSON.parse(boardFromStorage)
    : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(()=> {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null) //null no hay ganador, false empate

  const updateBoard = (index) => {
    // no actualizamos la app 
    // si ya tenemos algo o hay ganador
    if(board[index] || winner) return

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar partida
    saveGameToStorage({board: newBoard, turn: newTurn})

    // revisar ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)}
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className="board">
      <h1>Tic-tac-toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                 {square}
                </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>
        
      <WinnerModal resetGame={resetGame} winner={winner}>

      </WinnerModal>
    </main>
  )
}

export default App
