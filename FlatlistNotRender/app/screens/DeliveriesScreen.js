import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import DeliveriesContainer from '../containers/DeliveriesContainer';

import deliveries from '../config/deliveries';

class DeliveriesScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <DeliveriesContainer items={deliveries}/>
      </View>
    );
  }
}

export default DeliveriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
