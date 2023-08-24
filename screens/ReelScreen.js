import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Reel from "../components/Reel";
import { useSelector } from "react-redux";

const ReelScreen = () => {
  const postData = useSelector((state) => state.posts.postData);
  return (
    <View>
      {/* Reel Component comprising of the reel and it's information */}
      <Reel reelData={postData} />
    </View>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({});
