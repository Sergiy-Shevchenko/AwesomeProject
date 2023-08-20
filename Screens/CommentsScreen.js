import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ButtonText,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import photo from "../components/img/photo.png";
import guets from "../components/img/guets.png";
import user from "../components/img/user.png";
import { FlatList } from "react-native-gesture-handler";

const CommentsScreen = ({ route }) => {
  const navigation = useNavigation();

  const state = [
      {
        id: 1,
        avatar: guets,
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        data: "09 червня, 2020 | 08:40",
        author: false,
      },
      {
        id: 2,
        avatar: user,
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        data: "09 червня, 2020 | 09:14",
        author: true,
      },
      {
        id: 3,
        avatar: guets,
        text: "Thank you! That was very helpful!",
        data: "09 червня, 2020 | 09:20",
        author: false,
      },
    ]
  
  const [comment, setComment] = useState('');

  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonGoBack}
            onPress={() => navigation.navigate("Post")}
          >
            <AntDesign name="arrowleft" color="#BDBDBD" size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Коментарі</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.photoView}>
            <Image
              source={photo}
              style={{
                height: 290,
                width: 365,
                borderRadius: 15,
              }}
            />
          </View>

          <FlatList
            data={state}
            renderItem={({ item }) => (
                <View
                style={[
                  styles.comment,
                  item.author && styles.reverse,
                ]}
              >
                <Image style={styles.avatar} source={item.avatar} />
                <View style={styles.text_section}>
                  <Text style={styles.text}>{item.text}</Text>
                  <Text style={styles.data}>{item.data}</Text>
                </View>
              </View>
            
            )}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              onChangeText={setComment}
              value={comment}
              placeholder="Коментувати..."
            />

            <TouchableOpacity style={styles.post_add}>
              <AntDesign name="arrowup" color="#FFFFFF" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 13,
  },

  buttonGoBack: {
    position: "absolute",
    top: 50,
    left: 15,
  },

  input_container: {
    // marginTop: 30,
    flexDirection: "row",
    width: 340,
    height: 50,
    justifyContent: "space-between",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#E8E8E8",
  },
  input: {
    fontSize: 16,
    color: "#BDBDBD",
    paddingLeft: 10,
  },
  input_section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },

  post_add: {
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    marginRight: 5,
    marginBottom: 3,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
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
  comment: {
    flexDirection: "row",
    paddingTop:15,
    gap: 15,
  },
  reverse: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },
  text_section: {
    flexShrink: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  text: {
    marginBottom: 8,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  data: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },

});
