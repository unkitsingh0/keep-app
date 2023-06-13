import { createSlice } from "@reduxjs/toolkit";

let childNoteSlice = createSlice({
  name: "childNote",
  initialState: {
    active: false,
    activeClassIndex: null,
  },
  reducers: {
    childNoteOpenOrClose: (state, action) => {
      state.active = action.payload;
    },
    childActive: (state, action) => {
      state.activeClassIndex = action.payload;
      // console.log(state.activeClassIndex);
    },
  },
});

export let { childNoteOpenOrClose, childActive } = childNoteSlice.actions;

export default childNoteSlice.reducer;
