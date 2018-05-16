import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  SectionList,
  ScrollView,
  Text,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import { ListItem, List } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../../styles/styles";

const localhost = Platform.OS == "android" ? "172.30.10.42" : "localhost";
const { height, width } = Dimensions.get("window");
const storyCardWidth = (width - 6) / 3;

export class UserStoriesView extends Component {
  constructor() {
    super();
    this.state = {
      storyText: ""
    };
  }
  componentDidMount() {
    let storyText = this.props.story.description;
    if (storyText.length >= 41) {
      slicedStoryText = storyText.slice(0, 40).concat("...");
      this.setState({ storyText: slicedStoryText });
    } else {
      this.setState({ storyText: storyText });
    }
  }

  handleThePress = () => {
    this.props.toSelectedUserStory(this.props.story);
  };

  render() {
    return (
      <View style={styles.GridViewBlockStyle}>
        {this.props.story.image == null
          ? <TouchableOpacity onPress={this.handleThePress.bind(this)}>
              <View style={styles.GridViewInsideTextItemStyle}>
                <Text style={styles.UserStoriesTextStyle}>
                  {this.state.storyText}
                </Text>
              </View>
            </TouchableOpacity>
          : <TouchableOpacity onPress={this.handleThePress.bind(this)}>
              <Image
                source={{
                  uri: `http://${localhost}:8000/${this.props.story.image}`
                }}
                style={{ height: 100, width: storyCardWidth }}
              />
            </TouchableOpacity>}
      </View>
    );
  }
}
