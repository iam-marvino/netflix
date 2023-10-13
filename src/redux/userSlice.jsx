import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  potentialUser: JSON.parse(localStorage.getItem("potentialUser")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.clear();
    },
    SavePotentialUser: (state, action) => {
      state.potentialUser = action.payload;
      localStorage.setItem("potentialUser", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, SavePotentialUser } = userSlice.actions;
export const selectUser = (state) => state.user.user || null;
export default userSlice.reducer;
