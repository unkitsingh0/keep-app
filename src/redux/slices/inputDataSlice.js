import { createSlice } from "@reduxjs/toolkit";

let inputDataSlice = createSlice({
  name: "inputData",
  initialState: [],
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
  },
});

export let { addTodo, deleteTodo } = inputDataSlice.actions;

export default inputDataSlice.reducer;
