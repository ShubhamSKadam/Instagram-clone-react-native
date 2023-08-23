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
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store";
import SavedPostScreen from "./screens/SavedPostScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  function BottomTabScreens() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color="black"
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "search-sharp" : "search-outline"}
                size={28}
                color="black"
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="post"
          component={PostScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Octicons
                name="diff-added"
                size={28}
                color={focused ? "gray" : "black"}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="reel"
          component={ReelScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "play-box" : "play-box-outline"}
                size={28}
                color="black"
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                name={focused ? "user" : "user-o"}
                size={28}
                color="black"
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabScreens"
            component={BottomTabScreens}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="All Saved Posts"
            component={SavedPostScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
