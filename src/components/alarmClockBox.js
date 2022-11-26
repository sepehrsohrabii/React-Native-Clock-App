import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import theme from "../config/theme";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const AlarmClockBox = (alarm) => {
  return (
    <Box>
      <TitleText>{alarm.alarm.split(":")[2]}</TitleText>
      <ClockNumbers>
        {alarm.alarm.split(":")[0]}:{alarm.alarm.split(":")[1]}
      </ClockNumbers>
    </Box>
  );
};
const Box = styled.View`
  width: 100%;
  height: 80px;
  box-shadow: 3px 4px 7px;
  justify-content: space-between;
  background: ${theme.colors.white};
  border-radius: 5px;
  align-items: "left";
  shadow-color: "#000";
  shadow-opacity: 0.5;
  border: 1px solid ${theme.colors.secondary};
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  margin-bottom: 10px;
`;
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
const ClockNumbers = styled.Text`
  font-size: ${theme.typography.heading1.fontSize};
  font-family: ${theme.typography.heading1.fontFamily};
  color: ${theme.colors.lightGray};
`;
const styles = StyleSheet.create({});

export default AlarmClockBox;
