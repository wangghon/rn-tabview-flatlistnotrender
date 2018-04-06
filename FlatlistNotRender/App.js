
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import store from 'store';
import scenes from 'scenes';
import routesReducerCreator from 'reducers/routesReducerCreator';


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
         <Router createReducer={routesReducerCreator} scenes={scenes}/>
      </Provider>
    );
  }
}
