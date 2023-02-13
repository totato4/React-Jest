import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "mySlice",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.find((todo) => todo.id === action.payload);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = mySlice.actions;

export default mySlice.reducer;
