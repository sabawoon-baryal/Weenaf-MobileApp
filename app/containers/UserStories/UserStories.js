import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import { UserStoriesView } from "../../components/UserStories/UserStoriesView";

export class UserStories extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <UserStoriesView />
      </View>
    );
  }
}
