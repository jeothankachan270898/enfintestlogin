/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import mainApp from './mainApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => mainApp);
