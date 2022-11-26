import React, { useState, useEffect } from "react";
import {
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import styled from "styled-components";
import theme from "../config/theme";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const StopWatch = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  return (
    <StyledView>
      <TitleView>
        <TitleTextView>Stop Watch</TitleTextView>
      </TitleView>
      <View style={styles.sectionStyle}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart}
          reset={resetStopwatch}
          options={options}
          getTime={(time) => {
            /// console.log(time);
          }}
        />
        <TouchableHighlight
          onPress={() => {
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
          }}
        >
          <Text style={styles.buttonText}>
            {!isStopwatchStart ? "START" : "STOP"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setIsStopwatchStart(false);
            setResetStopwatch(true);
          }}
        >
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.sectionStyle}>
        <Timer
          totalDuration={timerDuration}
          msecs
          start={isTimerStart}
          reset={resetTimer}
          options={options}
          handleFinish={() => {
            alert("Custom Completion Function");
          }}
          getTime={(time) => {
            /// console.log(time);
          }}
        />
        <TouchableHighlight
          onPress={() => {
            setIsTimerStart(!isTimerStart);
            setResetTimer(false);
          }}
        >
          <Text style={styles.buttonText}>
            {!isTimerStart ? "START" : "STOP"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setIsTimerStart(false);
            setResetTimer(true);
          }}
        >
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableHighlight>
      </View>
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
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  sectionStyle: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
export default StopWatch;
