import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import {  View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//-------------------------------------------------------------------
export default function PostsScreen() {
  const navigation = useNavigation();
  // const {params: { email, userLogin }
  // } = useRoute();
  return (    
    
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <KeyboardAvoidingView style={styles.container}>
        {/* <NavigationContainer>  */}
          <View style={styles.header}>
            <Text style={styles.title}>Публікації</Text> 

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={require("../components/img/log-out.png")} />
            </TouchableOpacity>
          </View> 
          <View style={styles.body}>
            <View style={styles.user_profile}>
              <Image source={require("../components/img/foto.png")} />
              <View style={styles.user_title}>
                <Text style={styles.user_name}>Ім'я користувача</Text>
                <Text style={styles.user_email}>Email</Text>
              </View>
            </View>
          </View>
      
      </KeyboardAvoidingView> 
      </TouchableWithoutFeedback> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
    backgroundColor: 'FFFFFF',
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
    paddingTop: 15,
    paddingLeft: 15,
    flex: 13,
  },
  user_profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  user_title: {
    marginLeft: 15,
  },
  user_name: {
    fontSize: 13,
    fontWeight: 700,
  },
  user_email: {
    fontSize: 11,
    fontWeight: 400,
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
