import React, { Component } from "react";
import {
  View,
  FlatList,
  SectionList,
  ScrollView,
  Text,
  Button
} from "react-native";
import { ListItem, List } from "react-native-elements";

export class MoreOptionsView extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          title: "Edit my Profile",
          leftIcon: "edit"
        },
        {
          id: 2,
          title: "Donation History",
          leftIcon: "history"
        }
      ]
    };
  }

  goTo = () => {
    this.props.toEditProfile();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          // borderBottomWidth: 0.3
        }}
      />
    );
  };

  keyExtractor = (item, index) => index;

  renderItem = ({ item }) =>
    <ListItem
      title={item.title}
      leftIcon={{ name: item.leftIcon }}
      chevron
      onPress={this.goTo}
    />;

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
