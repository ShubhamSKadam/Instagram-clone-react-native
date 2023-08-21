import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { dummyData } from "../dummyData";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Posts = () => {
  function renderPost({ item }) {
    return (
      <View style={styles.container}>
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

        {/* Post Bottom section */}
        <View style={styles.postBottom}>
          {/* Group of 3 */}
          <View style={styles.postIcons}>
            <AntDesign name="hearto" size={25} color="black" />
            <Feather
              name="message-circle"
              size={25}
              color="black"
              style={styles.sendMessage}
            />
            <FontAwesome5 name="telegram-plane" size={24} color="black" />
          </View>

          {/* Bookmark */}
          <Octicons name="bookmark" size={28} color="black" />
        </View>
        {/* likes */}
        <View style={styles.postLikes}>
          <Text>{item.likes} likes</Text>
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
  container: {
    marginBottom: 14,
  },
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
  postIcons: {
    flexDirection: "row",
    width: "25%",
    justifyContent: "space-between",
  },
  postBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  postLikes: {
    marginHorizontal: 12,
  },
  sendMessage: {
    transform: [{ rotateY: "180deg" }],
  },
});
