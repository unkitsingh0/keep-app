import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openOrCloseINput } from "../redux/slices/inputSlice";
import { addTodo } from "../redux/slices/inputDataSlice";
import "./css/inputs.css";

function Inputs() {
  let [title, setTitle] = useState("");
  let [take_note, setTake_note] = useState("");
  let data = useSelector((state) => state);
  // console.log(data.childNote.active);
  let dispatch = useDispatch();
  let inputDisplay = data.input ? "" : "disNone";
  let titleStyle = data.input ? "" : "titleDisplay";
  let inputPlachoder = data.input
    ? { title: "Title", note: "Take Note" }
    : { title: "Take Note", note: "" };
  let handelFormClick = (e) => {
    e.stopPropagation();
    dispatch(openOrCloseINput(true));
  };
  let handelFormSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTodo({ title, take_note }));
    }
    dispatch(openOrCloseINput(false));
    setTitle("");
    setTake_note("");
  };

  return (
    <>
      <form
        className={`inputs ${data.childNote.active ? "displayNone" : ""} `}
        onClick={(e) => {
          handelFormClick(e);
        }}
        onSubmit={handelFormSubmit}
      >
        <input
          type="text"
          placeholder={inputPlachoder.title}
          className={`title ${titleStyle}`}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* <input
          type="text"
          placeholder={inputPlachoder.note}
          className={`take-note ${inputDisplay} `}
          onChange={(e) => setTake_note(e.target.value)}
          value={take_note}
        /> */}
        <textarea
          className={`take-note ${inputDisplay} `}
          cols="30"
          rows="115"
          onChange={(e) => setTake_note(e.target.value)}
          placeholder={inputPlachoder.note}
          value={take_note}
        ></textarea>
        <div className="submit-btn-div">
          <button type="submit" className={`submit-btn ${inputDisplay}`}>
            +
          </button>
        </div>
      </form>
    </>
  );
}

export default Inputs;
