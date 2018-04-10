import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Text, Platform, View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import InboxContainer from '../containers/InboxContainer';
import ContactsContainer from '../containers/ContactsContainer';
import GroupsContainer from '../containers/GroupsContainer';

const layout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const hasGroupTab = (id) => id === 'A';

@connect(
  (state) => ({
    profile: state.profile.data,
  }),
  {}
)
class TabViewScreen extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    tabIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    tabIndex: 0,
  };

  constructor(props) {
    super(props);

    this.chatTabs = {
      normal: [
        { key: '1', title: 'Chat', render: () => <InboxContainer /> },
        { key: '2', title: 'Contacts', render: () => <ContactsContainer />},
      ],
      special: [
        { key: '3', title: 'Groups', render: () => <GroupsContainer />},
      ],
    };

    const groupChatTab = hasGroupTab(props.profile.id) ? this.chatTabs.special : [];
    const tabs = [...this.chatTabs.normal, ...groupChatTab];
    this.state = {
      index: props.tabIndex,
      routes: [...tabs],
    };
  }

  componentWillReceiveProps(nextProps) {

    const { id } = nextProps.profile;

    if (!this._shouldUpdateTabs(id)) {
      if (nextProps.tabIndex !== this.state.index) {
        this._handleChangeTab(nextProps.tabIndex);
      }
      return;
    }

    const groupChatTab = hasGroupTab(id) ? this.chatTabs.special : [];
    const tabs = [...this.chatTabs.normal, ...groupChatTab];
    this.setState ({
      routes: [...tabs],
    });
  }

  _shouldUpdateTabs = (id) => {
    return (hasGroupTab(id) && this.state.routes.length == 2) || (hasGroupTab(id) && this.state.routes.length == 3);
  }

  _handleChangeTab = (index) => this.setState({ index });
  _renderHeader = (props) => <TabBar style={styles.tabBar} indicatorStyle={styles.indicatorStyle} renderLabel={this._renderTabLabel} {...props} />;
  _renderTabLabel = (scene) => {
    const { route } = scene;
    const label = route.title ? route.title.toUpperCase() : null;

    if (typeof label !== 'string') {
      return null;
    }

    const color = scene.focused === true ? '#D9155D' : '#555555';
    return <Text style={[styles.labelStyle, { color }]}>{label}</Text>;
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
      case '2':
      case '3':
        return <View style={{flex: 1}}>{route.render()}</View>;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={{flex: 1, height: 10}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleChangeTab}
        initialLayout={Platform.OS === 'ios' ? undefined : layout}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 40,
    backgroundColor: '#E8E8E9',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C1C1C1',
  },
  indicatorStyle: {
    backgroundColor: '#D9155D',
  },
  labelStyle: {
    backgroundColor: 'transparent',
    color: '#555555',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: '800',
    width: 80,
  },
});

export default TabViewScreen;
