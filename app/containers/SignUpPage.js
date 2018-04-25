import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { JoinWeena } from "../components/signUp/JoinWeena";
import { failureLogin } from "../actions/ActionCreators";
import { connect } from "react-redux";

export class SignUpPage extends Component {
  goToContact = () => {
    this.props.navigation.navigate("SignUpContact");
  };
  goToLogin = () => {
    this.props.onChangeLoginState;
    this.props.navigation.navigate("Login");
  };

  // onSignUpContact callback prop should be called and pass to it the email and phone

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <JoinWeena toContact={this.goToContact} toLogin={this.goToLogin} />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn
  };
};
mapDispatchToProps = dispatch => {
  return {
    onChangeLoginState: () => dispatch(failureLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
