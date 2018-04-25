import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { ForgotPasswordView } from "../components/ForgotPasswordView";

export class ForgotPasswordPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ForgotPasswordView />
      </View>
    );
  }
}
