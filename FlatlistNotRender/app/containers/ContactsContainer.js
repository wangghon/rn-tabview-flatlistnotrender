import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
class ContactsContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Contact List</Text>
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

export default ContactsContainer;