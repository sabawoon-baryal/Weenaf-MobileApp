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

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class UserContactView extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emptyEmail: true,
      validEmail: true
    };
  }

  handleThePress = () => {
    let valid;
    if (reg.test(this.state.email) === true) {
      valid = true;
    } else {
      this.setState({ validEmail: false });
    }

    if (this.state.email == "") {
      this.setState({ emptyEmail: false });
    }

    this.props.passInfo(this.state.email, valid);
  };

  render() {
    let indicator = this.props.loading;
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
          What's Your Email Address
        </Text>
        <TextInput
          onChangeText={email => {
            if (email == "") {
              this.setState({ email: email, emptyEmail: true });
            }
            if (email !== "") {
              this.setState({ email: email, emptyEmail: false });
            }
          }}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.textInput}
          underlineColorAndroid="rgba(0,0,0,0)"
        />

        {this.state.emptyEmail
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

        <View style={{ marginTop: 10 }}>
          {this.state.validEmail
            ? <Text />
            : <Text>Please enter a valid email</Text>}
        </View>
      </View>
    );
  }
}
