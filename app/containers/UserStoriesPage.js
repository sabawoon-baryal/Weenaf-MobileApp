import React, { Component } from "react";
import {
  TouchableOpacity,
  NetInfo,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Platform,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { connect } from "react-redux";
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import * as Progress from "react-native-progress";

import { UserStoriesView } from "../components/UserStoriesView";
import {
  fetchRequestStories,
  fetchSuccessStories,
  fetchFailureStories,
  editStoryRequest,
  editStorySuccess,
  editStoryFailure
} from "../actions/ActionCreators";
import { styles } from "../styles/styles";
import { AddStory } from "../components/AddStory";

class UserStoriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      refreshing: false,
      netConnectivity: true
      // progress: 0,
      // indeterminate: true
    };
  }

  // header

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: "red",
        color: "white",
        paddingRight: 10
      },
      headerTitle: (
        <SearchBar
          containerStyle={{
            width: "100%",
            backgroundColor: "red"
          }}
          inputStyle={{
            backgroundColor: "rgba(229, 50, 50, 0.7)",
            color: "white",
            borderRadius: 5
          }}
          clearIcon={{ color: "white" }}
          showLoading
          cancelButtonTitle="Cancel"
          icon={{ type: "font-awesome", name: "search", color: "white" }}
        />
      ),
      headerRight: (
        <TouchableOpacity>
          <Image
            source={require("../images/profile.jpg")}
            style={styles.headerProfileImage}
          />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    this.makeRemoteRequest();
    // this.animate();
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  // animate() {
  //   let progress = 0;
  //   this.setState({ progress });
  //   setTimeout(() => {
  //     this.setState({ indeterminate: false });
  //     setInterval(() => {
  //       progress += Math.random() / 5;
  //       if (progress > 1) {
  //         progress = 1;
  //       }
  //       this.setState({ progress });
  //     }, 500);
  //   }, 1500);
  // }

  makeRemoteRequest = () => {
    this.props.onFetchRequest();
    const url = "http://172.30.10.42:8000/api/latest-stories";
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res !== null) {
          this.props.onFetchSuccess(res);
        }
        this.setState({
          data: res.data,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.props.onFetchFailure();
        console.log(error);
      });
  };

  handleRefresh = () => {
    if (this.props.loading == false) {
      return;
    }
    this.setState({ refreshing: true }, () => {
      this.makeRemoteRequest();
    });
  };

  handleLoadMore = () => {
    this.makeRemoteRequest();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          marginBottom: 10
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center",
          paddingVertical: 15,
          borderBottomWidth: 8,
          borderColor: "rgb(234, 236, 239)"
        }}
      >
        <Image
          source={require("../images/profile.jpg")}
          style={styles.profileImage}
        />
        <Text
          onPress={this.goToAddStory}
          style={{ width: "100%" }}
          // hitSlop={{ top: 20, left: 10, bottom: 10, right: 10 }}
        >
          Write your story
        </Text>

        {/* <Progress.Bar
          style={{
            marginTop: 10
          }}
          progress={this.state.progress}
        /> */}
      </View>
    );
    // return <SearchBar placeholder="Type Here..." />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    if (this.props.failure == null) {
      return null;
    }
    setInterval(() => {}, 5000);

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  goToProfile = () => {
    this.props.navigation.navigate("Main");
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

  _renderItem = ({ item }) => {
    let imageHeight;
    if (item.image !== null) {
      imageHeight = item.propImage.height;
    } else {
      imageHeight = 0;
    }
    return (
      <UserStoriesView
        toEditStory={this.editStory}
        toDeleteStory={this.deleteStory}
        id={item.id}
        userProfile={item.user.image}
        userFirstName={item.user.first_name}
        userLastName={item.user.last_name}
        userIDInStory={item.user_id}
        storyDate={item.created_at}
        storyImage={item.image}
        storyImageHeight={imageHeight}
        storyDescription={item.description}
        toProfile={this.goToProfile}
        userID={this.props.userID}
      />
    );
  };

  goToAddStory = () => {
    this.props.navigation.navigate("AddStory");
  };

  render() {
    console.log("iamge: ", this.state.data.propImage);
    if (this.state.netConnectivity) {
      return (
        <View>
          <StatusBar barStyle="light-content" backgroundColor="red" />
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}

          <List
            containerStyle={{
              marginTop: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
          >
            <FlatList
              data={this.state.data}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0}
              // scrollEnabled={false}
            />
          </List>
          {/* </ScrollView> */}
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon name="cloud" size={50} color="black" />
          <Text>You're in offline mode.</Text>
          <Text>Please check your connection.</Text>
        </View>
      );
    }
  }
}
mapStateToProps = state => {
  return {
    story: state.storiesReducer,
    failure: state.storiesReducer.error,
    loading: state.storiesReducer.loading,
    userID: state.LoginReducer.userID
  };
};
mapDispatchToProps = dispatch => {
  return {
    onFetchRequest: () => dispatch(fetchRequestStories()),
    onFetchSuccess: stories => dispatch(fetchSuccessStories(stories)),
    onFetchFailure: () => dispatch(fetchFailureStories()),
    onEditStoryRequest: (id, text, image, imageHeight) =>
      dispatch(editStoryRequest(id, text, image, imageHeight)),
    onEditStorySuccess: (storyID, storyText, storyImage) =>
      dispatch(editStorySuccess(storyID, storyText, storyImage)),
    onEditStoryFailure: error => dispatch(editStoryFailure(error))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserStoriesPage);
