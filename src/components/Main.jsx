import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/inputDataSlice";
import Inputs from "./Inputs";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";

import "./css/main.css";
function Main() {
  let NotesArry = useSelector((state) => state);
  // console.log(NotesArry.inputData, "main");
  let dispatch = useDispatch();
  return (
    <div className="main-container">
      <div className="input-div">
        {/* Taking inputs from the user */}
        <Inputs />
      </div>

      <div className="main-notes">
        {NotesArry.inputData.map((item, index) => {
          return (
            <div className="child-main-notes" key={index}>
              <h2>
                {item.title}{" "}
                <span onClick={() => dispatch(deleteTodo(index))}>
                  <IconButton aria-label="delete">
                    <Delete className="delete-btn" />
                  </IconButton>
                </span>
              </h2>
              <p>{item.take_note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
