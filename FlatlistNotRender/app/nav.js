import { Actions } from 'react-native-router-flux';
import {
  KEY_AUTH_SWITCHER_SCREEN,
} from 'scenes';

export const resetNavigationStack = () => Actions[KEY_AUTH_SWITCHER_SCREEN]();