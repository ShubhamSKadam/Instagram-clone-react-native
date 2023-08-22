import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileView from "../components/ProfileView";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomizeProfile from "../components/CustomizeProfile";
import StoryHighlights from "../components/StoryHighlights";
import ProfilePosts from "../components/ProfilePosts";
import ProfilePostImages from "../components/ProfilePostImages";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ProfileHeader />
      <ProfileView />

      {/* Edit and share profile */}
      <CustomizeProfile />

      {/* Story Highlights */}
      <StoryHighlights />

      {/*  Profile Post Header*/}
      <ProfilePosts />

      <ProfilePostImages />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
