import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { dummyData } from "../dummyData";

const Stories = () => {
  function renderStories({ item }) {
    return (
      <View style={styles.container}>
        <Image source={item.profileImage} style={styles.profileImg} />
        <Text style={styles.profileText}>{item.name}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={dummyData}
      renderItem={renderStories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 70,
    borderWidth: 1,
    borderColor:''
  },
  profileText: {
    marginVertical: 4,
    fontWeight: "500",
  },
});
