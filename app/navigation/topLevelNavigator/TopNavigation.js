import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from "react-navigation-redux-helpers";

import { TopLevelNavigator } from "./TopNavConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.topNavigator
  };
};

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => navigationState
);

const addListener = createReduxBoundAddListener("root");

class TopNavigation extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TopLevelNavigator
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          addListener
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(TopNavigation);
