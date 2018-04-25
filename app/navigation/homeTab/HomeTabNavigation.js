import React, { Component } from "react";
import { AddNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import { HomeTab } from "./HomeTabConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.homeTab
  };
};

class HomeTabNavigation extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <HomeTab
        navigation={AddNavigationHelpers({
          state: navigationState,
          dispatch: dispatch
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(HomeTabNavigation);
