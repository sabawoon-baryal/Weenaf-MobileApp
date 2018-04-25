import React from "react";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";

import store from "./store";
// import TabBarNavigation from "./tabBar/views/TabBarNavigation";
// import RootNavigator from "./navigation/TabNav/TabNav";
import TopNavigation from "./navigation/topLevelNavigator/TopNavigation";

export default class App extends React.Component {
  // async getToken(){
  //   return USER_TOKEN = await AsyncStorage.getItem('userToken');
  // }
  componentWillMount() {
    // hide the splash screen
    // check the AsyncStorage for user token
    // this.getToken();
  }
  render() {
    return (
      <Provider store={store}>
        <TopNavigation />
      </Provider>
    );
  }
}
