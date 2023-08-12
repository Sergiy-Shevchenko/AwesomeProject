import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen.js";
import CreatePostsScreen from "./CreatePostScreen.js";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen.js";

// const PostsScreen = ({navigation}) => {
//   return (
//     // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.navigate("PostsScreen")}
//             >
//               <Image source={require("../components/img/grid.png")} />
//             </TouchableOpacity>
//     // </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    
    <Tabs.Navigator
    screenOptions={{  
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        height: 84,
        paddingTop: 8,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#E8E8E8",
      },
      tabBarItemStyle: {
        flex: 1,
        maxWidth: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "transparent",
      },
      }}>
    
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
          // tabBarButton: () => {
            // <TouchableOpacity
            //   style={styles.button}
            //   onPress={() => navigation.navigate("Login")}
            // >
            //   <Image source={require("../components/img/log-out.png")} />
            // </TouchableOpacity>
          // }
        }}
screenOptions={({ route }) => ({
          tabBarIcon: () => {
           return (<Image source={require("../components/img/grid.png")} />)
          },
        })}


      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: false,          
        }}
        />

        <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,          
        }}
        
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
