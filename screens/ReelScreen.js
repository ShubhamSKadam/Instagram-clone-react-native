import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Reel from "../components/Reel";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ReelScreen = () => {
  const postData = useSelector((state) => state.posts.postData);
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Reels</Text>
        <MaterialCommunityIcons name="camera-outline" size={34} color="black" />
      </View>
      {/* Reel Component comprising of the reel and it's information */}
      <Reel reelData={postData} />
    </SafeAreaView>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    alignItems: "center",
    backgroundColor: "black",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "American Typewriter",
  },
});
