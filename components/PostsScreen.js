import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Posts() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>

        <TouchableOpacity style={styles.button}>
          <Image source={require("./assets/log-out.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}></View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require("./assets/grid.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./assets/new.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./assets/user.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
  },
  header: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
    paddingTop: 50,
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: 50,
    left: 340,
  },
  body: {
    flex: 13,
  },
  footer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
