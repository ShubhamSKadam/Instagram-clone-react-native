import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./usersSlice";
import { postSlice } from "./postSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    posts: postSlice.reducer,
  },
});
