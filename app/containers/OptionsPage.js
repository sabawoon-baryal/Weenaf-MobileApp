import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";

import { MoreOptionsView } from "../components/MoreOptionsView";
export class OptionsPage extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "red"
    },
    title: "More",
    headerTintColor: "white"
  };

  goToEditProfile = () => {
    this.props.navigation.navigate("Main");
  };

  goToProfile = () => {
    this.props.navigation.navigate("Profile");
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MoreOptionsView
          toEditProfile={this.goToEditProfile}
          toProfile={this.goToProfile}
        />
      </View>
    );
  }
}
