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
      dispatch(usersSlice.actions.setSelectedUser(item.id));
      dispatch(usersSlice.actions.tapStory(item.id));
      console.log(data);
    }

    return (
      <TouchableOpacity style={styles.container} onPress={storiesTapHandler}>
        <Image
          source={item.profileImage}
          style={[styles.profileImg, item.storyTapped && styles.tappedImg]}
        />
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
  profileImg: {
    height: 85,
    width: 85,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: "#E384FF",
  },
  profileText: {
    marginTop: 4,
    fontWeight: "300",
    fontSize: 12,
  },
  tappedImg: {
    borderColor: "#f1f1f1",
  },
});
