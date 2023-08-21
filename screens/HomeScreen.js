import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Stories from "../components/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />

      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
