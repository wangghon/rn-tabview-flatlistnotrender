import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { login } from './actions/profile';

@connect(
  null,
  {
    login,
  })
class LoginContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }
  _onLogin = () => {
    this.props.login('A');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.touchStyle]} onPress={this.onLogin}>
          <Text>Login as UserA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginContainer;
