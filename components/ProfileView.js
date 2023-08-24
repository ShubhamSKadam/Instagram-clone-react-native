import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { usersSlice } from "../store/usersSlice";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";

const ProfileView = () => {
  const dispatch = useDispatch();

  // my Original Profile Image
  const myImage = require("../assets/ProfileImages/shubham.png");

  const [image, setImage] = useState(null);
  const [changedProfile, setChangedProfile] = useState(false);

  const usersData = useSelector((state) => state.users.dummyData);
  const myData = usersData.filter((user) => user.id === 0);

  function tapImageStoryHandler() {
    // viewing the story when tapped , i.e making it false
    dispatch(usersSlice.actions.tapStory(myData[0].id));

    // Image picker handler
    const pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setImage(result.assets[0].uri);
          setChangedProfile(true);

          // Store the image URI in AsyncStorage
          await AsyncStorage.setItem("profileImage", result.assets[0].uri);
          dispatch(usersSlice.actions.updateProfilePic(result.assets[0].uri));
        }
      } catch (error) {
        console.error("Error picking image:", error);
        // Handle the error appropriately (e.g., show a message to the user)
      }
    };

    // Call the image picker handler
    pickImage();
  }

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem("profileImage");
        if (storedImage) {
          setImage(storedImage);
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

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
