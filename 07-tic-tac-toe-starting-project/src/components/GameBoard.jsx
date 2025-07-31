import { useState } from "react";
const initialGameBoard = [
  [[null], [null], [null]],
  [[null], [null], [null]],
  [[null], [null], [null]],
];

export default function GameBoard({ onSquareClicked, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleCellClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard.map((row) => [...row])];
      newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return newGameBoard;
    });

    onSquareClicked();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleCellClick(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
