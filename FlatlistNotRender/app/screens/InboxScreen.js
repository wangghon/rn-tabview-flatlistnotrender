import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import InboxContainer from '../containers/InboxContainer';

import inboxItems from '../config/inbox';

class InboxScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <InboxContainer items={inboxItems}/>
      </View>
    );
  }
}

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
