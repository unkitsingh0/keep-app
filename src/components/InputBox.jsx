import React from "react";
import "./css/inputbox.css";
function InputBox({ onTitle, onNote }) {
  return (
    <>
      <div className="keep-inputbox">
        <input
          type="text"
          placeholder="write something"
          onChange={(e) => onTitle(e.target.value)}
        />
        <input type="text" onChange={(e) => onNote(e.target.value)} />
      </div>
    </>
  );
}

export default InputBox;
