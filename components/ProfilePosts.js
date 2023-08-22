import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const ProfilePosts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="grid-on" size={30} color="black" />
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="contacts-outline"
          size={30}
          color="black"
        />
      </View>
    </View>
  );
};

export default ProfilePosts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 14,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});
