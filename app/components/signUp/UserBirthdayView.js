import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { styles } from "../../styles/styles";

export class UserBirthdayView extends Component {
  constructor() {
    super();
    this.state = {
      birthday: "",
      isDateTimePickerVisible: false
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this._hideDateTimePicker();
    this.props.passInfo(date);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={date => this._handleDatePicked(date)}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}
