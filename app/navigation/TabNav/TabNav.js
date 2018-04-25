import React from "react";

import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { Tabs } from "./TabNavConfig";
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from "react-navigation-redux-helpers";

const mapStateToProps = state => {
  return {
    navigationState: state.tab
  };
};

// const middleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => navigationState
// );

// const addListener = createReduxBoundAddListener("root");

class TabNav extends React.Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <Tabs
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
          // addListener
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(TabNav);
