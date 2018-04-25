import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export class MainPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Main Page</Text>
        <Button
          title="Add Story"
          onPress={() => this.props.navigation.navigate("AddStory")}
        />
      </View>
    );
  }
}
