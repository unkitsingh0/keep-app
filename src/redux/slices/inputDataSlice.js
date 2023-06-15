import { createSlice } from "@reduxjs/toolkit";
let getLocalKeepData = () => {
  let keepNotes = localStorage.getItem("keep");
  return JSON.parse(keepNotes);
};
// console.log(getLocalKeepData());
let inputDataSlice = createSlice({
  name: "inputData",
  // initialState: [],
  initialState: getLocalKeepData() ? getLocalKeepData() : [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      let deletTodo = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletTodo;
    },
    updateTodo: (state, action) => {
      state[action.payload.indexNo].title = action.payload.data.title;
      state[action.payload.indexNo].take_note = action.payload.data.take_note;
    },
  },
});

export let { addTodo, deleteTodo, updateTodo } = inputDataSlice.actions;

export default inputDataSlice.reducer;
