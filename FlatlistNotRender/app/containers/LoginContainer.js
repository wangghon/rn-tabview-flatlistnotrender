import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { login } from '../actions/profileActions';

@connect(
  null,
  {
    login,
  })
class LoginContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  _onLoginA = () => {
    this.props.login('A');
  }

  _onLoginB = () => {
    this.props.login('B');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._onLoginA}>
          <Text>Login as UserA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this._onLoginB}>
          <Text>Login as UserB</Text>
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
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LoginContainer;
