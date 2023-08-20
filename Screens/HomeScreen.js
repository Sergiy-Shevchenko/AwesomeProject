import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import CreatePostScreen from "./CreatePostScreen.js";
import CommentsScreen from "./CommentsScreen.js";
import MapScreen from "./MapScreen.js";


const Tab = createBottomTabNavigator();

export default Home = () => {
  return (
    <Tab.Navigator
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
      }}
    >
      <Tab.Screen
        name="Post"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name="grid"
              color="#E8E8E8"
              size={size}
              style={{
                color: focused ? "#FF6C00" : "#E8E8E8",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ size, focused }) => (
            <AntDesign
              name="pluscircleo"
              color="#E8E8E8"
              size={size}
              style={{
                color: focused ? "#FF6C00" : "#E8E8E8",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <AntDesign
              name="user"
              color="#E8E8E8"
              size={size}
              style={{
                color: focused ? "#FF6C00" : "#E8E8E8",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
       <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
    </Tab.Navigator>
  );
};

