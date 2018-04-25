import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";

export class MapPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is Map Screen</Text>
        <Button
          title="Location"
          onPress={() => this.props.navigation.navigate("Search")}
        />
      </View>
    );
  }
}
