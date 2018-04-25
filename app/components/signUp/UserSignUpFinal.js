import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { styles } from "../../styles/styles";

export class UserSignUpFinal extends Component {
  handleThePress = () => {
    this.props.toMainPage();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
          Congradulations
        </Text>

        <Text
          style={{
            marginVertical: 20,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          Now you'r a memeber of Weena.af, you can add additional informations
          later
        </Text>

        <TouchableOpacity
          style={styles.joinWeena}
          onPress={this.handleThePress.bind(this)}
        >
          <Text style={{ color: "white" }}>Continue Using App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
