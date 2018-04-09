import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

class TabIcon extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.tabText, { color: this.props.selected ? '#D9155D' : '#3B4559' }]}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    alignSelf: 'stretch',
  },
  tabText: {
    fontWeight: 'normal',
    color: '#555555',
    fontSize: 16,
  },
});

export default TabIcon;
