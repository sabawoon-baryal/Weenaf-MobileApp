import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

import { UserBloodTypeView } from "../components/signUp/UserBloodTypeView";
import { userBloodType } from "../actions/ActionCreators";

class SignUpBloodType extends Component {
  onSignUpBloodType = blood => {
    this.signUp();
  };

  async signUp() {
    fetch("http://172.30.10.42/register", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.props.email,
        password: this.props.password,
        firstName: this.props.firstName,
        // lastName: this.props.lastName,
        // password: this.props.password,
        confirmPassword: this.props.confirmPassword
        // birthdate: this.props.birthdate,
        // bloodType: this.props.bloodType
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status == 200) {
          // here pass the user information to the main screen
          let email = responseJson.email;
          let firstName = responseJson.firstName;
          let password = responseJson;
          this.props.navigation.navigate("SignUpFinal");
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
        <UserBloodTypeView passInfo={this.onSignUpBloodType} />
      </View>
    );
  }
}
mapStateToProps = state => {
  return {
    email: state.SignUpReducer.email,
    phone: state.SignUpReducer.phone,
    firstName: state.SignUpReducer.firstName,
    lastName: state.SignUpReducer.lastName,
    password: state.SignUpReducer.password,
    confirmPassword: state.SignUpReducer.confirmPassword,
    birthdate: state.SignUpReducer.birthdate,
    bloodType: state.SignUpReducer.bloodType
  };
};
mapDispatchToProps = dispatch => {
  return {
    onSignUpBloodType: blood => dispatch(userBloodType(blood))
  };
};
export default connect(mapDispatchToProps)(SignUpBloodType);
