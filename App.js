import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Registration from "./RegistrationScreen/";
import Login from "./components/LoginScreen";
import Posts from "./components/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Registration />
      {/* <Login/> */}
      {/* <Posts/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
