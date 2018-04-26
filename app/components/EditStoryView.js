import React, { Component } from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Image,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { styles } from "../styles/styles";
import ImagePicker from "react-native-image-picker";
import * as Progress from "react-native-progress";

export class EditStoryView extends Component {
  constructor() {
    super();
    this.state = {
      avatarSource: null,
      avatarHeight: null,
      image: null,
      disablePostBtn: true,
      storyText: "",
      storyID = null
    };
  }

  selectPhotoTapped() {
    if (this.state.storyText == null) {
      this.setState({ disablePostBtn: true });
    }

    let options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        let imageHeight = { height: response.height };

        this.setState({
          avatarSource: source,
          avatarHeight: imageHeight.height,
          image: response,
          disablePostBtn: false
        });
        this.props.disablePostBtn(false);
      }
    });
  }

  sendData = () => {
    // if both of them are null then disable post btn
    if (this.state.image == null && this.state.storyText == null) {
      return null;
    } else {
      return {
        image: this.state.image,
        text: this.state.storyText,
        disablePostBtn: this.state.disablePostBtn
      };
    }
  };

  closeImage = () => {
    if (this.state.storyText == "") {
      this.props.disablePostBtn(true);
    }
    this.setState({ avatarSource: null, image: null });
  };

  componentDidMount() {
    this.setState({
      storyText: this.props.editingStoryText,
      image: this.props.editingStoryImage,
      storyID: this.props.editingStoryID
    });
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <View style={styles.ListItemHeader}>
            <Image
              source={require("../images/profile.jpg")}
              style={styles.profileImage}
            />
            <Text style={{ color: "black" }}>sabawoon</Text>
          </View>
          <TextInput
            value={this.state.storyText}
            multiline={true}
            placeholder="Say something about your story"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={{ padding: 15 }}
            onChangeText={text => {
              if (text == "") {
                this.setState({ storyText: text });
                if (this.state.image == null) this.props.disablePostBtn(true);
              }
              if (text !== "") {
                this.setState({ storyText: text });
                this.props.disablePostBtn(false);
              }
            }}
          />

          <View>
            {this.state.avatarSource === null
              ? <TouchableOpacity
                  onPress={this.selectPhotoTapped.bind(this)}
                  style={{
                    borderTopWidth: 0.5,
                    borderBottomWidth: 0.5,
                    padding: 20,
                    height: "100%",
                    alignItems: "center"
                  }}
                >
                  <Text>Select a Photo</Text>
                </TouchableOpacity>
              : <ImageBackground
                  source={this.state.avatarSource}
                  style={{
                    width: "100%",
                    height: this.state.avatarHeight
                  }}
                >
                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontSize: 30,
                        marginRight: 15,
                        marginTop: 15,
                        backgroundColor: "rgba(168, 178, 193, 0.1)",
                        paddingHorizontal: 15,
                        borderRadius: 3
                      }}
                      onPress={this.closeImage.bind(this)}
                    >
                      ×
                    </Text>
                  </View>
                </ImageBackground>}
          </View>
        </View>
      </ScrollView>
    );
  }
}
