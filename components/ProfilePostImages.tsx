import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ProfilePostImages = ({ data }) => {
  const navigation = useNavigation();

  function postImagePressHandler(item) {
    navigation.navigate("myPosts", { item: item });
  }

  function renderPostImages({ item }) {
    return (
      <TouchableOpacity
        style={styles.postImageContainer}
        onPress={() => postImagePressHandler(item)}
      >
        <Image source={item.post.postImage} style={styles.postImage} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderPostImages} numColumns={3} />
    </View>
  );
};

export default ProfilePostImages;

const styles = StyleSheet.create({
  postImageContainer: {
    margin: 1,
  },
  postImage: {
    height: 140,
    width: 145,
  },
});
