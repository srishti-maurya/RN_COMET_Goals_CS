import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/HomeScreen";
import NotificationsScreen from "./src/NotificationsScreen";
import ProfileScreen from "./src/ProfileScreen";
import SettingsScreen from "./src/SettingsScreen";
import LinkingButtonScreen from "./src/LinkingButtonScreen";
import linking from "./linking";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="LinkingButton" component={LinkingButtonScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
}