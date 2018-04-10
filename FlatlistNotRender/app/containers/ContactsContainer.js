import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { loadContacts } from '../actions/contactActions';

@connect(
  state => ({
    items: state.contacts.data,
    profile: state.profile.data,
  }),
  { loadContacts }
)
class ContactsContainer extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,
    loadContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadContacts, profile: { id } } = this.props;
    loadContacts(id);
  }

  renderListItem = (info) => {
    const { item } = info;
    return (
      <View style={styles.listItem}>
        <Text style={styles.label}>{item.name}</Text>
        <Text style={styles.label}>{item.mobile}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          style={styles.listContainer}
          data={this.props.items}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

export default ContactsContainer;

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
