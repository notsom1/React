import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  let currentName = playerName;
  function handleEditButton() {
    setIsEditing((editing) => !editing);
    setPlayerName(currentName);
  }

  function handleChange(event) {
    currentName = event.target.value;
    //setPlayerName(event.target.value);
  }

  let playerTag = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerTag = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li>
      <span className="player">
        {playerTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditButton()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
