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

export class UserPasswordView extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      emptyPassword: true,
      confPassword: "",
      emptyConfirmPassword: true,
      matchBoth: true,
      lengthMatch: true
    };
  }

  handleThePress = () => {
    if (this.state.password == this.state.confPassword) {
      this.setState({ matchBoth: true });
      this.props.passInfo(this.state.password, this.state.confPassword, true);
    } else {
      this.setState({ matchBoth: false });
    }
    if (
      this.state.password.length >= 6 &&
      this.state.confPassword.length >= 6
    ) {
      this.setState({ lengthMatch: true });
    } else {
      this.setState({ lengthMatch: false });
    }
  };

  render() {
    let indicator = this.props.loading;
    let error = this.props.error;
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", fontSize: 20, marginBottom: 20 }}>
          Create a Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <TextInput
            onChangeText={password => {
              if (password == "") {
                this.setState({ password: password, emptyPassword: true });
              }
              if (password !== "") {
                this.setState({ password: password, emptyPassword: false });
              }
            }}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.nameTextInput}
            underlineColorAndroid="rgba(0,0,0,0)"
          />

          <TextInput
            onChangeText={confirmPassword => {
              if (confirmPassword == "") {
                this.setState({
                  confPassword: confirmPassword,
                  emptyConfirmPassword: true
                });
              }
              if (confirmPassword !== "") {
                this.setState({
                  confPassword: confirmPassword,
                  emptyConfirmPassword: false
                });
              }
            }}
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.nameTextInput}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
        </View>

        {this.state.emptyPassword || this.state.emptyConfirmPassword
          ? <TouchableOpacity style={styles.disabledJoinWeena} disabled={true}>
              <View />
              <Text style={styles.disabledJoinWeenaBtnText}>Continue</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.joinWeena}
              onPress={this.handleThePress.bind(this)}
            >
              <View />
              <Text style={styles.joinWeenaBtnText}>Continue</Text>
              <View>
                {indicator && this.state.validEmail
                  ? <ActivityIndicator color="#fff" />
                  : <View />}
              </View>
            </TouchableOpacity>}

        <View style={{ marginVertical: 10 }}>
          {this.state.matchBoth
            ? <Text />
            : <Text>Password does not match</Text>}
        </View>

        <View style={{ marginVertical: 10 }}>
          {this.state.lengthMatch
            ? <Text />
            : <Text>Password must be atleast 6 characters</Text>}
        </View>

        <View>
          <Text>
            {error}
          </Text>
        </View>
      </View>
    );
  }
}
