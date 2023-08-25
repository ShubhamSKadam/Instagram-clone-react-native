import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PostScreen = () => {
  const [image, setImage] = useState(null);

  const openCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error("Error opening camera:", error);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity onPress={openCamera}>
        <Text>CAMERA ROLL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
