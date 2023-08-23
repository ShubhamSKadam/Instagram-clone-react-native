import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
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
import { useState } from "react";

const Posts = () => {
  const userData = useSelector((state) => state.users.dummyData);
  const postData = useSelector((state) => state.posts.postData);

  const [isModalVisible, setModalVisible] = useState(false);

  function modalHandler() {
    setModalVisible(!isModalVisible);
  }

  const dispatch = useDispatch();

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
          <TouchableOpacity onPress={modalHandler}>
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
          <Octicons name="bookmark" size={28} color="black" />
        </View>
        {/* likes */}
        <View style={styles.postLikes}>
          <Text>{item.post.likes} likes</Text>
        </View>

        {/* Modal on Tapping the Nav bar of each post */}
        <Modal
          isVisible={isModalVisible}
          testID={"modal"}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTopContainer}>
              <MaterialIcons name="bookmark-outline" size={32} color="black" />
              <AntDesign name="qrcode" size={32} color="black" />
            </View>

            <View style={styles.modalListContainer}>
              <View style={styles.modalListItem}>
                <AntDesign name="staro" size={24} color="black" />
                <Text style={styles.modalListItemText}>Add to favorites</Text>
              </View>
              <View style={styles.modalListItem}>
                <Ionicons
                  name="person-remove-outline"
                  size={24}
                  color="black"
                />
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
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <FlatList
      data={postData}
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
  // Modal styling
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 18,
    paddingTop: 45,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
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
