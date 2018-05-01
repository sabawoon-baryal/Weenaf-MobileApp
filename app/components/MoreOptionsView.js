import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  SectionList,
  ScrollView,
  Text,
  Button
} from "react-native";
import { ListItem, List } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/styles";

import Swiper from "react-native-swiper";

export class MoreOptionsView extends Component {
  handleThePress = () => {
    this.props.toEditProfile();
  };

  handleProfile = () => {
    this.props.toProfile();
  };
  render() {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity
            onPress={this.handleProfile}
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
              paddingVertical: 15
            }}
          >
            <Image
              source={require("../images/profile.jpg")}
              style={styles.profileImage}
            />
            <Text
              style={{ width: "100%" }}
              // hitSlop={{ top: 20, left: 10, bottom: 10, right: 10 }}
            >
              Sabawoon Baryal
            </Text>
          </TouchableOpacity>
          {/* <View style={{ paddingBottom: 20 }}> */}
          {/* Profile  */}
          {/* <View
              style={{
                height: 50,
                backgroundColor: "rgb(249, 248, 244)",
                paddingHorizontal: 20,
                justifyContent: "flex-end"
              }}
            >
              <Text style={{ paddingVertical: 10 }}>PROFILE</Text>
            </View>
            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="edit" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Edit my profile</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="history" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Donation history</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View> */}

          {/* settings */}
          <View style={{ paddingBottom: 20 }}>
            <View
              style={{
                height: 50,
                backgroundColor: "rgb(249, 248, 244)",
                paddingHorizontal: 20,
                justifyContent: "flex-end"
              }}
            >
              <Text style={{ paddingVertical: 10 }}>SETTINGS</Text>
            </View>
            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="unlock-alt" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Change password</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="envelope" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Change email</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* BLOOD  */}
          <View style={{ paddingBottom: 20 }}>
            <View
              style={{
                height: 50,
                backgroundColor: "rgb(249, 248, 244)",
                paddingHorizontal: 20,
                justifyContent: "flex-end"
              }}
            >
              <Text style={{ paddingVertical: 10 }}>BLOOD</Text>
            </View>

            {/* About Blood */}
            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="info" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>About Blood</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* Blood Donation Process */}
            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="tasks" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Blood Donation Process</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* Blood Donation Benefits */}
            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="star" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Blood Donation Benefits</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Help */}
          <View style={{ paddingBottom: 20 }}>
            <View
              style={{
                height: 50,
                backgroundColor: "rgb(249, 248, 244)",
                paddingHorizontal: 20,
                justifyContent: "flex-end"
              }}
            >
              <Text style={{ paddingVertical: 10 }}>HELP</Text>
            </View>
            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="phone-square" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Contact Us</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.handleThePress.bind(this)}
              style={{ paddingVertical: 5 }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7
                  }}
                >
                  <Icon name="list-alt" size={22} color="red" />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBottomWidth: 0.3,
                    borderColor: "rgb(206, 205, 200)",
                    paddingVertical: 7
                  }}
                >
                  <Text>Terms of Use</Text>
                  <Icon
                    name="angle-right"
                    size={22}
                    style={{ paddingHorizontal: 10 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Log Out */}
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderTopWidth: 0.3,
              borderBottomWidth: 0.3,
              borderColor: "rgb(206, 205, 200)",
              marginTop: 30,
              marginBottom: 30
            }}
          >
            <Text style={{ color: "red" }}>Log Out</Text>
          </TouchableOpacity>

          {/* <Swiper style={styles.wrapper} height={100} showsButtons={true}>
            <Text>hello</Text>
            <View style={styles.slide2}>
              <Image source={require("../images/profile.jpg")} />
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper> */}
        </ScrollView>
      </View>
    );
  }
}
