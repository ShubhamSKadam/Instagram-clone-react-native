import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomizeProfile = () => {
  return (
    <View style={styles.container}>
      {/* Edit profile */}
      <TouchableOpacity style={styles.customizeButton}>
        <Text style={styles.customizeText}>Edit profile</Text>
      </TouchableOpacity>

      {/* Share profile */}
      <TouchableOpacity style={styles.customizeButton}>
        <Text style={styles.customizeText}>Share profile</Text>
      </TouchableOpacity>

      {/* Discover profile */}
      <TouchableOpacity style={styles.discover}>
        <Ionicons name="ios-person-add-outline" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomizeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  customizeButton: {
    width: "40%",
    backgroundColor: "#dbdbdb",
    padding: 6,
    borderRadius: 10,
  },
  customizeText: {
    fontSize: 16,
    textAlign: "center",
  },
  discover: {
    backgroundColor: "#dbdbdb",
    padding: 6,
    borderRadius: 10,
  },
});
