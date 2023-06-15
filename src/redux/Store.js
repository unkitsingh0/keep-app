import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slices/inputSlice";
import inputDataSlice from "./slices/inputDataSlice";
import childNoteSlice from "./slices/childNote";
import editNotesSlice from "./slices/editNotes";
let Store = configureStore({
  reducer: {
    input: inputSlice,
    inputData: inputDataSlice,
    childNote: childNoteSlice,
    editNotes: editNotesSlice,
  },
  devTools: true,
});

export default Store;
