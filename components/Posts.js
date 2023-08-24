import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { usersSlice } from "../store/usersSlice";
import { postSlice } from "../store/postSlice";
import Modal from "react-native-modal";
import { useState, useRef } from "react";
import BottomModal from "./BottomModal";

const Posts = ({ postData, postId }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.dummyData);

  const [isModalVisible, setModalVisible] = useState(false);

  // scroll to my postId if I tap a post from my profile and saved
  const flatlistRef = useRef(null);
  useEffect(() => {
    const index = postData.findIndex((item) => item.post.postId === postId);

    if (index !== -1 && flatlistRef.current) {
      flatlistRef.current.scrollToIndex({ index });
    }
  }, [postId]);

  // modal handler function
  function modalHandler() {
    setModalVisible(!isModalVisible);
  }

  // render function for flatlist
  function renderPost({ item }) {
    function profileImagePressHandler(id) {
      dispatch(usersSlice.actions.tapStory(id));
    }

    // finding the user to which the post belongs to
    const postUserIndex = userData.findIndex((user) => user.id === item.userId);
    const postUser = userData[postUserIndex];

    function likePressHandler() {
      dispatch(postSlice.actions.setLiked(item.post.postId));
    }

    function saveBookMarkHandler() {
      dispatch(postSlice.actions.saveBookmark(item.post.postId));
    }

    function onPressElipseHandler() {
      modalHandler();
      dispatch(postSlice.actions.setSelectedPostInfo(item));
    }

    return (
      <View style={styles.container}>
        {/* Post Header section */}
        <View style={styles.postHeader}>
          <View style={styles.postUser}>
            <TouchableOpacity
              onPress={() => profileImagePressHandler(postUser.id)}
              style={[
                styles.postProfileImageContainer,
                postUser.storyTapped && styles.tappedProfileImageContainer,
              ]}
            >
              <Image
                source={postUser.profileImage}
                style={styles.postProfile}
              />
            </TouchableOpacity>
            <Text style={styles.postUserText}>{postUser.name}</Text>
          </View>
          <TouchableOpacity onPress={onPressElipseHandler}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Post Image */}
        <View style={styles.postImageContainer}>
          <Image source={item.post.postImage} style={styles.postImage} />
        </View>

        {/* Post Bottom section */}
        <View style={styles.postBottom}>
          {/* Group of 3 */}
          <View style={styles.postIcons}>
            <TouchableOpacity onPress={likePressHandler}>
              <AntDesign
                name={item.post.isLiked ? "heart" : "hearto"}
                size={25}
                color={item.post.isLiked ? "red" : "black"}
              />
            </TouchableOpacity>
            <Feather
              name="message-circle"
              size={25}
              color="black"
              style={styles.sendMessage}
            />
            <FontAwesome5 name="telegram-plane" size={24} color="black" />
          </View>

          {/* Bookmark */}
          <TouchableOpacity onPress={saveBookMarkHandler}>
            <MaterialIcons
              name={item.post.isBookmarked ? "bookmark" : "bookmark-border"}
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {/* likes */}
        <View style={styles.postLikes}>
          <Text>{item.post.likes} likes</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.postListMainContainer}>
      <FlatList
        ref={flatlistRef}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatlistRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        data={postData}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
      {/* Modal on Tapping the Nav bar of each post */}
      <BottomModal isModalVisible={isModalVisible} modalHandler={modalHandler}>
        <View style={styles.modalTopContainer}>
          <MaterialIcons name={"bookmark"} size={32} color="black" />
          <AntDesign name="qrcode" size={32} color="black" />
        </View>

        <View style={styles.modalListContainer}>
          <View style={styles.modalListItem}>
            <AntDesign name="staro" size={24} color="black" />
            <Text style={styles.modalListItemText}>Add to favorites</Text>
          </View>
          <View style={styles.modalListItem}>
            <Ionicons name="person-remove-outline" size={24} color="black" />
            <Text style={styles.modalListItemText}>Unfollow</Text>
          </View>

          <View style={styles.modalListItem}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.modalListItemText}>
              Why you're seeing this post
            </Text>
          </View>
          <View style={styles.modalListItem}>
            <Feather name="eye-off" size={24} color="black" />
            <Text style={styles.modalListItemText}>Hide</Text>
          </View>
          <View style={styles.modalListItem}>
            <FontAwesome name="user-o" size={24} color="black" />
            <Text style={styles.modalListItemText}>About this account</Text>
          </View>
          <View style={styles.modalListItem}>
            <Octicons name="report" size={24} color="red" />
            <Text style={styles.modalListItemText}>Report</Text>
          </View>
        </View>
      </BottomModal>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  postListMainContainer: {
    flex: 1,
  },
  postProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  postProfileImageContainer: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
    borderColor: "#e975f1",
  },
  tappedProfileImageContainer: {
    borderWidth: 2,
    borderColor: "#f1f1f1",
    padding: 2,
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
    height: 450,
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
  // Modal styling
  modalTopContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 14,
  },
  modalListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  modalListItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  modalListContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
});
