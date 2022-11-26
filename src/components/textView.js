import {
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import React from "react";
import { View, Text } from "react-native";

const H1TextView = () => {
  return (
    <View>
      <Text
        style={{
          color: this.props.color,
          fontSize: this.props.size,
          fontFamily: Roboto_900Black,
        }}
      >
        {this.props.children}
      </Text>
    </View>
  );
};

const H2TextView = ({ size, color, children }) => {
  return (
    <View>
      <Text
        style={{ color: color, fontSize: size, fontFamily: Roboto_700Bold }}
      >
        {children}
      </Text>
    </View>
  );
};

const H3TextView = ({ size, color, children }) => {
  return (
    <View>
      <Text
        style={{ color: color, fontSize: size, fontFamily: Roboto_500Medium }}
      >
        {children}
      </Text>
    </View>
  );
};

const H4TextView = ({ size, color, children }) => {
  return (
    <View>
      <Text
        style={{ color: color, fontSize: size, fontFamily: Roboto_400Regular }}
      >
        {children}
      </Text>
    </View>
  );
};

const H5TextView = ({ size, color, children }) => {
  return (
    <View>
      <Text
        style={{ color: color, fontSize: size, fontFamily: Roboto_300Light }}
      >
        {children}
      </Text>
    </View>
  );
};

const H6TextView = (size, color, children) => {
  return (
    <View>
      <Text
        style={{ color: color, fontSize: size, fontFamily: Roboto_100Thin }}
      >
        {children}
      </Text>
    </View>
  );
};

export default {
  H1TextView,
  H2TextView,
  H3TextView,
  H4TextView,
  H5TextView,
  H6TextView,
};
