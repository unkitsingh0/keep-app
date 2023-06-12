import { createSlice } from "@reduxjs/toolkit";

let inputSlice = createSlice({
  name: "input",
  initialState: false,
  reducers: {
    openOrCloseINput: (state, action) => {
      // console.log(action.payload);
      return action.payload;
    },
  },
});

export let { openOrCloseINput } = inputSlice.actions;

export default inputSlice.reducer;
