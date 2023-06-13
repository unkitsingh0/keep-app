import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/inputDataSlice";
import { childNoteOpenOrClose, childActive } from "../redux/slices/childNote";
import Inputs from "./Inputs";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";

import "./css/main.css";

function Main() {
  let childState = useSelector((state) => state.childNote);
  console.log(childState);
  let childStyle = childState.active ? "childStyle" : "";
  let backGroundBlure = childState.active
    ? { backgroundColor: "#2196f3" }
    : { backgroundColor: "#e3f2fd" };
  let childStyle_p = childState.active ? { fontSize: "1.6rem" } : {};
  let NotesArry = useSelector((state) => state);
  let dispatch = useDispatch();
  let activeStatus = NotesArry.inputData;
  useEffect(() => {
    dispatch(childNoteOpenOrClose(false));
  }, [activeStatus, dispatch]);
  return (
    <div
      style={backGroundBlure}
      className={`main-container `}
      onClick={() => {
        dispatch(childNoteOpenOrClose(false)); //
        dispatch(childActive(null));
      }}
    >
      <div className="input-div">
        {/* Taking inputs from the user */}
        <Inputs />
      </div>

      <div className={`main-notes`} style={backGroundBlure}>
        {NotesArry.inputData.map((item, index) => {
          return (
            <div
              className={`child-main-notes ${
                childState.activeClassIndex === index
                  ? childStyle
                  : childState.active
                  ? "displayNone"
                  : ""
              }`}
              onClick={(e) => {
                // setChildState(true);
                e.stopPropagation();
                dispatch(childNoteOpenOrClose(true));
                dispatch(childActive(index));
              }}
              key={index}
            >
              <h2>
                {item.title}
                <span
                  onClick={() => {
                    dispatch(deleteTodo(index));
                  }}
                >
                  <IconButton aria-label="delete">
                    <Delete className="delete-btn" />
                  </IconButton>
                </span>
              </h2>
              <p style={childStyle_p}>{item.take_note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
