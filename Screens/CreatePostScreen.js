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
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

export default CreatePostScreen = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [photo, setPhoto] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const addPhotoLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      const { id } = await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
      setPhotoId(id);
      addPhotoLocation();
    }
  };

  const editPhoto = () => {
    setPhoto(null);
    MediaLibrary.deleteAssetsAsync(photoId);
  };

  const resetData = () => {
    setPhoto(null);
    setPhotoName("");
    setPhotoLocation("");
  };

  const addPost = () => {
    if (!photo) {
      return Alert.alert("Додай фото");
    }
    if (!photoName) {
      return Alert.alert("Додай назву");
    }
    if (!photoLocation) {
      return Alert.alert("Додай місцевість");
    }

    navigation.navigate("Post", {
      photo,
      photoName,
      photoLocation,
      photoMap: location,
    });
    setPhoto("");
    setPhotoName("");
    setPhotoLocation("");


    // navigation.navigate("Profile", {
    //   photo,
    //   photoName,
    //   photoLocation,
    //   photoMap: location,
    // });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>;
      </View>
    );
  }
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
          <Text style={styles.title}>Створити публікацію</Text>
        </View>
        <View style={styles.body}>
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  color="#FFFFFF"
                  size={32}
                />
              </TouchableOpacity>
              {photo && (
                <View style={styles.takePhotoInner}>
                  <Image
                    source={{ uri: photo }}
                    style={{
                      height: 290,
                      width: 330,
                    }}
                  />
                </View>
              )}
              <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <View style={styles.takePhotoOut}>
                  <MaterialIcons
                    name="photo-camera"
                    color="#BDBDBD"
                    size={32}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
          <TouchableOpacity onPress={editPhoto}>
            <Text style={styles.camera_title}>
              {photo === null ? "Завантажити фото" : "Редагувати фото"}
            </Text>
          </TouchableOpacity>
          <View style={styles.input_container}>
            <View style={styles.input_section}>
              <TextInput
                style={styles.input}
                onChangeText={setPhotoName}
                value={photoName}
                placeholder="Назва..."
              />
            </View>
            <View style={styles.input_section}>
              <Feather
                style={styles.location_icon}
                name="map-pin"
                color="#BDBDBD"
                size={24}
              />
              <TextInput
                style={styles.input}
                onChangeText={setPhotoLocation}
                value={photoLocation}
                placeholder="Місцевість..."
              />
            </View>
            <TouchableOpacity style={styles.post_add} onPress={addPost}>
              <Text style={styles.button_title}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button_trash} onPress={resetData}>
            <Feather name="trash-2" color="#BDBDBD" size={32} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {   
    height: 320,
    borderRadius: 15,
  },
  photoView: {
    borderRadius: 25,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  flipContainer: {
    position: "absolute",
    top: 5,
    left: 320,
  },
  button: {
    alignSelf: "center",
    paddingTop: "65%",
    paddingBottom: "35%",
  },
  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  takePhotoInner: {
    position: "absolute",
    top: 15,
    left: 15,
    borderWidth: 2,
    borderColor: "white",
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
  buttonGoBack: {
    position: "absolute",
    top: 50,
    left: 15,
  },
  button_title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 400,
    color: "#FFFFFF",
  },
  camera_title: {
    fontSize: 16,
    fontWeight: 400,
    paddingTop: 10,
    color: "#BDBDBD",
  },
  input_container: {
    marginTop: 30,
  },
  input: {
    fontSize: 16,
    color: "#BDBDBD",
    paddingTop: 5,
    marginTop: 20,   
  },
  input_section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  location_icon: {
    marginRight: 5,
    marginTop: 25,
  },
  post_add: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingTop: 8,
    paddingBottom: 15,
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
  button_trash: {
    width: 70,
    height: 40,
    borderWidth: 2,
    borderColor: "#E6E6E6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
