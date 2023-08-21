import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PostScreen from "./screens/PostScreen";
import ReelScreen from "./screens/ReelScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={28} color="black" />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={28} color="black" />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="post"
          component={PostScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="diff-added" size={28} color="black" />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="reel"
          component={ReelScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="folder-video" size={28} color="black" />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={28} color="black" />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
