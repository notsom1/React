export default function GameBoard({ onSquareClicked, board }) {
  // function handleCellClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const newGameBoard = [...prevGameBoard.map((row) => [...row])];
  //     newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newGameBoard;
  //   });

  //   onSquareClicked();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSquareClicked(rowIndex, colIndex)}
                  disabled={col !== null}
                >
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
