import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Dimensions } from "react-native";
import { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { postSlice } from "../store/postSlice";

const Reel = ({ reelData }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.dummyData);

  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    if (!video.current) return;

    if (isPlaying) {
      await video.current.pauseAsync();
    } else {
      await video.current.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  // Each reel render function
  function renderReelPost({ item }) {
    const postUserIndex = userData.findIndex((user) => user.id === item.userId);
    const postUser = userData[postUserIndex];

    function likePressHandler() {
      dispatch(postSlice.actions.setLikedReel(item.reel.reelId));
    }

    function reelBookMarkHandler() {
      dispatch(postSlice.actions.saveBookmarkReel(item.reel.reelId));
    }

    return (
      <View style={styles.container}>
        <View style={styles.rightIconsContainer}>
          <View style={styles.rightIconIndividualContainer}>
            <TouchableOpacity onPress={likePressHandler}>
              <MaterialCommunityIcons
                name={item.reel.isLiked ? "cards-heart" : "cards-heart-outline"}
                size={35}
                color={item.reel.isLiked ? "#f01717" : "#dbdbdb"}
              />
            </TouchableOpacity>
            <Text style={styles.textlight}>{item.reel.likes}</Text>
          </View>

          <View style={styles.rightIconIndividualContainer}>
            <Feather
              style={{ transform: [{ rotateY: "180deg" }] }}
              name="message-circle"
              size={30}
              color={"#dbdbdb"}
            />
            <Text style={styles.textlight}>123</Text>
          </View>

          <View style={styles.rightIconIndividualContainer}>
            <Feather name="send" size={30} color={"#dbdbdb"} />
            <Text style={styles.textlight}>234k</Text>
          </View>

          <View style={styles.rightIconIndividualContainer}>
            <TouchableOpacity onPress={reelBookMarkHandler}>
              <MaterialCommunityIcons
                name={item.reel.isBookmarked ? "bookmark" : "bookmark-outline"}
                size={30}
                color={"#dbdbdb"}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.rightIconIndividualContainer}>
            <Ionicons name="ellipsis-vertical" size={30} color={"#dbdbdb"} />
          </View>
        </View>

        <View style={styles.leftIconContainer}>
          <View style={styles.logoNameContainer}>
            <View style={styles.postHeaderImageContainer}>
              <Image
                source={postUser.profileImage}
                style={styles.postHeaderImage}
              />
            </View>
            <Text style={styles.textBold}>{postUser.name}</Text>
          </View>

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.textNormal}>
              Space Habitat in Future. #FutureSpaceHome
            </Text>
            <Text style={styles.textlight}>
              #FutureSpaceHome #space #Bishop Ring
            </Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={togglePlayPause}>
          <Video
            ref={video}
            rate={1.0}
            isMuted={false}
            style={styles.video}
            source={item.reel.reelVideo}
            resizeMode={ResizeMode.COVER}
            shouldPlay={true}
            isLooping
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
  return (
    <View style={styles.listContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Reels</Text>
        <MaterialCommunityIcons name="camera-outline" size={34} color="white" />
      </View>
      <FlatList data={reelData} renderItem={renderReelPost} />
    </View>
  );
};

export default Reel;

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  textBold: {
    fontWeight: "bold",
    color: "white",
  },
  textlight: {
    fontWeight: "200",
    color: "white",
  },
  textNormal: {
    fontWeight: "500",
    color: "white",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    height: height,
    width: width,
    position: "relative",
  },
  rightIconsContainer: {
    position: "absolute",
    height: 350,
    bottom: 100,
    right: 5,
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    padding: 10,
  },
  rightIconIndividualContainer: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftIconContainer: {
    position: "absolute",
    height: 100,
    width: 300,
    bottom: 100,
    left: 5,
    zIndex: 1,
  },
  logoNameContainer: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  postHeaderImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  headerContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    zIndex: 1,
    top: 48,
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontFamily: "American Typewriter",
  },
});
