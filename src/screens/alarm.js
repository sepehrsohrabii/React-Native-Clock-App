import React, { useState, useEffect } from "react";
import { ScrollView, FlatList, StyleSheet } from "react-native";
import styled from "styled-components";
import AddAlarmClock from "../components/addAlarmClock";
import AlarmClockBox from "../components/alarmClockBox";

import theme from "../config/theme";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const Alarm = () => {
  const [data, setData] = useState([]);
  const getSavedAlarms = async () => {
    const listData = [];
    const querySnapshot = await getDocs(collection(db, "alarms"));
    querySnapshot.forEach((doc) => {
      listData.push(doc.data()["alarm"]);
      /// console.log(doc.data()["alarm"]);
    });
    setData(listData);
    return data;
  };
  useEffect(() => {
    getSavedAlarms();
  }, [data]);
  return (
    <StyledView>
      <TitleView>
        <TitleTextView>Alarm</TitleTextView>
        <AddAlarmClock />
      </TitleView>
      <FlatList
        data={data}
        renderItem={({ item }) => <AlarmClockBox alarm={item} />}
        styles={styles.listView}
      />
    </StyledView>
  );
};
const StyledView = styled.View`
  padding-vertical: 50px;
  padding-horizontal: 30px;
  height: 100%;
`;
const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const TitleTextView = styled.Text`
  font-size: ${theme.typography.heading1.fontSize};
  font-family: ${theme.typography.heading1.fontFamily};
  color: ${theme.colors.lightGray};
`;
const styles = StyleSheet.create({
  listView: {
    overflow: "visible",
  },
});
export default Alarm;
