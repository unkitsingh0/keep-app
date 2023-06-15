import { createSlice } from "@reduxjs/toolkit";

let editNotesSlice = createSlice({
  name: "editNotes",
  initialState: false,
  reducers: {
    editInputOpenClose: (state, action) => {
      return action.payload;
    },
  },
});

export let { editInputOpenClose } = editNotesSlice.actions;

export default editNotesSlice.reducer;
