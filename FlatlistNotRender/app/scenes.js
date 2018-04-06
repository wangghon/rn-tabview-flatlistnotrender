import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { ActionConst, Actions, Scene, Switch } from 'react-native-router-flux';
import { connect } from 'react-redux';

import LoginScreen from './screens/LoginScreen';
//import TabScreen from './screens/TabScreen';

// Define scenes' unique keys
export const KEY_HOME_WITH_TAB = 'homeScreenWithTabBar';
export const KEY_LAUNCH_SCREEN = 'launchScreen';
export const KEY_AUTH_SWITCHER_SCREEN = 'auth';
export const KEY_LOGIN_SCREEN = 'login';

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
});

const selector = (props) => {
  const { profile } = props;
  if (!profile.token) return KEY_LOGIN_SCREEN;

  return KEY_HOME_WITH_TAB;
};

const switcher = connect((state) => ({ profile: state.profile.data }))(Switch);

export default Actions.create(
  <Scene key="root" navigationBarStyle={[styles.navBar]} titleStyle={[styles.navTitle]}>

    {/* App Scenes start from here */}
    <Scene key={KEY_AUTH_SWITCHER_SCREEN} hideTabBar tabs component={switcher} selector={selector} direction="vertical" type={ActionConst.RESET}>
      <Scene key={KEY_LOGIN_SCREEN} hideNavBar component={LoginScreen} title="Login" />
      { /*<Scene key={KEY_HOME_WITH_TAB} component={TabScreen} title="Tabs" /> */}

    </Scene>
  </Scene>
);
