import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSlice } from "../store/usersSlice";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const ProfileView = () => {
  const myImage = require("../assets/ProfileImages/shubham.png");

  const [image, setImage] = useState(null);
  const [changedProfile, setChangedProfile] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.dummyData);
  const myData = userData.filter((user) => user.id === 0);

  function tapImageStoryHandler() {
    dispatch(usersSlice.actions.tapStory(myData[0].id));

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setChangedProfile(true);
      }
    };

    pickImage();
  }

  console.log(image);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Pic */}
        <TouchableOpacity onPress={tapImageStoryHandler}>
          <View
            style={[
              styles.profileImgContainer,
              myData[0].storyTapped && styles.tappedProfileImg,
            ]}
          >
            <Image
              source={changedProfile ? { uri: image } : myImage}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.followerCount}>
          {/* posts */}
          <View style={styles.stats}>
            <Text style={styles.statsNumber}>5</Text>
            <Text style={styles.statsText}>Posts</Text>
          </View>

          {/* Followers */}
          <View style={styles.stats}>
            <Text style={styles.statsNumber}>300M</Text>
            <Text style={styles.statsText}>Followers</Text>
          </View>

          {/* Following */}
          <View style={styles.stats}>
            <Text style={styles.statsNumber}>512</Text>
            <Text style={styles.statsText}>Following</Text>
          </View>
        </View>
      </View>

      {/* About container */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>Shubham Kadam</Text>
        <Text style={styles.aboutText}>Polymath 📒</Text>
        <Text style={styles.aboutText}>Mobile App Dev📱</Text>
      </View>
    </View>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 160,
  },
  profileImgContainer: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#e975f1",
    padding: 2,
  },
  tappedProfileImg: {
    borderColor: "#c4c3c3",
    padding: 2,
    borderWidth: 2,
  },
  followerCount: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stats: {
    alignItems: "center",
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: "500",
  },
  aboutContainer: {
    marginVertical: 8,
  },
  aboutText: {
    fontSize: 15,
    marginVertical: 1,
  },
});
