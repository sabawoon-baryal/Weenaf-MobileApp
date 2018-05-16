import React, { Component } from "react";
import {
  ScrollView,
  StatusBar,
  Button,
  View,
  NetInfo,
  ActivityIndicator,
  Text,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { styles } from "../../styles/styles";
import { connect } from "react-redux";
import { OfflineMode } from "../../components/OfflineMode";
import { UserStoriesView } from "../../components/UserStoriesView";

class SelectedStory extends Component {
  constructor() {
    super();

    this.state = {
      refreshOffline: false
    };
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: "red"
      },
      headerTintColor: "rgb(255, 255, 255)"
    };
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

  handleRefreshOfflineMode = refresh => {
    this.setState({ refreshOffline: refresh });
  };

  editStory = (id, text, image, imageHeight) => {
    console.log("id: ", id);
    console.log("text: ", text);
    console.log("image: ", image);

    this.props.onEditStoryRequest(id, text, image, imageHeight);

    this.props.navigation.navigate("AddStory");
  };

  deleteStory(myStoryID) {
    console.log("item id: ", myStoryID);
    const localhost = Platform.OS == "android" ? "172.30.10.42" : "localhost";
    fetch(`http://${localhost}:8000/api/stories/` + `${myStoryID}`, {
      method: "DELETE"
    });
  }

  render() {
    // this print undefined, if not logged in, developments issue
    console.log(
      "user name: ",
      this.props.userFirstName,
      this.props.userLastName
    );
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(255,255,255)"
        }}
      >
        {this.state.netConnectivity
          ? <ScrollView>
              <View>
                <UserStoriesView
                  selectedStoryID={this.props.story.id}
                  toEditStory={this.editStory}
                  toDeleteStory={this.deleteStory}
                  storyDate={this.props.story.created_at}
                  storyImage={this.props.story.image}
                  storyImageHeight={this.props.story.propImage.height}
                  storyDescription={this.props.story.description}
                  userFirstName={this.props.userFirstName}
                  userLastName={this.props.userLastName}
                  userIDInStory={this.props.story.user_id}
                  userID={this.props.userID}
                />
              </View>
            </ScrollView>
          : <OfflineMode refreshOfflineMode={this.handleRefreshOfflineMode} />}
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    story: state.PassSelectedUserStory.story,
    stories: state.storiesReducer.stories,
    userFirstName: state.LoginReducer.userFirstName,
    userLastName: state.LoginReducer.userLastName,
    userID: state.LoginReducer.userID
  };
};
mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedStory);
