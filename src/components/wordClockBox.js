import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import theme from "../config/theme";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const WorldClockBox = (selectedZone) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const getDetails = async () => {
    try {
      const response = await fetch(
        `https://timeapi.io/api/TimeZone/zone?timeZone=${selectedZone.selectedZone}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const json = await response.json();
      const dateTime = new Date(json.currentLocalTime);
      const year = dateTime.getFullYear();
      const month = dateTime.getMonth();
      const date = dateTime.getDate();
      const hours = dateTime.getHours();
      const minutes = dateTime.getMinutes();
      setData({
        year: year,
        month: month,
        date: date,
        hours: hours,
        minutes: minutes,
      });
      /// console.log(data);
    } catch (error) {
      /// console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Box>
      <TitleText>{selectedZone.selectedZone.split("/")[1]}</TitleText>
      <ClockNumbers>
        {data.hours}:{data.minutes}
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

export default WorldClockBox;
