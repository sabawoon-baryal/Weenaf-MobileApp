import React, { Component } from "react";
import { Button, View, Text, Image } from "react-native";
import { connect } from "react-redux";

import { AddStoryHeaderButtonView } from "../components/AddStoryHeaderButtonView";
import { addStoryButtonPressed } from "../actions/ActionCreators";

class AddStoryHeaderButton extends Component {
  pressPostBtn = () => {
    this.props.onPostBtn(true);
    this.props.post();
  };
  render() {
    return (
      <View>
        <AddStoryHeaderButtonView
          disablePostBtn={this.props.disablePostBtn}
          onPressPostBtn={this.pressPostBtn}
        />
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    disablePostBtn: state.AddStoryButtonReducer.disablePostBtn
  };
};

mapDispatchToProps = dispatch => {
  return {
    onPostBtn: pressed => dispatch(addStoryButtonPressed(pressed))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AddStoryHeaderButton
);
