import { configureStore, createSlice } from "@reduxjs/toolkit";
import { postData } from "../postsData";

const initialState = {
  postData: postData,
  selectedPostInfo: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // Like the post
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
    setSelectedPostInfo: (state, action) => {
      const postItem = action.payload;
      state.selectedPostInfo = state.postData.find(
        (item) => item.post.postId === postItem.post.postId
      );
    },
    // Like the reel
    setLikedReel: (state, action) => {
      const likedReelIndex = state.postData.findIndex(
        (item) => item.reel.reelId === action.payload
      );

      const selectedReel = state.postData[likedReelIndex];
      selectedReel.reel.isLiked = !selectedReel.reel.isLiked;

      if (selectedReel.reel.isLiked) {
        selectedReel.reel.likes++;
      } else {
        selectedReel.reel.likes--;
      }
    },
    // Save the reel
    saveBookmarkReel: (state, action) => {
      const savedReelIndex = state.postData.findIndex(
        (item) => item.reel.reelId === action.payload
      );

      const selectedReelBookmark = state.postData[savedReelIndex];
      selectedReelBookmark.reel.isBookmarked =
        !selectedReelBookmark.reel.isBookmarked;
    },
  },
});
