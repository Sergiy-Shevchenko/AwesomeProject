import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

export default Registration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onRegistered = () => {
    navigation.navigate("Login");
    setLogin("");
    setEmail("");
    setPassword("");

    Alert.alert(
      "Registration info",
      `Login: ${login}, E-mail: ${email}, Password: ${password}`
    );
    console.log(login);
    console.log(email);
    console.log(password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        > */}
        <ImageBackground
          style={styles.background}
          source={require("../components/img/fone.png")}
          resizeMode="cover"
        >
          <View style={styles.form}>
            <View style={styles.box}>
              <View style={styles.photo}></View>
              <TouchableOpacity>
                <Image
                  style={styles.img}
                  source={require("../components/img/add.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <TextInput
              style={styles.input}
              onChangeText={setLogin}
              value={login}
              placeholder="  Логін"
            />
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
              secureTextEntry
              placeholder="  Пароль"
            />

            <TouchableOpacity style={styles.buton} onPress={onRegistered}>
              <Text style={styles.title_button}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.link}
              onPress={() =>
                navigation.navigate("Login", {
                  sessionId: 45,
                  login: `${login}`,
                  email: `${email}`,
                })
              }
            >
              <Text style={styles.title_link}>Вже є акаунт? Увійти</Text>
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
    height: "65%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    paddingTop: 60,
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
  box: {
    marginTop: -60,
    position: "absolute",
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#E6E6E6",
    border: 1,
    borderRadius: 10,
    borderColor: "#FF6C00",
  },
  img: {
    position: "absolute",
    width: 25,
    height: 25,
    top: -45,
    left: 105,
  },
});
