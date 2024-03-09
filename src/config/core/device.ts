import {Dimensions, Platform} from "react-native";
import {getModel} from "react-native-device-info";
import {getStatusBarHeight, isIphoneX as getIsIphoneX} from "react-native-iphone-x-helper";

export const deviceName = getModel();
export const isIphoneX = getIsIphoneX();
export const isAndroid = Platform.OS === "android";
export const isIos = Platform.OS === "ios";
export const isIos10 = isIos && parseInt(String(Platform.Version), 10) === 10;
export const {width, height} = Dimensions.get("window");

// extra 4 is for some ios problems
export const statusBarHeight = getStatusBarHeight(true) + 4;
