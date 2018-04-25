import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { UserSignUpFinal } from "../components/signUp/UserSignUpFinal";

export default class SignUpFianl extends Component {
  goToMainPage = () => {
    this.props.navigation.navigate("TabNavigation");
  };

  render() {
    const { email } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <UserSignUpFinal toMainPage={this.goToMainPage} />
      </View>
    );
  }
}
