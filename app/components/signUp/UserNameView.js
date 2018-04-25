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

export class UserNameView extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      emptyName: true
    };
  }

  handleThePress = () => {
    this.props.passInfo(this.state.name);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
          What's Your Name?
        </Text>

        <TextInput
          onChangeText={name => {
            if (name == "") {
              this.setState({ name: name, emptyName: true });
            }
            if (name !== "") {
              this.setState({ name: name, emptyName: false });
            }
          }}
          placeholder="Name"
          style={styles.textInput}
          underlineColorAndroid="rgba(0,0,0,0)"
        />

        {this.state.emptyName
          ? <TouchableOpacity style={styles.disabledJoinWeena} disabled={true}>
              <View />
              <Text style={styles.disabledJoinWeenaBtnText}>Continue</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.joinWeena}
              onPress={this.handleThePress.bind(this)}
            >
              <Text style={styles.joinWeenaBtnText}>Continue</Text>
            </TouchableOpacity>}
      </View>
    );
  }
}
