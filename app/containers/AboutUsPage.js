import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";

export class AboutUsPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is Login Screen</Text>
        <Button
          title="Splash"
          onPress={() => this.props.navigation.navigate("Splash")}
        />
      </View>
    );
  }
}
