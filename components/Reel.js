import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import React from "react";

const Reel = ({ reelData }) => {
  const video = useRef(null);
  function renderReelPost({ item }) {
    return (
      <View style={styles.container}>
        {/* Video Reel Header */}
        <Video
          ref={video}
          style={styles.video}
          source={item.reel.reelVideo}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />

        <View>
          
        </View>
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

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 800,
  },
  container: {
    flex: 1,
  },
});
