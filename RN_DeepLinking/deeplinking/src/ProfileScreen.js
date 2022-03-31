import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const {
    params: { id },
  } = route;
  return (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
    {id != 1 && <Text style={styles.attributeTitle}>Deeplink id = {id}</Text>}
    <Text>{"\n"}</Text>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      /><Text>{"\n"}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  attributeTitle: {
    padding: 20,
    color: "#006778",
  },
});
export default ProfileScreen;