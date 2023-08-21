import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PostScreen from "./screens/PostScreen";
import ReelScreen from "./screens/ReelScreen";
import ProfileScreen from "./screens/ProfileScreen";


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="search" component={SearchScreen}></Tab.Screen>
        <Tab.Screen name="post" component={PostScreen}></Tab.Screen>
        <Tab.Screen name="reel" component={ReelScreen}></Tab.Screen>
        <Tab.Screen name="profile" component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
