import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Highlight = () => {
  return <View style={styles.container}></View>;
};

export default Highlight;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: "#dbdbdb",
    marginHorizontal: 8,
  },
});
