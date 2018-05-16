import React, { Component } from "react";
import {
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
import { UserStoriesView } from "../../components/UserStories/UserStoriesView";
import { styles } from "../../styles/styles";
import { connect } from "react-redux";
import { onGetUserStories } from "../../actions/ActionCreators";
import {
  onPassSelectedUserStoryRequest,
  onPassSelectedUserStorySuccess,
  onPassSelectedUserStoryFailure
} from "../../actions/ActionCreators";
import Icon from "react-native-vector-icons/FontAwesome";
import { Reload } from "../../components/UserStories/Reload";
import { OfflineMode } from "../../components/OfflineMode";

class UserStories extends Component {
  constructor() {
    super();

    this.state = {
      reload: false,
      netConnectivity: true,
      loading: false,
      data: [],
      page: 1,
      error: null,
      refreshing: false,
      refreshOffline: false
    };
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: "red"
      },
      headerTitle: "My Stories",
      headerTintColor: "rgb(255, 255, 255)"
    };
  };

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.makeRemoteRequest();
        this.setState({ netConnectivity: true });
      } else {
        this.setState({ netConnectivity: false });
      }
    });
  }

  makeRemoteRequest = () => {
    this.props.onFecthUserStories();
    if (this.state.refreshing) this.setState({ refreshing: false });
  };

  // usfull:

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.stories == null) {
  //     this.setState({ data: nextProps.stories });
  //   }
  // }

  showSelectedUserStory = story => {
    this.props.onPassSelectedStoryRequest(story);
    this.props.navigation.navigate("SelectedStory");
  };

  _renderItem = ({ item }) => {
    return (
      <UserStoriesView
        story={item}
        toSelectedUserStory={this.showSelectedUserStory}
      />
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      state => ({ page: this.state.page + 1 }),
      () => this.makeRemoteRequest()
    );
  };

  renderFooter = () => {
    if (!this.props.loading) return null;
    return <ActivityIndicator animating size="large" />;
  };

  makeReload = reRender => {
    this.makeRemoteRequest();
    this.setState({ reload: reRender });
  };

  handleRefreshOffilneMode = refresh => {
    this.makeRemoteRequest();
    this.setState({ refreshOffline: refresh });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(255,255,255)"
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor="red" />
        {this.state.netConnectivity
          ? <View style={{ backgroundColor: "rgb(255,255,255)" }}>
              {this.props.loading
                ? <View style={{ marginTop: 20 }}>
                    <ActivityIndicator color="rgb(23,45,65)" />
                  </View>
                : <View>
                    {this.props.fetched
                      ? <View style={styles.MainContainer}>
                          <FlatList
                            data={this.props.stories.stories}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.id}
                            ListFooterComponent={this.renderFooter}
                            onRefresh={this.handleRefresh}
                            refreshing={this.state.refreshing}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={0}
                            numColumns={3}
                          />
                        </View>
                      : <Reload reload={this.makeReload} />}
                  </View>}
            </View>
          : <OfflineMode refreshOfflineMode={this.handleRefreshOffilneMode} />}
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    stories: state.UserStoriesReducer.stories,
    loading: state.UserStoriesReducer.fetching,
    fetched: state.UserStoriesReducer.fetched
  };
};
mapDispatchToProps = dispatch => {
  return {
    onFecthUserStories: () => dispatch(onGetUserStories()),
    onPassSelectedStoryRequest: story =>
      dispatch(onPassSelectedUserStoryRequest(story)),
    onPassSelectedStorySuccess: story =>
      dispatch(onPassSelectedUserStorySuccess(story)),
    onPassSelectedStoryFailure: error =>
      dispatch(onPassSelectedUserStoryFailure(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserStories);
