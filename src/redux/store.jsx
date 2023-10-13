import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import thunk from "redux-thunk"; // Import Redux Thunk

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk], // Add Redux Thunk middleware
});

export default store;
