import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const SavedPostScreen = () => {
  const postData = useSelector((state) => state.posts.postData);

  const savedData = postData.filter((item) => item.post.isBookmarked);

  function renderSavedPost({ item }) {
    return (
      <View style={styles.postImageContainer}>
        <Image source={item.post.postImage} style={styles.postImage} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={savedData} renderItem={renderSavedPost} numColumns={3} />
    </View>
  );
};

export default SavedPostScreen;

const styles = StyleSheet.create({
  postImageContainer: {
    margin: 1,
  },
  postImage: {
    height: 140,
    width: 145,
  },
});
