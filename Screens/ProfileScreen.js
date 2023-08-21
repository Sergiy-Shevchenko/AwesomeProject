import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
  FlatList
} from "react-native";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
  EvilIcons
} from "@expo/vector-icons";
import userPhoto from '../components/img/user_profile_photo.png'

export default ProfileScreen = ({ route }) => {
  const [user, setUser] = useState(userPhoto);
  const [name, setName] = useState("Natali Romanova");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const { photo, photoName, photoLocation, photoMap } = route.params;
      const newPost = {
        title: photoName,
        picture: photo,
        locationName: photoLocation,
        location: photoMap,
      };
      setData((prev) => [newPost, ...prev]);
    }
  }, [route]);





  const deletePhoto = () => {
    setUser(null);
  }

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
              <View style={styles.photo}> 
              <Image source={user} />
              </View>
              <TouchableOpacity onPress={deletePhoto}>
              <AntDesign
                style={styles.img}
                name="closecircleo"
                color="#BDBDBD"
                backgroundColor="#FFFFFF"             
                size={24}
              />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            style={styles.button_exit}
            onPress={() => navigation.navigate("Login")}
          >
            <Image source={require("../components/img/log-out.png")} />
          </TouchableOpacity>
            <Text style={styles.title}>{name}</Text>
            <View>
            <FlatList
            data={data}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.post}>
                <Image source={item.picture} style={styles.item_picture} />
                <Text style={styles.item_title}>{item.title}</Text>
                <View style={styles.comment_location}>
                  <View style={styles.comment}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Comments")}
                    >
                      <EvilIcons
                        style={styles.location_icon}
                        name="comment"
                        color="#BDBDBD"
                        size={36}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.location}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Map", { location: item.location })
                      }
                    >
                      <Feather
                        style={styles.location_icon}
                        name="map-pin"
                        color="#BDBDBD"
                        size={24}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      {item.locationName}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />

            </View>
           
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
    height: "75%",
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
    paddingTop: 30,
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
  button_exit: {
    marginTop: 24,
    borderRadius: 50,
    marginTop: 2,
    alignItems: "flex-end",
    width: '100%',
   
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
    borderRadius: 50,
  },
});
