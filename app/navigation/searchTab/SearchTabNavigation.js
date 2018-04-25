import React, { Component } from "reacr";
import { AddNavigationHelpers } from "react-navigation";
import connect from "react-redux";

import { SearchTab } from "./SearchTabConfiguration";

const mapStateToProps = state => {
  return {
    navigationState: state.searchTab
  };
};

class SearchTabNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <SearchTab
        navigation={AddNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(SearchTabNavigation);
