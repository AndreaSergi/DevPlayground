import React, { useContext, useEffect, useState } from "react";
import "./Trix.css";
import { TrisButton } from "./TrisButton/TrisButton";
import { TrisThemeContext } from "./TrisThemeContext/TrisThemeContext";

const BOARD_SIZE = 3;

export function Trix() {
  const [board, setBoard] = useState(
    Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => null)
    )
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const theme = useContext(TrisThemeContext)

  function checkWinner() {
    // Check rows
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        setWinner(board[i][0]);

        setWinningCells([
          [i, 0],
          [i, 1],
          [i, 2],
        ]);
        return;
      }
    }

    // Check columns
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        setWinner(board[0][i]);

        setWinningCells([
          [0, i],
          [1, i],
          [2, i],
        ]);
        return;
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      setWinner(board[0][0]);

      setWinningCells([
        [0, 0],
        [1, 1],
        [2, 2],
      ]);
      return;
    }

    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      setWinner(board[0][2]);

      setWinningCells([
        [0, 2],
        [1, 1],
        [2, 0],
      ]);
      return;
    }

    // Check for draw
    if (!board.flat().includes(null)) {
      setWinner("Draw");
    }
  }

  function handleCellClick(row, col) {
    if (!board[row][col] && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      checkWinner();
    }
  }

  function renderCell(row, col) {
    const isWinningCell = winningCells.some(
      (cell) => cell[0] === row && cell[1] === col
    );
    return (
      <div
        className={`cell ${isWinningCell ? "winning-cell" : ""}`}
        key={`${row}-${col}`}
        onClick={() => handleCellClick(row, col)}
      >
        {board[row][col]}
      </div>
    );
  }

  function renderBoard() {
    return board.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => renderCell(rowIndex, colIndex))}
      </div>
    ));
  }

  const initializeBoard = () => {
    setBoard(
      Array.from({ length: BOARD_SIZE }, () =>
        Array.from({ length: BOARD_SIZE }, () => null)
      )
    );
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCells([]);
  };

  function checkWinnerAndAssignScore() {
    // Logica per controllare il vincitore rimane inalterata
    if (winner === "X") {
      setScoreX(scoreX + 1); // Assegna un punto a X
    } else if (winner === "O") {
      setScoreO(scoreO + 1); // Assegna un punto a O
    }
  }

  // function resetScore() {
  //   setScoreO(0)
  //   setScoreX(0)
  //   initializeBoard();
  // }

  useEffect(() => {
    checkWinnerAndAssignScore();
  }, [winner]);

  return (
    <div className="trix">
      <h1>Trix</h1>

      {!winner && <p>Current player: {currentPlayer}</p>}
      {winner && (
        <p>{winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}</p>
      )}

      <TrisButton onClick={initializeBoard}>Rematch</TrisButton>
      {/* <button onClick={initializeBoard}>
        Rivincita
      </button> */}

      <div className="board">
        <div className={theme === "light" ? "layer" : "layer dark"}> {renderBoard()}</div> 
        {/* <div className="layer"> {renderBoard()}</div> */}
      </div>

      <div className="scoreboard">
        <h2>Punteggio</h2>

        <p>Giocatore X: {scoreX}</p>
        <p>Giocatore O: {scoreO}</p>

        {/* <p><button onClick={resetScore}>Resetta il punteggio!</button></p> */}
      </div>
    </div>
  );
}
