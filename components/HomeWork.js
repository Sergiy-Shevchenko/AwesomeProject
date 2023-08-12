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
  SafeAreaView,
} from "react-native";

export default function HomeWork() {
  const [text, setText] = useState("");

  const signIn = () => {
    console.debug("Welcome!");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.welcomeTitle}>Welcome home page</Text>
            </View>
            {/* <View style={styles.formContainer}>
              <Text style={styles.formTitle}>Sign In</Text>
              <View>
                <Text>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Input your email"
                  autoComplete="email"
                  value={text}
                  onChangeText={setText}
                />
              </View>
              <View>
                <Text>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Input your password"
                  autoComplete="password"
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonTitle}>Sign In</Text>
              </TouchableOpacity>
            </View> */}
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
