import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRef } from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const postData = useSelector((state) => state.posts.postData);

  const HorizontalLine = () => {
    return <View style={styles.horizontalLine}></View>;
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header />
      <Stories />
      <HorizontalLine />
      <Posts postData={postData} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#999999",
    borderBottomWidth: 0.2,
    marginVertical: 10,
  },
  rootContainer: {
    flex: 1,
  },
});
