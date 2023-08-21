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
    <View>
      <FlatList
        data={dummyData}
        renderItem={renderStories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: "center",
  },
  profileImg: {
    height: 85,
    width: 85,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: "#E384FF",
  },
  profileText: {
    marginTop: 4,
    fontWeight: "300",
    fontSize: 12,
  },
});
