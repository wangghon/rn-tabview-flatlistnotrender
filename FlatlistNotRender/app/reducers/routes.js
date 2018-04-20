import { Reducer } from 'react-native-router-flux';

import {
  KEY_HOME_WITH_TAB,
  KEY_TABVIEW_SCREEN,
  KEY_DELIVERIES_SCREEN,
  KEY_SETTINGS_SCREEN,
} from '../scenes';

const screenA = [KEY_DELIVERIES_SCREEN, KEY_TABVIEW_SCREEN, KEY_SETTINGS_SCREEN];
const screenB = [KEY_TABVIEW_SCREEN, KEY_SETTINGS_SCREEN];

let initialRouting;
// needs to fake params to bypass sanity checks
const routerReducer = Reducer({initialState: {key: true}, scenes: true});

export default function(state, action) {
  if (!state && initialRouting) {
    return {...initialRouting};
  }

  switch (action.type) {

    case 'RootContainerInitialAction': {
      initialRouting = {...action.initialState};
      return action.initialState;
    }
    case 'LOGIN_SUCCESS': {
      const children = action.payload.id === 'A' ? screenA : screenB;
      return {
        ...state,
        scenes: {
          ...state.scenes,
          [KEY_HOME_WITH_TAB]: {
            ...state.scenes[KEY_HOME_WITH_TAB],
            children,
          },
        },
      };
    }
    default:
      return routerReducer(state, action);
  }
}
