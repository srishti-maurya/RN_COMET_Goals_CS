import React from "react";
import { View, Button, Text } from "react-native";

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"\n"}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      /><Text>{"\n"}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}