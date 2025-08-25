import { useState } from "react";

export function Input({ label, onChange }) {
  //   const [text, setText] = useState();

  function handleChangedText(event) {
    onChange(event.target.value);
  }
  return (
    <div>
      <label>{label}</label>
      <input type="number" onChange={handleChangedText}></input>
    </div>
  );
}
