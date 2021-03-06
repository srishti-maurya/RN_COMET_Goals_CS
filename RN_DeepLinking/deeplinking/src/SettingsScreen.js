import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"\n"}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} /><Text>{"\n"}</Text>
      <Button
        title="Go Linking Buttons"
        onPress={() => navigation.navigate("LinkingButton")}
      />
    </View>
  );
}