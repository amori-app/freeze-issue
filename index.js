/* eslint-disable global-require */
/* eslint-disable import/first */

import { AppRegistry } from 'react-native';

import { App } from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
