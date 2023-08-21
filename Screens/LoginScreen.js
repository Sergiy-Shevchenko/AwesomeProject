import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

export default Login = () => {
  const [login, setLogin] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  // const {params: {userEmail, userPassword}} = useRoute();

  const onLogin = () => {
    //Alert.alert("Login info", `Email: ${email},  Password: ${password}`);
    navigation.navigate("Home");
    setEmail("");
    setPassword("");
    console.log(email);
    console.log(password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <KeyboardAvoidingView  behavior={Platform.OS == 'ios' ? 'padding' : 'height'}> */}
        <ImageBackground
          style={styles.background}
          source={require("../components/img/fone.png")}
          resizeMode="cover"
        >
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="  Адреса електронної пошти"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="  Пароль"
            />
            <TouchableOpacity style={styles.buton} onPress={onLogin}>
              <Text style={styles.title_button}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
              <Text
                style={styles.title_link}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* </KeyboardAvoidingView> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
  },
  form: {
    backgroundColor: "#FFFFFF",
    height: "55%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 25,
    borderRadius: 50,
    color: "#1B4371",
  },
  title_button: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  title_link: {
    fontSize: 16,
    color: "#1B4371",
  },
  input: {
    backgroundColor: "#E6E6E6",
    width: 343,
    height: 50,
    paddingLeft: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  buton: {
    marginTop: 24,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 50,
  },
  link: {
    marginTop: 24,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
