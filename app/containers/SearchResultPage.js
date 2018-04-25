import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export class SearchResultPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Search Result</Text>
      </View>
    );
  }
}
