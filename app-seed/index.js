/** @format */

import { AppRegistry } from 'react-native'
import AppEntry from './src'
import { name as appName } from './app.json'

console.groupCollapsed = () => {}
AppRegistry.registerComponent(appName, () => AppEntry)
