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
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <Text style={styles.text}>Open Camera Roll</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Open from Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
  },
  buttonContainer: {
    paddingVertical: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 18,
  },
  text: {
    color: "white",
  },
});
