import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";

const ProfilePostReels = ({ data }) => {
  const video = React.useRef(null);

  function myReelHandler({ item }) {
    return (
      <View>
        <Video ref={video} source={item.reel.reelVideo} style={styles.video} />
      </View>
    );
  }

  return (
    <View>
      <FlatList data={data} renderItem={myReelHandler} numColumns={3} />
    </View>
  );
};

export default ProfilePostReels;

const styles = StyleSheet.create({
  video: {
    height: 250,
    width: 143,
  },
});
