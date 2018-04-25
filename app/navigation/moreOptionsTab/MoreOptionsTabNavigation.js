import React, { Component } from "react";
import { AddNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import { MoreOptionsTab } from "./MoreOptionsTabConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.moreOptionsTab
  };
};
class MoreOptionsNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <MoreOptionsTab
        navigation={AddNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(MoreOptionsNavigation);
