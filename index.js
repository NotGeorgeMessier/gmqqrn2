/**
 * @format
 */

import {AppRegistry} from "react-native";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";

import {name as appName} from "./app.json";
import App from "./src/com/App";

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
