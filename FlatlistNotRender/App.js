
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import store from './app/store';
import scenes from './app/scenes';
import routesReducerCreator from './app/reducers/routesReducerCreator';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router createReducer={routesReducerCreator} scenes={scenes}/>
      </Provider>
    );
  }
}
