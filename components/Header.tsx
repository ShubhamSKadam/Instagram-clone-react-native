import { StyleSheet, Image, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Instagram Title */}
      <Image
        source={require("../assets/Insta.png")}
        style={styles.headerLogo}
      />

      <View style={styles.logoContainer}>
        <AntDesign name="hearto" size={25} color="black" />
        <Feather name="message-circle" size={25} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  logoContainer: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-around",
  },
  headerLogo: {
    height: 45,
    width: 120,
  },
});
