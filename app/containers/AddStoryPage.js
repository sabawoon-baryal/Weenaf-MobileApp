import React, { Component } from "react";
import {
  Button,
  Platform,
  TouchableOpacity,
  View,
  Text,
  Image
} from "react-native";

import { connect } from "react-redux";

import { AddStory } from "../components/AddStory";
import RNFetchBlob from "react-native-fetch-blob";

import { addStoryButton } from "../actions/ActionCreators";
import AddStoryHeaderButton from "./AddStoryHeaderButton";

const localhost = Platform.OS == "android" ? "172.30.10.42" : "localhost";

class AddStoryPage extends Component {
  goToProfile = () => {
    this.props.navigation.navigate("Main");
  };

  handlePostButton = () => {
    console.log("pressed");
    let gotDate = this.child.sendData();
    console.log("got: ", gotDate);
    RNFetchBlob.fetch(
      "POST",
      `http://${localhost}:8000/api/stories`,
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        "Content-Type": "multipart/form-data"
      },
      [
        {
          name: "image",
          filename: gotDate.image.fileName,
          type: gotDate.image.type,
          data: RNFetchBlob.wrap(gotDate.image.path)
        },
        {
          name: "description",
          data: gotDate.text
        },
        {
          name: "user_id",
          data: "10"
        }
      ]
    )
      .then(resp => {
        this.props.navigation.navigate("UserStories");
        // console.log("resp: ", resp);
        // console.log("text: ", resp.text());
      })
      .catch(err => {
        console.log("my error: ", err);
      });
  };

  componentDidMount() {
    this.props.navigation.setParams({ handlePost: this.handlePostButton });
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: <AddStoryHeaderButton post={params.handlePost} />
    };
  };

  getDisablePostBtnCondition = disable => {
    console.log("disable in container: ", disable);
    this.props.onDisablePostBtn(disable);
  };

  render() {
    // props of story being edited
    const { params } = this.props.navigation.state;
    return (
      <View>
        <AddStory
          toProfile={this.goToProfile}
          // editStoryID={params.id}
          // editStoryText={params.text}
          // editStoryImage={params.image}
          ref={child => {
            this.child = child;
          }}
          disablePostBtn={this.getDisablePostBtnCondition}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    disable: state.AddStoryButtonReducer.disablePostBtn,
    onPressedPostBtn: state.AddStoryButtonReducer.onPressedPostBtn
  };
};
mapDispatchToProps = dispatch => {
  return {
    onDisablePostBtn: disable => dispatch(addStoryButton(disable))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStoryPage);
