import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slices/inputSlice";
import inputDataSlice from "./slices/inputDataSlice";
let Store = configureStore({
  reducer: {
    input: inputSlice,
    inputData: inputDataSlice,
  },
  devTools: true,
});

export default Store;
