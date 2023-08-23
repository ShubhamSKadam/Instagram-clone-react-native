import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const SavedPostScreen = () => {
  const postData = useSelector((state) => state.posts.postData);

  const savedData = postData.filter((item) => item.post.isBookmarked);

  function savedImagePressHandler() {
    
  }

  function renderSavedPost({ item }) {
    return (
      <TouchableOpacity
        style={styles.postImageContainer}
        onPress={() => savedImagePressHandler}
      >
        <Image source={item.post.postImage} style={styles.postImage} />
      </TouchableOpacity>
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
    padding: 0.5,
  },
  postImage: {
    height: 150,
    width: 150,
  },
});
