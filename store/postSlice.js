import { configureStore, createSlice } from "@reduxjs/toolkit";
import { postData } from "../postsData";

const initialState = {
  postData: postData,
  selectedPost: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setLiked: (state, action) => {
      const likedPostIndex = state.postData.findIndex(
        (item) => item.post.postId === action.payload
      );

      const selectedPost = state.postData[likedPostIndex];
      selectedPost.post.isLiked = !selectedPost.post.isLiked;

      if (selectedPost.post.isLiked) {
        selectedPost.post.likes++;
      } else {
        selectedPost.post.likes--;
      }
    },
    saveBookmark: (state, action) => {
      const savedPostIndex = state.postData.findIndex(
        (item) => item.post.postId === action.payload
      );

      const selectedBookmark = state.postData[savedPostIndex];
      selectedBookmark.post.isBookmarked = !selectedBookmark.post.isBookmarked;
    },
  },
});
