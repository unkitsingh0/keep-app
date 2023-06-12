import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openOrCloseINput } from "../redux/slices/inputSlice";
import { addTodo } from "../redux/slices/inputDataSlice";
import "./css/inputs.css";

function Inputs() {
  let [title, setTitle] = useState("");
  let [take_note, setTake_note] = useState("");
  let data = useSelector((state) => state);
  // console.log(data.input);
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
    dispatch(addTodo({ title, take_note }));
  };
  return (
    <>
      <form
        className="inputs"
        onClick={handelFormClick}
        onSubmit={handelFormSubmit}
      >
        <input
          type="text"
          placeholder={inputPlachoder.title}
          className={`title ${titleStyle}`}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder={inputPlachoder.note}
          className={`take-note ${inputDisplay} `}
          onChange={(e) => setTake_note(e.target.value)}
        />
        {/* <textarea
          className={`take-note ${inputDisplay} `}
          cols="30"
          rows="10"
          onChange={(e) => setTake_note(e.target.value)}
        ></textarea> */}
        <button type="submit" className={`submit-btn ${inputDisplay}`}>
          +
        </button>
      </form>
    </>
  );
}

export default Inputs;
