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

export class UserGenderView extends Component {
  constructor() {
    super();
    this.state = {
      gender: 0
    };
  }

  handleThePress = () => {
    this.props.toBloodType();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
          What's Your Gender?
        </Text>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <TouchableOpacity
            style={styles.genderButton}
            onPress={this.handleThePress.bind(this)}
          >
            <Text style={{ color: "white" }}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.genderButton}
            onPress={this.handleThePress.bind(this)}
          >
            <Text style={{ color: "white" }}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
