import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export class NotificationsPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Notifications</Text>
      </View>
    );
  }
}
