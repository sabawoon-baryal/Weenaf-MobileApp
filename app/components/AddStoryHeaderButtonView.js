import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export class AddStoryHeaderButtonView extends Component {
  render() {
    return (
      <View>
        {this.props.disablePostBtn
          ? <TouchableOpacity
              style={{ paddingRight: 20 }}
              disabled={this.props.disablePostBtn}
            >
              <Text style={{ color: "gray", fontSize: 18 }}>Post</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              onPress={() => {
                this.props.onPressPostBtn();
              }}
              style={{ paddingRight: 20 }}
            >
              <Text style={{ color: "rgb(255, 255, 255)", fontSize: 18 }}>
                Post
              </Text>
            </TouchableOpacity>}
      </View>
    );
  }
}
