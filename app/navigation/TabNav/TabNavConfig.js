import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import TabBarComponent from "../../containers/TabBarComponent";

import { HomeTab } from "../homeTab/HomeTabConfiguration";
import { LocationTab } from "../locationTab/LocationTabConfiguration";
import { SearchTab } from "../searchTab/SearchTabConfiguration";
import { AlertsTab } from "../alertsTab/AlertsTabConfiguration";
import { MoreOptionsTab } from "../moreOptionsTab/MoreOptionsTabConfiguration";

import {
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

const routeConfig = {
  Home: {
    screen: HomeTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  Location: {
    screen: LocationTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Location") {
          iconName = `compass${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  Search: {
    screen: SearchTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Search") {
          iconName = `search${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
    // navigationOptions: () => ({
    //   tabBarIcon: () => {
    //     return <Icon name="search" size={25} color="red" />;
    //   }
    // })
  },
  Alerts: {
    screen: AlertsTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Alerts") {
          iconName = `bell${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  More: {
    screen: MoreOptionsTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "More") {
          iconName = `list-ul${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  }
};

const navigationConfig = {
  initialRouteName: "More",
  tabBarOptions: {
    activeTintColor: "tomato",
    inactiveTintColor: "gray"
  },
  tabBarComponent: TabBarComponent,
  tabBarPosition: "bottom",
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true
};

export const Tabs = TabNavigator(routeConfig, navigationConfig);
