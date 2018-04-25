import React, { Component } from "react";
import {
  Text,
  NetInfo,
  View,
  Button,
  Platform,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import email from "react-native-email";

import { UserPasswordView } from "../components/signUp/UserPasswordView";
import {
  userPassword,
  requestSignUp,
  successSignUp,
  failureSignUp
} from "../actions/ActionCreators";
import SignUpReducer from "../reducers/SignUpReducer";

const USER_TOKEN = "user_token";

class SignUpPassword extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      netConnectivity: true
    };
  }

  async storeToken(token) {
    await AsyncStorage.setItem(USER_TOKEN, token);
  }
  onSignUp = (password, confirmPassword, matchBoth) => {
    this.props.onSignUpPassword(password, confirmPassword);
    this.signUp(password, confirmPassword, matchBoth);
  };

  signUp(password, confirmPassword, matchBoth) {
    if (this.state.netConnectivity) {
      if (matchBoth) {
        this.props.onSignUpRequest();
        const localhost =
          Platform.OS == "android" ? "172.30.10.42" : "localhost";
        fetch(`http://${localhost}:8000/api/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.props.email,
            first_name: this.props.first_name,
            password: password,
            c_password: confirmPassword
          })
        })
          .then(response => {
            if (response.status == 200) {
              return response.json();
            } else {
              throw response.json();
            }
            return null;
          })
          // you may handle the possible promise rejection in here with a .catch(){}
          .then(responseJson => {
            if (responseJson.success !== null) {
              this.props.onSignUpSuccess();
              let result = responseJson.success;
              let token = result.token;
              let first_name = result.first_name;
              if (token !== null) {
                this.storeToken(token);
                this.props.navigation.navigate("SignUpFinal");
              }
            }
          })
          .catch(error => {
            this.props.onSignUpFailure("The email has already been taken.");
            this.setState({ error: "The email has already been taken." });
          });
      }
    } else {
      alert("Please check your internet connection");
    }
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <UserPasswordView
          passInfo={this.onSignUp}
          loading={this.props.isSigningUp}
          error={this.state.error}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    email: state.SignUpReducer.email,
    first_name: state.SignUpReducer.name,
    isSigningUp: state.SignUpReducer.isSigningUp,
    signedUp: state.SignUpReducer.signedUp
  };
};

mapDispatchToProps = dispatch => {
  return {
    onSignUpPassword: (password, confirmPassword) =>
      dispatch(userPassword(password, confirmPassword)),
    onSignUpRequest: () => dispatch(requestSignUp()),
    onSignUpSuccess: () => dispatch(successSignUp()),
    onSignUpFailure: error => dispatch(failureSignUp(error))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPassword);
