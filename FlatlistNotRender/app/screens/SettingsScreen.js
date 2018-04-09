import React, { Component } from 'react';
import { View } from 'react-native';

import SettingsContainer from '../containers/SettingsContainer';

class SettingsScreen extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <SettingsContainer/>
      </View>
    );
  }
}

export default SettingsScreen;
