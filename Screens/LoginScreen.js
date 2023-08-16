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
  Alert
} from "react-native";

export default Login = () => {

  const[login, setLogin] = useState()
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigation = useNavigation();
  // const {params: {userEmail, userPassword}} = useRoute();

  const onLogin = () => {
    //Alert.alert("Login info", `Email: ${email},  Password: ${password}`);
    navigation.navigate("Home", )
    setEmail('')
    setPassword('')
    console.log(email);
    console.log(password);
  }

  return (
    
       
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
         <View style={styles.container}>
      <KeyboardAvoidingView  behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <ImageBackground style={styles.fone} source={require("../components/img/fone.png")} resizeMode="cover">
      
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
            <Text style={styles.title_link} 
            onPress={()=> navigation.navigate("Registration")}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
            
        </View>        
        
      </ImageBackground>
      </KeyboardAvoidingView>
        </View>
       </TouchableWithoutFeedback>
  
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 700,
    width: 395,
    // margin: 0,
    // padding: 0,
    // flexDirection: 'column' 
  },
  form: {
    // flex: 2,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    marginTop: 350,
    paddingBottom:100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 25,
    borderRadius: 50,
    color: '#1B4371',
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
  fone: {
    // flex:6,
// position: 'relative',
// top:0,
//left:-12,
margin:0,
padding:0, 
// width: '100%',
// height: '100%',
// width: flattenedStyle?.width,
  },
  // box: {
  //   zIndex: 2,
  //   position: "absolute",
  //   top: 190,
  //   left: 135,
  // },
  // photo: {
  //   width: 120,
  //   height: 120,
  //   backgroundColor: "#E6E6E6",
  //   border: 1,
  //   borderRadius: 10,
  //   borderColor: "#FF6C00",
  // },
  // img: {
  //   position: "absolute",
  //   width: 25,
  //   height: 25,
  //   top: -45,
  //   left: 105,
  // },
});
