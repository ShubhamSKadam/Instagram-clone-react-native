import { configureStore, createSlice } from "@reduxjs/toolkit";
import { postData } from "../postsData";

const initialState = {
  postData: postData,
  selectedPost: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
