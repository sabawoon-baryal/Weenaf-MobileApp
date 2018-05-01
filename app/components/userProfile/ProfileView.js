import React, { Component } from "react";
import {
  AsyncStorage,
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
// import ImagePicker from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";

export class ProfileView extends Component {
  constructor() {
    super();
    this.state = {
      avatarSource: null,
      avatarHeight: null,
      image: null,
      imagePickerBtnPressed: false,
      isModalVisible: false,
      openCamera: false,
      openPhotoLibrary: false
    };
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  selectPhotoTapped() {
    this.showModal();
    if (this.state.openPhotoLibrary) {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        cropperCircleOverlay: true,
        compressImageMaxWidth: 640,
        compressImageMaxHeight: 480,
        compressImageQuality: 0.5,
        compressVideoPreset: "MediumQuality",
        includeExif: true
      })
        .then(image => {
          console.log("received image", image);
          this.setState({
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime
            }
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   this.setState();
    //   console.log(image);
    // });

    // ImagePicker.showImagePicker(options, response => {
    //   console.log("Response = ", response);

    //   if (response.didCancel) {
    //     console.log("User cancelled photo picker");
    //   } else if (response.error) {
    //     console.log("ImagePicker Error: ", response.error);
    //   } else if (response.customButton) {
    //     console.log("User tapped custom button: ", response.customButton);
    //   } else {
    //     let source = { uri: response.uri };
    //     let imageHeight = { height: response.height };

    //     this.setState({
    //       avatarSource: source,
    //       avatarHeight: imageHeight.height,
    //       image: response
    //     });
    //   }
    // });
  }

  handleSaveProfile() {
    this.props.passData(this.state.image);
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require("../../images/background-grey-1.jpg")}
          style={styles.profileBackground}
        >
          <View style={styles.profileBackgroundContainer}>
            <TouchableWithoutFeedback
              onPress={this.selectPhotoTapped.bind(this)}
              style={styles.profilePickerBtn}
            >
              {this.state.image === null
                ? <View style={styles.profilePicture}>
                    <Icon name="camera" size={25} />
                  </View>
                : <Image
                    source={this.state.image}
                    style={styles.profilePictureWithImage}
                  />}
            </TouchableWithoutFeedback>

            <Text style={styles.profileName}>Sabawoon Baryal</Text>

            {this.state.image !== null || this.props.profileChanged
              ? <TouchableOpacity
                  onPress={this.handleSaveProfile.bind(this)}
                  style={styles.saveProfilePicture}
                >
                  <Text>Save Profile</Text>
                </TouchableOpacity>
              : <TouchableOpacity
                  disabled={true}
                  style={styles.disabledSaveProfilePicture}
                >
                  <Text>Save Profile</Text>
                </TouchableOpacity>}
          </View>
        </ImageBackground>

        <Modal
          onBackdropPress={() => {
            this.setState({ isModalVisible: false });
          }}
          onBackButtonPress={() => {
            this.setState({ isModalVisible: false });
          }}
          isVisible={this.state.isModalVisible}
        >
          <View style={{ borderRadius: 10, backgroundColor: "red" }}>
            <TouchableOpacity>
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  openPhotoLibrary: true,
                  isModalVisible: false
                })}
            >
              <Text>Library</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
