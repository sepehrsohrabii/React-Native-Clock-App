import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import theme from "../config/theme";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import AlarmClock from "react-native-alarm-clock";

const firebaseConfig = {
  apiKey: "AIzaSyBi7TqiN_fuuR_Yyi9q9Jm19DKJv5bN7xU",
  authDomain: "react-native-clock.firebaseapp.com",
  projectId: "react-native-clock",
  storageBucket: "react-native-clock.appspot.com",
  messagingSenderId: "78775813041",
  appId: "1:78775813041:web:2ea0c10659409c3c12b390",
  measurementId: "G-L3WFH4HLXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const AddAlarmClock = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hours, onChangeHours] = useState(null);
  const [minutes, onChangeMinutes] = useState(null);
  const [title, onChangeTitle] = useState(null);
  const saveAlarm = async (item1, item2, item3) => {
    if (
      item1 != null &&
      item2 != null &&
      item3 != null &&
      0 <= item1 <= 23 &&
      0 <= item2 <= 59
    ) {
      try {
        const docRef = await addDoc(collection(db, "alarms"), {
          alarm: `${item1}:${item2}:${item3}`,
        });

        let date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(item1, item2);
        AlarmClock.createAlarm(date.toISOString(), item3);

        /// console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        /// console.error("Error adding document: ", e);
      }
    }
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TitleView>
                <TitleText>Set an alarm</TitleText>
              </TitleView>
              <Text style={styles.modalText}>We will notify you!</Text>
            </View>
            <View style={styles.inputsView}>
              <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={onChangeTitle}
                value={title}
              />
              <TextInput
                style={styles.input}
                placeholder="Hours"
                keyboardType="numeric"
                onChangeText={onChangeHours}
                value={hours}
                maxLength={2}
              />
              <Text style={{ margin: 10 }}>:</Text>
              <TextInput
                style={styles.input}
                placeholder="Minutes"
                keyboardType="numeric"
                onChangeText={onChangeMinutes}
                value={minutes}
                maxLength={2}
              />
            </View>
            <View style={styles.buttonView}>
              <Pressable
                style={styles.buttonAdd}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  saveAlarm(hours, minutes, title);
                }}
              >
                <Text style={styles.buttonTextStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Ionicons name="add" size={24} color={theme.colors.darkGray} />
      </TouchableOpacity>
    </View>
  );
};
const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.Text`
  font-size: ${theme.typography.heading2.fontSize};
  font-family: ${theme.typography.heading2.fontFamily};
  color: ${theme.colors.lightGray};
`;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 230,
    width: 300,
    justifyContent: "space-between",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonView: {
    width: "100%",
    alignItems: "right",
  },
  buttonAdd: {
    alignItems: "right",
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonTextStyle: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
  },
  inputsView: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
  },
  input: {
    borderBottomWidth: 1,
    margin: 10,
  },
});

export default AddAlarmClock;
