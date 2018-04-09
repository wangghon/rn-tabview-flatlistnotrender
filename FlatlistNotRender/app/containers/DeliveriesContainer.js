import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const DeliveriesContainer = (props) => {
  const { items } = props;
  const renderListItem = (info) => {
    const { item } = info;
    return (
      <View style={styles.listItem}>
        <Text style={styles.label}>{item.title}</Text>
        <Text style={styles.label}>{item.content}</Text>
      </View>
    );
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.listContainer}
        data={items}
        renderItem={renderListItem}
      />
    </View>
  );
};

DeliveriesContainer.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DeliveriesContainer;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listItem: {
    width: '90%',
    height: 50,
    backgroundColor: '#eee',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
