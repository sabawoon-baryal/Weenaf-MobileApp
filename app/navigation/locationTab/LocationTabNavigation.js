import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";
import { connect } from "react-redux";

import { LoctionTab } from "./LocationTabConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.locationTab
  };
};

class LocationTabNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <LoctionTab
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(LocationTabNavigation);
