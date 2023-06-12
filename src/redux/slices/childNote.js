import { createSlice } from "@reduxjs/toolkit";

let childNoteSlice = createSlice({
  name: "childNote",
  initialState: false,
  reducers: {
    childNoteOpenOrClose: (state, action) => {
      return action.payload;
    },
  },
});

export let { childNoteOpenOrClose } = childNoteSlice.actions;

export default childNoteSlice.reducer;
