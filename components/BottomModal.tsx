import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";

const BottomModal = ({ children, isModalVisible, modalHandler }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={modalHandler}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 18,
    paddingTop: 45,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
});
