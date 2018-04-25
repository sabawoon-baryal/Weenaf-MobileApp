import React, { Component } from "react";
import {
  Picker,
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";

import ModalDropdown from "react-native-modal-dropdown";

import { styles } from "../../styles/styles";

export class UserBloodTypeView extends Component {
  constructor() {
    super();
    this.state = { blood: "", signinUp: false };
  }

  handleThePress = () => {
    this.props.passInfo(this.state.blood);
    this.setState({ signinUp: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
          What's Your Blood Type?
        </Text>
        <Picker
          selectedValue={this.state.user}
          onValueChange={blood => this.setState({ blood: blood })}
          style={{
            width: "100%",
            justifyContent: "center"
          }}
        >
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
        </Picker>

        <TouchableOpacity
          style={styles.joinWeena}
          onPress={this.handleThePress.bind(this)}
        >
          <Text style={{ color: "white" }}>Create Account</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10 }} />
        {this.state.signinUp && <ActivityIndicator />}
      </View>
    );
  }
}
