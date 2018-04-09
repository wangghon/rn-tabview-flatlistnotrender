import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { ActionConst, Actions, Scene, Switch } from 'react-native-router-flux';
import { connect } from 'react-redux';

import LoginScreen from './screens/LoginScreen';
//import TabScreen from './screens/TabScreen';
import InboxScreen from './screens/InboxScreen';
import SettingsScreen from './screens/SettingsScreen';
import DeliveriesScreen from './screens/DeliveriesScreen';

import TabIcon from './components/TabIcon';

// Define scenes' unique keys
export const KEY_HOME_WITH_TAB = 'homeScreenWithTabBar';
export const KEY_AUTH_SWITCHER_SCREEN = 'auth';
export const KEY_LOGIN_SCREEN = 'login';

export const KEY_INBOX_SCREEN = 'inbox';
export const KEY_DELIVERIES_SCREEN = 'deliveries';
export const KEY_SETTINGS_SCREEN = 'settings';

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    backgroundColor: '#374457', // changing navbar color
    height: 60,
  },
  navTitle: {
    fontSize: 18,
    color: '#FFFFFF', // changing navbar title color
    width: Dimensions.get('window').width - 100, // make title width bigger than default
  },
  tabscene: {
    marginTop: 60,
    marginBottom: 60,
  },
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1,
    alignItems: 'flex-end',
    height: 50,
  },
});

const selector = (props) => {
  const { profile } = props;
  if (!profile.token) return KEY_LOGIN_SCREEN;

  return KEY_HOME_WITH_TAB;
};

const switcher = connect((state) => ({ profile: state.profile.data }))(Switch);
const createTabScene = (key, tabIcon, component, title) => (
  <Scene
    icon={tabIcon}
    key={key}
    sceneStyle={styles.tabscene}
    navigationBarStyle={[styles.navBar]}
    titleStyle={styles.navTitle}
    component={component}
    title={title}
  />
);

export default Actions.create(
  <Scene key="root" navigationBarStyle={[styles.navBar]} titleStyle={[styles.navTitle]}>

    {/* App Scenes start from here */}
    <Scene key={KEY_AUTH_SWITCHER_SCREEN} hideTabBar tabs component={switcher} selector={selector} direction="vertical" type={ActionConst.RESET}>
      <Scene key={KEY_LOGIN_SCREEN} hideNavBar component={LoginScreen} title="Login" />
      <Scene key={KEY_HOME_WITH_TAB} tabs={true} tabBarStyle={styles.tabBarStyle}>
        {createTabScene(KEY_INBOX_SCREEN, TabIcon, InboxScreen, 'Inbox')}
        {createTabScene(KEY_DELIVERIES_SCREEN, TabIcon, DeliveriesScreen, 'Deliveries')}
        {createTabScene(KEY_SETTINGS_SCREEN, TabIcon, SettingsScreen, 'Settings')}
      </Scene>
    </Scene>
  </Scene>
);
