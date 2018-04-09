import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { logout } from '../actions/profile';

@connect(
  null,
  {
    logout,
  })
class SettingsContainer extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  _onLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this._onLogout}>
          <Text>Logout</Text>
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

export default SettingsContainer;
