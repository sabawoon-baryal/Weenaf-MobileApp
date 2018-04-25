import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { UserGenderView } from "../components/signUp/UserGenderView";

export class SignUpGender extends Component {
  goToBloodType = () => {
    this.props.navigation.navigate("SignUpBloodType");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <UserGenderView toBloodType={this.goToBloodType} />
      </View>
    );
  }
}
