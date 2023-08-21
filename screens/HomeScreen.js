import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Posts from "../components/Posts";

const HomeScreen = () => {
  const HorizontalLine = () => {
    return <View style={styles.horizontalLine}></View>;
  };

  return (
    <SafeAreaView>
      <Header />
      <Stories />
      <HorizontalLine />
      <Posts />
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
});
