import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import { TabOneNavigator } from "./TabOneConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.tabOne
  };
};

class TabOneNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <TabOneNavigator
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(TabOneNavigation);
