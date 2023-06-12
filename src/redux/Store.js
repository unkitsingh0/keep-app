import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slices/inputSlice";
import inputDataSlice from "./slices/inputDataSlice";
import childNoteSlice from "./slices/childNote";
let Store = configureStore({
  reducer: {
    input: inputSlice,
    inputData: inputDataSlice,
    childNote: childNoteSlice,
  },
  devTools: true,
});

export default Store;
