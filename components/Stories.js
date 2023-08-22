import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSlice } from "../store/usersSlice";

const Stories = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.dummyData);

  function renderStories({ item }) {
    function storiesTapHandler() {
      dispatch(usersSlice.actions.tapStory(item.id));
    }

    return (
      <TouchableOpacity style={styles.container} onPress={storiesTapHandler}>
        <View
          style={[styles.imageContainer, item.storyTapped && styles.tappedImg]}
        >
          <Image source={item.profileImage} style={styles.profileImg} />
        </View>
        <Text style={styles.profileText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderStories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
  },
  imageContainer: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  profileImg: {
    height: 85,
    width: 85,
    borderRadius: 85,
    // borderColor: "#E384FF",
  },
  profileText: {
    marginTop: 4,
    fontWeight: "300",
    fontSize: 12,
  },
  tappedImg: {
    padding: 2,
    borderColor: "#f1f1f1",
    borderWidth: 2,
  },
});
