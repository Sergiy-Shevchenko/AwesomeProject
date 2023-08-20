import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

export default PostsScreen = ({ route }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const { photo, photoName, photoLocation, photoMap } = route.params;
      const newPost = {
        id: new Date(),
        title: photoName,
        picture: photo,
        locationName: photoLocation,
        location: photoMap,
      };
      setData((prev) => [newPost, ...prev]);
    }
  }, [route]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
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
              <Text style={styles.user_name}>Наталія Романова</Text>
              <Text style={styles.user_email}>email@example.com</Text>
            </View>
          </View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
    backgroundColor: "FFFFFF",
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
  post: {
    top: 15,
    width: 360,
    // height: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  item_picture: {
    width: "100%",
    height: 230,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
  },
  item_title: {
    fontSize: 16,
    fontWeight: 500,
    paddingTop: 5,
  },
  comment_location: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 3,
    paddingBottom: 5,
  },
  location: {
    flexDirection: "row",
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
