import { Reducer } from 'react-native-router-flux';

export const customInitialState = {
  scene: {},
  refreshedScene: null,
  scenesRefreshedOn: {},
  isNavigating: false,
};

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
    default:
      return routerReducer(state, action);
  }
}
