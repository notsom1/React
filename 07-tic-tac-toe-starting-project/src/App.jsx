import GameBoard from "./components/GameBoard";
import Player from "./components/player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSquareClicked() {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X"></Player>
          <Player name="Player2" symbol="O"></Player>
        </ol>
        <GameBoard
          onSquareClicked={handleSquareClicked}
          activePlayerSymbol={activePlayer}
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
