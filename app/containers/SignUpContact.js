import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { UserContactView } from "../components/signUp/UserContactView";
import { userContact } from "../actions/ActionCreators";
import { setUserContact } from "../actions/ActionTypes";

class SignUpContact extends Component {
  onSignUp = (email, validEmail) => {
    if (validEmail) {
      this.props.onSignUpContact(email);
      this.props.navigation.navigate("SignUpName");
    }
  };

  render() {
    const { email } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <UserContactView passInfo={this.onSignUp} />
      </View>
    );
  }
}
mapStateToProps = state => {
  return {
    email: state.SignUpReducer.email
  };
};
mapDispatchToProps = dispatch => {
  return {
    onSignUpContact: email => dispatch(userContact(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContact);
