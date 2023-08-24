import { FlatList, StyleSheet, Text, View} from "react-native";
import Video from "react-native-video";
import React from "react";

const Reel = ({ reelData }) => {
  function renderReelPost({ item }) {
    console.log(item.reel.reelId);
    return (
      <View style={{ flex: 1 }}>
        <Video source={item.reel.reelVideo} />
        <Text>Hello World</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList data={reelData} renderItem={renderReelPost} />
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({});
