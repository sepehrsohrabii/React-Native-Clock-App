import React from "react";
import { View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorldClock from "../screens/worldClock";
import Alarm from "../screens/alarm";
import StopWatch from "../screens/stopWatch";
import styled from "styled-components";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "transparent",
  },
};

const Tab = createBottomTabNavigator();

const Layout = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainContainer>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          initialRouteName="Alarm"
          screenOptions={{
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#FFF5E4",
              paddingHorizontal: 20,
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="WorldClock"
            component={WorldClock}
            options={{
              headerShown: false,
              tabBarActiveTintColor: "#850E35",
              tabBarInactiveTintColor: "#303030",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="web-clock" size={28} />
              ),
              tabBarLabelStyle: {
                fontFamily: "Roboto_700Bold",
                fontSize: 12,
                marginBottom: 5,
              },
            }}
          />
          <Tab.Screen
            name="Alarm"
            component={Alarm}
            options={{
              headerShown: false,
              tabBarActiveTintColor: "#850E35",
              tabBarInactiveTintColor: "#303030",
              tabBarIcon: () => <Ionicons name="alarm-outline" size={28} />,
              tabBarLabelStyle: {
                fontFamily: "Roboto_700Bold",
                fontSize: 12,
                marginBottom: 5,
              },
            }}
          />
          <Tab.Screen
            name="StopWatch"
            component={StopWatch}
            options={{
              headerShown: false,
              tabBarActiveTintColor: "#850E35",
              tabBarInactiveTintColor: "#303030",
              tabBarIcon: () => <Entypo name="stopwatch" size={28} />,
              tabBarLabelStyle: {
                fontFamily: "Roboto_700Bold",
                fontSize: 12,
                marginBottom: 5,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
};
const MainContainer = styled.View`
  flex: 1;
  font-family: Roboto_700Bold;
  font-size: 42px;
`;
export default Layout;
