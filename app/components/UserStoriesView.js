import React, { Component } from "react";
import {
  Alert,
  Platform,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import { ListItem, List } from "react-native-elements";
import { styles } from "../styles/styles";

const localhost = Platform.OS == "android" ? "172.30.10.42" : "localhost";
const list = [
  {
    title: "Edit Story",
    icon: "edit"
  },
  {
    title: "Delete Story",
    icon: "delete"
  }
];

export class UserStoriesView extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false
    };
  }
  handleThePress = () => {
    this.props.toProfile();
  };

  setModalVisible = visibile => {
    this.setState({ isModalVisible: visibile });
  };

  goTo = () => {
    list.map((item, i) => {
      this.props.goTo(item.route);
    });
  };

  handleModalBtns = item => {
    if (item.title == "Edit Story") {
      this.setState({ isModalVisible: false });
      this.props.toEditStory(
        this.props.id,
        this.props.storyDescription,
        this.props.storyImage,
        this.props.storyImageHeight
      );
    } else if (item.title == "Delete Story") {
      this.setState({ isModalVisible: false });
      Alert.alert(
        "Delete Story",
        "Are you sure to delete this story",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed")
          },
          { text: "OK", onPress: () => this.props.toDeleteStory(this.props.id) }
        ],
        { cancelable: false }
      );
    }
  };

  render() {
    let imageHeight;
    if (this.props.storyImageHeight == null) {
      imageHeight = 0;
    } else {
      imageHeight = this.props.storyImageHeight;
    }
    return (
      <View style={styles.ListItemContainer}>
        <View style={styles.ListItemHeader}>
          <TouchableWithoutFeedback onPress={this.handleThePress.bind(this)}>
            <Image
              source={require("../images/profile.jpg")}
              style={styles.profileImage}
            />
          </TouchableWithoutFeedback>
          <View style={{ flexGrow: 1 }}>
            <TouchableWithoutFeedback onPress={this.handleThePress.bind(this)}>
              <View>
                <Text style={{ color: "black" }}>
                  {this.props.userName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={{ color: "gray" }}>
              {this.props.storyDate}
            </Text>
          </View>

          <View
            style={{
              paddingLeft: 180,
              marginRight: 50
            }}
          >
            {/* this.props.userID == this.props.userIDInStory */}
            {this.props.userIDInStory == 10
              ? <Icon
                  name="ellipsis-h"
                  size={20}
                  onPress={() => this.setModalVisible(true)}
                />
              : <View />}
          </View>
        </View>

        {this.props.storyImage !== null
          ? <Image
              source={{
                uri: `http://${localhost}:8000/` + `${this.props.storyImage}`
              }}
              style={{ height: imageHeight }}
            />
          : <View />}
        {this.props.storyDescription !== null
          ? <Text style={styles.storyDescription}>
              {this.props.storyDescription}
            </Text>
          : <View />}

        <View>
          {this.state.isModalVisible
            ? <Modal
                onBackdropPress={() => {
                  this.setState({ isModalVisible: false });
                }}
                onBackButtonPress={() => {
                  this.setState({ isModalVisible: false });
                }}
                isVisible={this.state.isModalVisible}
              >
                <View style={{ borderRadius: 10 }}>
                  <List>
                    {list.map((item, i) =>
                      <ListItem
                        chevron={false}
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        onPress={() => this.handleModalBtns(item)}
                      />
                    )}
                  </List>
                </View>
              </Modal>
            : <View />}
        </View>
      </View>
    );
  }
}
