import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePostImages = () => {
  const postData = useSelector((state) => state.posts.postData);

  const myPosts = postData.filter((item) => item.userId === 0);

  function renderPostImages({ item }) {
    return (
      <View style={styles.postImageContainer}>
        <Image source={item.post.postImage} style={styles.postImage} />
      </View>
    );
  }

  return (
    <View>
      <FlatList data={myPosts} renderItem={renderPostImages} numColumns={3} />
    </View>
  );
};

export default ProfilePostImages;

const styles = StyleSheet.create({
  postImageContainer: {
    margin: 1,
  },
  postImage: {
    height: 150,
    width: 150,
  },
});
