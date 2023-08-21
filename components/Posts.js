import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { dummyData } from "../dummyData";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Posts = () => {
  function renderPost({ item }) {
    return (
      <View>
        {/* Post Header section */}
        <View style={styles.postHeader}>
          <View style={styles.postUser}>
            <Image source={item.profileImage} style={styles.postProfile} />
            <Text style={styles.postUserText}>{item.name}</Text>
          </View>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </View>

        {/* Post Image */}
        <View style={styles.postImageContainer}>
          <Image source={item.profileImage} style={styles.postImage} />
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={dummyData}
      renderItem={renderPost}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Posts;

const styles = StyleSheet.create({
  postProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  postUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  postUserText: {
    marginLeft: 8,
    fontSize: 14,
  },
  postImage: {
    height: 500,
    width: "auto",
  },
  postImageContainer: {
    marginVertical: 10,
  },
});
