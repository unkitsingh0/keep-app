import React, { useState } from "react";
import "./css/keep.css";
import InputBox from "./InputBox";
function Keep() {
  let [title, setTitle] = useState("");
  let [note, setNote] = useState("");
  let [notes, setNotes] = useState([]);

  let addNote = () => {
    setNotes([...notes, { title, note }]);
  };
  //   console.log(notes);
  return (
    <>
      <div className="inputbox-div">
        <InputBox
          onTitle={(data) => setTitle(data)}
          onNote={(data) => setNote(data)}
        />
        <button onClick={addNote}>+</button>
      </div>
      <div className="keep">
        {notes.map((item, index) => {
          return (
            <>
              <div key={index} className="note-div">
                <p>{item.title}</p>
                <p>{item.note}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Keep;
