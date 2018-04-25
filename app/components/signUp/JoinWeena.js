import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { styles } from "../../styles/styles";

export class JoinWeena extends Component {
  constructor() {
    super();
  }

  handleThePress = () => {
    this.props.toContact();
  };
  goToLogin = () => {
    this.props.toLogin();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20 }}>Join Weena.af</Text>
        <Text
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          Donate Blood Save Life
        </Text>
        <Text
          style={{
            marginVertical: 20,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          By signing up, you agree to Weena.af Terms & Conditions
        </Text>
        <TouchableOpacity
          style={styles.joinWeena}
          onPress={this.handleThePress.bind(this)}
        >
          <Text style={{ color: "white" }}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.haveAccount}
          onPress={this.goToLogin.bind(this)}
        >
          <Text style={{ color: "red" }}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
