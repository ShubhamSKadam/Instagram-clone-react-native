import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileHeader = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isHeaderModalVisible, setIsHeaderModalVisible] = useState(false);

  function modalHandler() {
    setModalVisible(!isModalVisible);
  }

  function headerModalhandler() {
    setIsHeaderModalVisible(!isHeaderModalVisible);
  }

  function savedPostNavigationHandler() {
    headerModalhandler();
    navigation.navigate("savedPosts");
  }

  return (
    <View>
      <View style={styles.container}>
        {/* name and modal */}
        <TouchableOpacity style={styles.profileUsername} onPress={modalHandler}>
          <Text style={styles.profileText}>ssk.exe</Text>
          <Entypo name="chevron-down" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.createAdd}>
          <FontAwesome name="plus-square-o" size={28} color="black" />
          <TouchableOpacity onPress={headerModalhandler}>
            <Feather name="menu" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal Component for userName */}
      <Modal
        isVisible={isModalVisible}
        testID={"modal"}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalMainContainer}>
          <View style={styles.modalUser}>
            <Image
              source={require("../assets/ProfileImages/shubham.png")}
              style={styles.modalProfileImage}
            />
            <Text>ssk.exe</Text>
          </View>

          {/* Active account */}
          <Fontisto name="radio-btn-active" size={24} color="#63bbdd" />
        </View>

        {/* Add Account */}
        <View style={styles.addAccount}>
          <View style={styles.addHighlightContainer}>
            <View style={styles.addHighlight}>
              <Ionicons name="add" size={32} color="black" />
            </View>
          </View>
          <Text>Add account</Text>
        </View>
      </Modal>

      {/* Nav Header Modal */}
      <Modal
        isVisible={isHeaderModalVisible}
        testID={"modal"}
        onBackdropPress={() => setIsHeaderModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.navHeaderModalContainer}>
          <View style={styles.navHeaderModalItem}>
            <Feather name="settings" size={24} color="black" />
            <Text style={styles.navModalText}>Settings and privacy</Text>
          </View>

          <View style={styles.navHeaderModalItem}>
            <MaterialIcons name="history" size={24} color="black" />
            <Text style={styles.navModalText}>Your activity</Text>
          </View>

          <View style={styles.navHeaderModalItem}>
            <Feather name="archive" size={24} color="black" />
            <Text style={styles.navModalText}>Archive</Text>
          </View>

          <View style={styles.navHeaderModalItem}>
            <FontAwesome name="qrcode" size={24} color="black" />
            <Text style={styles.navModalText}>QR code</Text>
          </View>

          <TouchableOpacity
            style={styles.navHeaderModalItem}
            onPress={savedPostNavigationHandler}
          >
            <FontAwesome name="bookmark" size={24} color="black" />
            <Text style={styles.navModalText}>Saved</Text>
          </TouchableOpacity>

          <View style={styles.navHeaderModalItem}>
            <Feather name="users" size={24} color="black" />
            <Text style={styles.navModalText}>Supervision</Text>
          </View>

          <View style={styles.navHeaderModalItem}>
            <MaterialIcons name="verified" size={24} color="black" />
            <Text style={styles.navModalText}>Meta Verified</Text>
          </View>

          <View style={styles.navHeaderModalItem}>
            <Fontisto name="nav-icon-list-a" size={20} color="black" />
            <Text style={styles.navModalText}>Close Friends</Text>
          </View>

          <View style={styles.navHeaderModalItem}>
            <Feather name="star" size={24} color="black" />
            <Text style={styles.navModalText}>Favorites</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    alignItems: "center",
  },
  profileUsername: {
    flexDirection: "row",
    alignItems: "center",
  },
  createAdd: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },
  profileText: {
    fontSize: 20,
    fontWeight: "500",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalProfileImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    marginRight: 18,
  },
  modalUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalMainContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 18,
    paddingTop: 45,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  addHighlight: {
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  addHighlightContainer: {
    width: "20%",
  },
  addAccount: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingBottom: 22,
  },
  // nav header modal stylings
  navHeaderModalContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  navHeaderModalItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  navModalText: {
    fontSize: 18,
    paddingLeft: 14,
  },
});
