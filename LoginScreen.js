import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";


export default function Login() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/fone.png")} resizeMode="cover">
      {/* <View style={styles.box}>
          <View style={styles.photo}></View> 
           <TouchableOpacity> 
           <Image style={styles.img} source={require('./assets/add.png')}/>
          </TouchableOpacity> 
        </View>  */}
        <View style={styles.form}>
          <Text style={styles.title}>Увійти</Text>
            <TextInput
            style={styles.input}
            // onChangeText
            // value
            placeholder="  Адреса електронної пошти"
          />
          <TextInput
            style={styles.input}
            // onChangeText
            // value
            placeholder="  Пароль"
          />
          <TouchableOpacity style={styles.buton}>
            <Text style={styles.title_button}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.title_link}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 700,
    width: 395,
    margin: 0,
    padding: 0,
  },
  form: {
    // flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginTop: 400,
    borderTopLeftRadius: 25,
    borderTopRightRadius:25
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 25,
    borderRadius: 50,
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
    zIndex: 2, 
    position: 'absolute',
    top: 190,
    left: 135,
    
  },
  photo: {
    width: 120, 
    height: 120,
    backgroundColor: "#E6E6E6",
    border: 1,
    borderRadius: 10,
    borderColor: "#FF6C00"
  },
  img: {
    position: 'absolute',
    width: 25,
    height: 25,
    top: -45,
    left: 105,
  },
});
