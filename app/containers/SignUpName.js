import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { UserNameView } from "../components/signUp/UserNameView";
import { userName } from "../actions/ActionCreators";

class SignUpName extends Component {
  onSignUp = name => {
    this.props.onSignUpName(name);
    this.props.navigation.navigate("SignUpPassword");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <UserNameView passInfo={this.onSignUp} />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {};
};
mapDispatchToProps = dispatch => {
  return {
    onSignUpName: name => dispatch(userName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpName);
