import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { postSlice } from "../store/postSlice";

const Reel = ({ reelData }) => {
  const userData = useSelector((state) => state.users.dummyData);
  const dispatch = useDispatch();

  const video = useRef(null);
  function renderReelPost({ item }) {
    const postUserIndex = userData.findIndex((user) => user.id === item.userId);
    const postUser = userData[postUserIndex];

    function likePressHandler() {
      dispatch(postSlice.actions.setLikedReel(item.reel.reelId));
    }

    return (
      <View style={styles.container}>
        {/* Video Reel Header */}
        <View style={styles.videoReelHeader}>
          {/* icon and username */}
          <View style={styles.iconUserContainer}>
            <Image source={postUser.profileImage} style={styles.postUserIcon} />
            <Text style={styles.postUserText}>{postUser.name}</Text>
          </View>

          {/* Nav ellipse */}
          <View>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </View>
        </View>

        <Video
          ref={video}
          style={styles.video}
          source={item.reel.reelVideo}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
        {/*footer of reel */}
        <View style={styles.footerContainer}>
          <View style={styles.footerIconContainer}>
            {/* like, comment, send*/}
            <View style={styles.reelShare}>
              <TouchableOpacity onPress={likePressHandler}>
                <AntDesign
                  name={item.reel.isLiked ? "heart" : "hearto"}
                  size={24}
                  color={item.reel.isLiked ? "red" : "white"}
                />
              </TouchableOpacity>
              <Feather name="message-circle" size={24} color="white" />
              <FontAwesome5 name="telegram-plane" size={24} color="white" />
            </View>

            {/* Bookmark */}
            <View>
              <MaterialIcons name="bookmark-outline" size={28} color="white" />
            </View>
          </View>
          <Text style={{ color: "white" }}>{item.reel.likes}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.listContainer}>
      <FlatList data={reelData} renderItem={renderReelPost} />
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 800,
  },
  container: {
    flex: 1,
  },
  postUserIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  postUserText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
  iconUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  videoReelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reelShare: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
  },
  footerIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerContainer: {
    paddingHorizontal: 14,
  },
});
