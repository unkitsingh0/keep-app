import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/inputDataSlice";
import { childNoteOpenOrClose, childActive } from "../redux/slices/childNote";
import { editInputOpenClose } from "../redux/slices/editNotes";
import { updateTodo } from "../redux/slices/inputDataSlice";
import Inputs from "./Inputs";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";
import "./css/main.css";

function Main() {
  // let data = useSelector((state) => state);
  let childState = useSelector((state) => state.childNote);

  let editbtn = useSelector((state) => state.editNotes);

  let childStyle = childState.active ? "childStyle" : "";
  let backGroundBlure = childState.active
    ? { backgroundColor: "#2196f3" }
    : { backgroundColor: "#e3f2fd" };
  let childStyle_p = childState.active ? { fontSize: "1.3rem" } : {};
  let NotesArry = useSelector((state) => state);
  let [updateTitle, setUpdateTitle] = useState("");
  let [updateTake_note, setUpdateTake_note] = useState();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(childNoteOpenOrClose(false));
    localStorage.setItem("keep", JSON.stringify(NotesArry.inputData));
  }, [NotesArry.inputData, dispatch]);
  return (
    <div
      style={backGroundBlure}
      className={`main-container `}
      onClick={() => {
        dispatch(childNoteOpenOrClose(false)); //
        dispatch(childActive(null));
        dispatch(editInputOpenClose(false));
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
              } ${
                NotesArry.inputData.length - 1 === index
                  ? "last_note_margin_bottom"
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
              {editbtn ? (
                <>
                  <div className="edit_input_div">
                    <input
                      type="text"
                      value={updateTitle}
                      className="edit_title_input"
                      onChange={(e) => {
                        setUpdateTitle(e.target.value);
                      }}
                    />

                    <textarea
                      value={updateTake_note}
                      className="edit_takeNote_input"
                      cols="30"
                      rows="10"
                      onChange={(e) => {
                        setUpdateTake_note(e.target.value);
                      }}
                    ></textarea>
                    <button
                      className="updateBtn"
                      onClick={() => {
                        dispatch(editInputOpenClose(false));
                        dispatch(
                          updateTodo({
                            indexNo: index,
                            data: {
                              title: updateTitle,
                              take_note: updateTake_note,
                            },
                          })
                        );
                      }}
                    >
                      Update
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2>
                    {item.title}

                    <span>
                      <IconButton
                        aria-label="edit"
                        onClick={() => {
                          dispatch(editInputOpenClose(true));
                          setUpdateTitle(item.title);
                          setUpdateTake_note(item.take_note);
                        }}
                      >
                        <ModeEditIcon className="edit-btn" />
                      </IconButton>
                      |
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          dispatch(deleteTodo(index));
                        }}
                      >
                        {/* Edit or update button */}

                        {/* delete button */}
                        <Delete className="delete-btn" />
                      </IconButton>
                    </span>
                  </h2>
                  <p style={childStyle_p}>{item.take_note}</p>
                </>
              )}
              {/* <h2>
                {item.title}
                <span>
                  <ModeEditIcon
                    onClick={() => dispatch(editInputOpenClose(true))}
                  />
                </span>
                <span
                  onClick={() => {
                    dispatch(deleteTodo(index));
                  }}
                >
                  <IconButton aria-label="delete">
                    <Delete className="delete-btn" />
                  </IconButton>
                </span>
              </h2> */}

              {/* <p style={childStyle_p}>{item.take_note}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
