import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import ProfilePostImages from "./ProfilePostImages";
import ProfilePostReels from "./ProfilePostReels";
import { useSelector } from "react-redux";

const ProfilePosts = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  function postReelHeaderHandler(newTab) {
    setActiveTab(newTab);
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => postReelHeaderHandler(1)} // Pass the desired tab value
        >
          <View
            style={
              activeTab === 1
                ? styles.iconContainerActive
                : styles.iconContainerInactive
            }
          >
            <MaterialIcons name="grid-on" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => postReelHeaderHandler(2)} // Pass the desired tab value
        >
          <View
            style={
              activeTab === 2
                ? styles.iconContainerActive
                : styles.iconContainerInactive
            }
          >
            <Octicons name="video" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {activeTab === 1 && <ProfilePostImages data={data} />}
      {activeTab === 2 && <ProfilePostReels data={data} />}
    </View>
  );
};

export default ProfilePosts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 2,
  },
  iconContainerActive: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#999999",
    paddingVertical: 6,
  },
  iconContainerInactive: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 6,
  },
  iconContainer: {
    width: "50%",
  },
});
