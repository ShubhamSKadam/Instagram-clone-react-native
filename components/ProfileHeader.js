import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ProfileHeader = () => {
  return (
    <View>
      <View style={styles.container}>
        {/* name and modal */}
        <TouchableOpacity style={styles.profileUsername}>
          <Text style={styles.profileText}>ssk.exe</Text>
          <Entypo name="chevron-down" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.createAdd}>
          <FontAwesome name="plus-square-o" size={28} color="black" />
          <Feather name="menu" size={28} color="black" />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    alignItems: "center",
  },
  profileUsername: {
    flexDirection: "row",
    alignItems: "center",
  },
  createAdd: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },
  profileText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
