import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { loadInbox } from '../actions/inboxActions';
import { getInboxSelector } from '../selectors/inboxSelector';

@connect(
  state => ({
    items: getInboxSelector(state),
    profile: state.profile.data,
  }),
  { loadInbox }
)
class InboxContainer extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,
    loadInbox: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadInbox, profile: { id } } = this.props;
    loadInbox(id);
  }

  renderListItem = (info) => {
    const { item } = info;
    return (
      <View style={styles.listItem}>
        <Text style={styles.label}>{item.title}</Text>
        <Text style={styles.label}>{item.content}</Text>
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

export default InboxContainer;

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
