import React from "react";
import { View, Button, Linking, Text } from "react-native";

export default function LinkingButtonScreen({ navigation }) {
  const profileUrl = "demo://app/profile/234";
  const notificationsUrl = "demo://app/notifications";
  const homeUrl = "demo://app/home/123";
  const settingsUrl = "demo://app/settings";

  return (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Deeplink to Profile"
        onPress={() => {
          Linking.openURL(profileUrl);
        }}
      /><Text>{"\n"}</Text>
      <Button
        title="Deeplink to Notifications"
        onPress={() => {
          Linking.openURL(notificationsUrl);
        }}
      /><Text>{"\n"}</Text>
      <Button
        title="Deeplink to Home"
        onPress={() => {
          Linking.openURL(homeUrl);
        }}
      /><Text>{"\n"}</Text>
      <Button
        title="Deeplink to Setting"
        onPress={() => {
          Linking.openURL(settingsUrl);
        }}
      /><Text>{"\n"}</Text>

      <Button
        title="Open public Url"
        onPress={() => {
          Linking.openURL("https://srishti-maurya.netlify.app/");
        }}
      />
    </View>
  );
}