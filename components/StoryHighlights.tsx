import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Highlight from "./Highlight";
import { Ionicons } from "@expo/vector-icons";

const StoryHighlights = () => {
  const [storyTapped, setStoryTapped] = useState(false);

  function showStoryHandler() {
    if (storyTapped) setStoryTapped(false);
    else setStoryTapped(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.storyContainer}>
        <Text style={styles.storyHighlightsText}>Story highlights</Text>
        <MaterialIcons
          name={storyTapped ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="black"
          onPress={showStoryHandler}
        />
      </View>

      {/* Story Preview */}

      {storyTapped ? (
        <View>
          <Text>Keep your favorite stories on your profile</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.highlightsMainContainer}>
              {/* Add new highlight */}
              <View style={styles.addHighlightContainer}>
                <View style={styles.addHighlight}>
                  <Ionicons name="add" size={32} color="black" />
                </View>
              </View>
              {/* highlight */}
              <Highlight />
              <Highlight />
              <Highlight />
              <Highlight />
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default StoryHighlights;

const styles = StyleSheet.create({
  highlightsMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  container: {
    marginHorizontal: 18,
  },
  storyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  addHighlight: {
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addHighlightContainer: {
    width: "20%",
  },
  storyHighlightsText: {
    fontSize: 15,
    fontWeight: "500",
  },
  //   addHighlightText: {
  //     textAlign: "center",
  //   },
});
