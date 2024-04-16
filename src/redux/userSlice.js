import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { task, status } = action.payload;
      state.users.push({ id: nanoid(), task, status });
      // Ensure immutability by returning a new state object
      state.users = [...state.users];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, task, status } = action.payload;
      state.users = state.users.map((user) =>
        user.id === id ? { ...user, task, status } : user
      );
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
