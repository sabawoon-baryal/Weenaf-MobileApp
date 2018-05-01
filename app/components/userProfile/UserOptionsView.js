import React, { Component } from "react";
import {
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
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../../styles/styles";
import { ListItem } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

const list1 = [
  {
    title: "Stories",
    icon: "history",
    iconColor: "blue"
  },
  {
    title: "Emergency Requests",
    icon: "flight-takeoff",
    iconColor: "red"
  },
  {
    title: "Events",
    icon: "flight-takeoff",
    iconColor: "gray"
  }
];

const list2 = [
  {
    title: "Email",
    icon: "home",
    iconColor: "green"
  },
  {
    title: "Phone",
    icon: "flight-takeoff",
    iconColor: "rgb(241, 66, 244)"
  }
];

const list3 = [
  {
    title: "Address",
    icon: "history"
  },
  {
    title: "Blood Type",
    icon: "flight-takeoff"
  },
  {
    title: "Birth Date",
    icon: "history"
  }
];

const list4 = [
  {
    title: "Facebook",
    icon: "history",
    iconColor: "blue"
  }
];

export class UserOptionsView extends Component {
  handleList1(item) {
    if (item.title == "Stories") {
      this.props.toMyStories();
    } else if (item.title == "Emergency Requests") {
      this.props.toMyEmergencyRequests();
    } else if (item.title == "Events") {
      this.props.toMyEvents();
    }
  }

  handleList2 = item => {
    if (item.title == "Email") {
      this.props.toMyEmail();
    } else if (item.title == "Phone") {
      this.props.toMyPhone();
    }
  };

  handleList3 = item => {
    if (item.title == "Address") {
      this.props.toMyAddress();
    } else if (item.title == "Blood Type") {
      this.props.toMyBloodType();
    } else if (item.title == "Birth Date") {
      this.props.toBirthDate();
    }
  };

  handleList4 = item => {
    if (item.title == "Facebook") {
      this.props.toFacebook();
    }
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingBottom: 30 }}>
          <View style={styles.profileOptions}>
            {list1.map((item, i) =>
              <TouchableOpacity>
                <ListItem
                  containerStyle={{ borderBottomWidth: 0.2 }}
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon, color: item.iconColor }}
                  style={{ paddingHorizontal: 20, borderWith: 0.3 }}
                  onPress={() => this.handleList1(item)}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={{ height: 30, backgroundColor: "rgb(249, 248, 244)" }} />
          <View style={styles.profileOptions}>
            {list2.map((item, i) =>
              <ListItem
                containerStyle={{ borderBottomWidth: 0.2 }}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: item.iconColor }}
                style={{ paddingHorizontal: 20, borderWith: 0.3 }}
                onPress={() => this.handleList2(item)}
              />
            )}
          </View>

          <View style={{ height: 30, backgroundColor: "rgb(249, 248, 244)" }} />

          <View style={styles.profileOptions}>
            {list3.map((item, i) =>
              <ListItem
                containerStyle={{ borderBottomWidth: 0.2 }}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: item.iconColor }}
                style={{ paddingHorizontal: 20, borderWith: 0.3 }}
                onPress={() => this.handleList3(item)}
              />
            )}
          </View>

          <View style={{ height: 30, backgroundColor: "rgb(249, 248, 244)" }} />

          <View style={styles.profileOptions}>
            {list4.map((item, i) =>
              <ListItem
                containerStyle={{ borderBottomWidth: 0.2 }}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: item.iconColor }}
                style={{ paddingHorizontal: 20, borderWith: 0.3 }}
                onPress={() => this.handleList4(item)}
              />
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
