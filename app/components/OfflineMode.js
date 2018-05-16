import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles/styles";
import Icon from "react-native-vector-icons/FontAwesome";

export class OfflineMode extends Component {
  handleOfflineMode = () => {
    this.props.refreshOfflineMode(true);
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.handleOfflineMode}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon name="cloud" size={50} color="black" />
        <Text>You're in offline mode.</Text>
        <Text>Please check your connection.</Text>
        <Text>Tap to retry</Text>
      </TouchableOpacity>
    );
  }
}
