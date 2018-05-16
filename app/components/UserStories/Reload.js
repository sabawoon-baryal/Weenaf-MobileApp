import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../../styles/styles";

export class Reload extends Component {
  handleReload = () => {
    this.props.reload(true);
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleReload}>
          <View style={styles.failedLoadStories}>
            <Text>Failed to load stories</Text>
            <Text>tap to refresh</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
