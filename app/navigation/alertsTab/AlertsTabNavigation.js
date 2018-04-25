import React, { Component } from "react";
import { AddNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import { AlertsTab } from "./AlertsTabConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.alertsTab
  };
};

class AlertsTabNavigation extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <AlertsTab
        navigation={AddNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(AlertsTabNavigation);
