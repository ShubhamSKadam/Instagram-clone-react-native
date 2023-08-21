import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../dummyData";

const initialState = {
  dummyData: dummyData,
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = state.dummyData.find(
        (user) => user.id === action.payload
      );
    },
    tapStory: (state, action) => {
      const tappedUserIndex = state.dummyData.findIndex(
        (user) => user.id === action.payload
      );
      state.dummyData[tappedUserIndex].storyTapped = true;
    },
  },
});
