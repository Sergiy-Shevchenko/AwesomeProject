import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

export default function CreatePostScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
  <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Post")}
            >
              <Image source={require("../components/img/arrow-left.png")} />
            </TouchableOpacity>

        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View style={styles.body}>        
          <View style={styles.image_container}> 
            <View style={styles.image}>
              <Image
                style={styles.image_icon}
                source={require("../components/img/Group1.png")}
              />
            </View>
            <TouchableOpacity >
              <Text style={styles.button_title}>Завантажити фото</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.input_container}> 
                <View style={styles.input_section}>
            <TextInput
            style={styles.input}
            // onChangeText={setEmail}
            // value={email}
            placeholder="Назва..."
          />
          </View>
          <View  style={styles.input_section}>
          <Image
                style={styles.location_icon}
                source={require("../components/img/map-pin.png")}
              />
            <TextInput
            style={styles.input}
            // onChangeText={setPassword}
            // value={password}
            placeholder="Місцевість..."
 
          />
          </View>
          
        </View>
        <TouchableOpacity style={styles.post_add}>
              <Text style={styles.button_title}>Опублікувати</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require("../components/img/trash.png")} />
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
  body: {
    paddingTop: 30,
    paddingLeft:25,
    paddingRight: 25,
    flex: 13,
    
  },
  image_container: {
    width: 343,
    height: 267,
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#E8E8E8",
  },
  image_icon: {},
  button: {
    position: "absolute",
    top: 50,
    left: 15,
  },
  button_title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 400,
    color: "#BDBDBD",
  },
  input_container: {
    marginTop: 50,
  },
  input: {
    fontSize: 16,
    color: "#BDBDBD",
    paddingTop: 5,
    marginTop: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#BDBDBD",
  },
  input_section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  location_icon: {
   marginRight:5,
    marginTop: 25,
  },
  post_add: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingTop: 8,
    paddingBottom: 15,
    backgroundColor: "#E8E8E8",
    borderRadius: 50
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
