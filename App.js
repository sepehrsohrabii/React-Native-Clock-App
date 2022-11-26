import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Layout from "./src/layout/layout";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <MyStatusBar style="light" backgroundColor="#850E35" animated={true} />
      <Layout />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E4",
    justifyContent: "center",
  },
  navTab: {
    color: "#FFF5E4",
    fontSize: 42,
  },
});
