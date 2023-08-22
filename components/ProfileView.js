import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProfileView = () => {
  const userData = useSelector((state) => state.users.dummyData);
  const myData = userData.filter((user) => user.id === 0);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Profile Pic */}
        <View style={styles.profileImgContainer}>
          <Image
            source={require("../assets/ProfileImages/shubham.png")}
            style={styles.profileImage}
          />
        </View>

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
