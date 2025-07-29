import Player from "./components/player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X"></Player>
          <Player name="Player2" symbol="O"></Player>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
