import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export class SearchPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Search</Text>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate("SearchResult")}
        />
      </View>
    );
  }
}
