import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import CreatePostScreen from "./CreatePostScreen.js";

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

          //  tabBarIcon: ({focused}) => (
          //   <View style={{
          //     alignItems: "center",
          //     justifyContent: "center",
          //     // top: 10
          //   }}>
          //      <Image
          //             source={require("../components/img/grid.png")}
          //             style={{
          //               resizeMode: 'contain',
          //               width: 40,
          //               height: 40,
          //             //   tintColor: focused ? '#FF6C00' : '#BDBDBD',
          //              }}
          //           />
          //   </View>
          //  )
        }}
      />
      <Tab.Screen
        name="Публікації"
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

          // tabBarIcon: ({focused}) => (
          //   <View style={{
          //     alignItems: "center",
          //     justifyContent: "center",
          //     // top: 10
          //   }}>
          //      <Image
          //             source={require("../components/img/new.png")}
          //              style={{
          //               resizeMode: 'contain',
          //               width: 50,
          //               height: 30,

          //             //   tintColor: focused ? '#FF6C00' : '#BDBDBD',
          //              }}
          //           />
          //   </View>
          //  )
        }}
      />
      <Tab.Screen
        name="Профіль"
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

          // tabBarIcon: ({focused}) => (
          //   <View style={{
          //     alignItems: "center",
          //     justifyContent: "center",
          //     // top: 10
          //   }}>
          //      <Image

          //             source={require("../components/img/user.png")}
          //             style={{
          //               resizeMode: 'contain',
          //               width: 25,
          //               height: 25,
          //               // tintColor: focused ? '#FF6C00' : '#BDBDBD',
          //              }}
          //           />
          //   </View>
          //  )
        }}
      />
    </Tab.Navigator>
  );
};

