import React, { Component } from "react";
import {
  Button,
  AsyncStorage,
  View,
  ScrollView,
  Text,
  Image
} from "react-native";
import { ProfileView } from "../components/userProfile/ProfileView";
import { UserOptionsView } from "../components/userProfile/UserOptionsView";
import { changeProfile } from "../actions/ActionCreators";
import { connect } from "react-redux";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      storedProfile: null
    };
  }
  static navigationOptions = () => {
    return {
      header: (
        <Image
          source={require("../images/profile_background.jpg")}
          style={{ height: "0%" }}
        />
      )
    };
  };

  goToMyStories = () => {
    this.props.navigation.navigate("UserStories");
  };
  goToMyEmergencyRequests = () => {};
  goToMyEvents = () => {};
  goToMyEmail = () => {};
  goToMyPhone = () => {};
  goToMyAddress = () => {};
  goToMyBloodType = () => {};
  goToBirthDate = () => {};
  goToFacebook = () => {};

  // change profile
  handleProfileImagePicker = async profilePicture => {
    this.props.onChangeProfilePicture(profilePicture);
    if (this.props.profilePictureChanged) {
      console.log("changed profile");
      await AsyncStorage.setItem("USER_PROFILE", profilePicture);
    }
  };
  componentDidMount() {
    let storedProfile = AsyncStorage.getItem("USER_PROFILE");
    if (storedProfile !== null) {
      this.setState({ storedProfile: storedProfile });
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <ProfileView
            passData={this.handleProfileImagePicker}
            profileChanged={this.props.profilePictureChanged}
            storedProfile={this.state.storedProfile}
          />
          <View>
            <UserOptionsView
              toMyStories={this.goToMyStories}
              toMyEmergencyRequests={this.goToMyEmergencyRequests}
              toMyEvents={this.goToMyEvents}
              toMyEmail={this.goToMyEmail}
              toMyPhone={this.goToMyPhone}
              toMyAddress={this.goToMyAddress}
              toMyBloodType={this.goToMyBloodType}
              toBirthDate={this.goToBirthDate}
              toFacebook={this.goToFacebook}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

mapStateToProps = state => {
  return {
    profilePictureChanged: state.UpdateProfileReducer.changed
  };
};
mapDispatchToProps = dispatch => {
  return {
    onChangeProfilePicture: profilePicture =>
      dispatch(changeProfile(profilePicture))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
