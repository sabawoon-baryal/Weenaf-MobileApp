import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { UserBirthdayView } from "../components/signUp/UserBirthdayView";
import { userBirthdate } from "../actions/ActionCreators";

export class SignUpBirthday extends Component {
  onSignUpBirthdate = date => {
    this.props.navigation.navigate("SignUpBloodType");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <UserBirthdayView passInfo={this.onSignUpBirthdate} />
      </View>
    );
  }
}

mapDispatchToProps = dispatch => {
  return {
    onSignUpBirthdate: date => dispatch(userBirthdate(date))
  };
};
export default connect(mapDispatchToProps)(SignUpBirthday);
