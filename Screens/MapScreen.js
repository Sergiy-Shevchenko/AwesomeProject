import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {


const {
    params: { location },
  } = useRoute();
  
//  console.log(location);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    
    })();
  }, []);



  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,          
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,

        }}
        showsUserLocation={true}
        mapType="standard"
        minZoomLevel={15}
      >
        {location && (
          <Marker title="Місце фото" coordinate={location} description="Вітаю!" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;