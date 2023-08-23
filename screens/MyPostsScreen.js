import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";

const MyPostsScreen = ({ route }) => {
  const { item } = route.params;
  const postId = item.post.postId;
  const postData = useSelector((state) => state.posts.postData);

  const myPosts = postData.filter((item) => item.userId === 0);

  return (
    <View style={styles.container}>
      <Posts postData={myPosts} postId={postId} />
    </View>
  );
};

export default MyPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
  },
});
