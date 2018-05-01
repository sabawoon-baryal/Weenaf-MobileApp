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
    let gotDate = this.child.sendData();
    console.log("imageee ///////////: ", gotDate.image);
    console.log("textttt ////////////: ", gotDate.text);
    console.log("id ////////////: ", this.props.editingStoryID);
    console.log("editing story ////////////: ", gotDate.editStory);

    this.props.onDisablePostBtn(true);

    if (gotDate.editStory == true) {
      if (gotDate.image !== null && gotDate.text !== "") {
        console.log("helloo /////////////");
        RNFetchBlob.fetch(
          "PATCH",
          `http://${localhost}:8000/api/stories/` +
            `${this.props.editingStoryID}`,
          {
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
            }
          ]
        )
          .then(resp => {
            console.log("my response: ", resp);
            this.props.navigation.navigate("UserStories");
            // console.log("resp: ", resp);
            // console.log("text: ", resp.text());
          })
          .catch(err => {
            console.log("my error: ", err);
          });
      } else {
        if (gotDate.image == null) {
          console.log("secons ///////////");
          RNFetchBlob.fetch(
            "PATCH",
            `http://${localhost}:8000/api/stories/` +
              `${this.props.editingStoryID}`,
            {
              "Content-Type": "application/json"
            },
            [
              {
                name: "description",
                data: gotDate.text
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
        } else if (gotDate.text == "") {
          RNFetchBlob.fetch(
            "PATCH",
            `http://${localhost}:8000/api/stories/` +
              `${this.props.editingStoryID}`,
            {
              "Content-Type": "multipart/form-data"
            },
            [
              {
                name: "image",
                filename: gotDate.image.fileName,
                type: gotDate.image.type,
                data: RNFetchBlob.wrap(gotDate.image.path)
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
        }
      }
    }
    if (gotDate.editStory == false) {
      if (gotDate.image !== null && gotDate.text !== "") {
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
      } else {
        if (gotDate.image == null) {
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
        } else if (gotDate.text == "") {
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
        }
      }
    }
  };

  handelCancelBtn = () => {
    this.props.navigation.goBack();
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handlePost: this.handlePostButton,
      handleCancel: this.handelCancelBtn
    });
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: <AddStoryHeaderButton post={params.handlePost} />,
      headerLeft: <Text cancel={params.handleCancel}>Cancel</Text>
    };
  };

  getDisablePostBtnCondition = disable => {
    console.log("disable in container: ", disable);
    this.props.onDisablePostBtn(disable);
  };

  render() {
    return (
      <View>
        <AddStory
          editingStoryID={this.props.editingStoryID}
          editingStoryText={this.props.editingStoryText}
          editingStoryImage={this.props.editingStoryImage}
          editingStoryImageHeight={this.props.editingStoryImageHeight}
          editingStory={this.props.editingStory}
          toProfile={this.goToProfile}
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
    onPressedPostBtn: state.AddStoryButtonReducer.onPressedPostBtn,
    editingStoryID: state.EditStoryReducer.storyID,
    editingStoryText: state.EditStoryReducer.storyText,
    editingStoryImage: state.EditStoryReducer.storyImage,
    editingStoryImageHeight: state.EditStoryReducer.storyImageHeight,
    editingStory: state.EditStoryReducer.editingStory,
    userID: state.LoginReducer.userID
  };
};
mapDispatchToProps = dispatch => {
  return {
    onDisablePostBtn: disable => dispatch(addStoryButton(disable))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStoryPage);
