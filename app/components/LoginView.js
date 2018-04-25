import React, { Component } from "react";
import {
  ScrollView,
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { styles } from "../styles/styles";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emptyEmail: true,
      validEmail: true,
      password: "",
      emptyPassword: true
    };
  }

  handleThePress = () => {
    let valid;
    if (reg.test(this.state.email) === true) {
      this.setState({ validEmail: true });
      valid = true;
    } else {
      this.setState({ validEmail: false });
    }

    if (this.state.email == "") {
      this.setState({ emptyEmail: false });
    }
    if (this.state.password == "") {
      this.setState({ emptyPassword: false });
    }

    this.sendDataToLoginView(valid);
  };
  goToSignUp = () => {
    this.props.signUp();
  };
  goToForgotPassword = () => {
    this.props.forgotPassword();
  };

  sendDataToLoginView = valid => {
    console.log("valid: ", valid);
    this.props.getData(this.state.email, this.state.password, valid);
  };

  render() {
    let indicator = this.props.loading;
    let error = this.props.theError;

    var myEmptyPassword;
    var myEmptyEmail;

    console.log("default: ", this.state.emptyEmail);

    return (
      <View style={styles.container}>
        <TextInput
          ref={component => (this._emailTextInput = component)}
          onChangeText={email => {
            if (email == "") {
              this.setState({ email: email, emptyEmail: true });
              console.log("email is null", this.state.emptyEmail);
            }
            if (email !== "") {
              this.setState({ email: email, emptyEmail: false });
              console.log("email is not null: ", this.state.emptyEmail);
            }
          }}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.textInput}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <TextInput
          ref={component => (this._passwordTextInput = component)}
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
          style={styles.textInput}
          underlineColorAndroid="rgba(0,0,0,0)"
        />

        {this.state.emptyEmail || this.state.emptyPassword
          ? <TouchableOpacity style={styles.disabledLoginBtn} disabled={true}>
              <View />
              <Text style={styles.disabledLoginBtnText}>Login</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              style={styles.loginBtn}
              onPress={this.handleThePress.bind(this)}
            >
              <View />
              <Text style={styles.loginBtnText}>Login</Text>
              <View>
                {indicator && this.state.validEmail
                  ? <ActivityIndicator color="#fff" />
                  : <View />}
              </View>
            </TouchableOpacity>}

        <View>
          <Text>
            {error}
          </Text>
        </View>

        <View>
          {this.state.validEmail ? <Text /> : <Text>invalid email</Text>}
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={this.goToForgotPassword}
          // hitSlop={{ top: 2, left: 2, bottom: 2, right: 2 }}
        >
          <Text style={styles.clearButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={{ margin: 20 }}>OR</Text>

        <TouchableOpacity style={styles.newAccButton} onPress={this.goToSignUp}>
          <Text style={styles.newAccButtonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
