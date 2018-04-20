
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import store from './app/store';
import scenes from './app/scenes';
import routesReducerCreator from './app/reducers/routesReducerCreator';
import { addListeners } from './app/listeners/storeListeners';


export default class App extends Component {

  componentDidMount () {
    addListeners();
  }
  render() {
    return (
      <Provider store={store}>
        <Router createReducer={routesReducerCreator} scenes={scenes}/>
      </Provider>
    );
  }
}
