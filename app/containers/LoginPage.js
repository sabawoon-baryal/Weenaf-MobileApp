import React, { Component } from "react";
import {
  AsyncStorage,
  NetInfo,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Platform
} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
// import ValidationComponent from "react-native-form-validator";

import { login } from "../actions/ActionCreators";
import { LoginView } from "../components/LoginView";
import {
  requestLogin,
  successLogin,
  failureLogin
} from "../actions/ActionCreators";

const USER_TOKEN = "userToken";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      myError: "",
      netConnectivity: true
    };
  }
  async storeToken(token) {
    await AsyncStorage.setItem(USER_TOKEN, token);
  }
  async getToken() {
    let token = await AsyncStorage.getItem(USER_TOKEN);
    console.log("my token: ", token);
  }
  getDataFromLoginView = (email, password, validEmail) => {
    this.userLogin(email, password, validEmail);
  };

  async userLogin(email, password, validEmail) {
    if (this.state.netConnectivity) {
      if (validEmail) {
        this.props.onLoginRequest();
        const localhost =
          Platform.OS == "android" ? "172.30.10.42" : "localhost";
        fetch(`http://${localhost}:8000/oauth/token`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            client_id: 2,
            client_secret: "brBvL5AKq8bBvcuhoPfwJrRGKNFvC5t3g4xPy0Mm",
            grant_type: "password",
            username: email,
            password: password
          })
        })
          .then(response => {
            if (response.status == 200) {
              return response.json();
            } else {
              throw response;
            }
            return null;
          })
          .then(responseJson => {
            console.log("accress_token: ", responseJson.access_token);
            if (responseJson.access_token !== null) {
              this.storeToken(responseJson.access_token);
              return responseJson.access_token;
            } else {
              console.log("an error accured");
              throw responseJson;
            }
            return null;
          })
          .then(user_access_token => {
            console.log("user_access_token: ", user_access_token);
            const myLocalhost =
              Platform.OS == "android" ? "172.30.10.42" : "localhost";
            fetch(`http://${myLocalhost}:8000/api/user`, {
              headers: {
                Accept: "application/json",
                Authorization: "Bearer " + user_access_token
              }
            })
              .then(userResponse => {
                console.log("user: ", userResponse);
                if (userResponse.status == 200) {
                  return userResponse.json();
                } else {
                  throw userResponse;
                }
                return null;
              })
              .then(userResponseJson => {
                console.log("userResponseJson: ", userResponseJson);

                let userFirstName = userResponseJson.first_name;
                let userLastName = userResponseJson.last_name;
                let userEmail = userResponseJson.email;
                let userID = userResponseJson.id;
                let userImageURL = userResponseJson.image;
                let userProvince = userResponseJson.province_id;
                let userDistrict = userResponseJson.district_id;
                let userBirthday = userResponseJson.birthday;
                let userAddress = userResponseJson.address;
                let userBloodType = userResponseJson.blood_id;

                this.props.onLoginSuccess(
                  userID,
                  userFirstName,
                  userLastName,
                  userEmail,
                  userImageURL,
                  userBirthday,
                  userAddress,
                  userProvince,
                  userDistrict,
                  userBloodType
                );
                this.props.navigation.navigate("TabNavigation");
              });
          })
          .catch(error => {
            if (error.errer !== null) {
              this.props.onLoginFailure();
              this.setState({ myError: "" });
            }
          });
      }
    } else {
      alert("Please check your internet connection");
    }
  }

  goToSignUp = () => {
    this.props.isLoggingIn = false;
    this.props.navigation.navigate("SignUp");
  };

  goToForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };

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
        <LoginView
          getData={this.getDataFromLoginView}
          signUp={this.goToSignUp}
          forgotPassword={this.goToForgotPassword}
          loading={this.props.isLoggingIn}
          theError={this.props.error}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    loggedIn: state.LoginReducer.loggedIn,
    isLoggingIn: state.LoginReducer.isLoggingIn,
    error: state.LoginReducer.error
  };
};
mapDispatchToProps = dispatch => {
  return {
    onLoginRequest: () => dispatch(requestLogin()),
    onLoginSuccess: (
      id,
      first_name,
      last_name,
      email,
      image,
      birthday,
      address,
      province,
      district,
      blood
    ) =>
      dispatch(
        successLogin(
          id,
          first_name,
          last_name,
          email,
          image,
          birthday,
          address,
          province,
          district,
          blood
        )
      ),
    onLoginFailure: () => dispatch(failureLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
