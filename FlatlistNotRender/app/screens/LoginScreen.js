import React, { Component } from 'react';
import { View } from 'react-native';

import LoginContainer from '../containers/LoginContainer';

class LoginScreen extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <LoginContainer/>
      </View>
    );
  }
}

export default LoginScreen;
