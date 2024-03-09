import {qq} from "@src/utils";

import {getNavigationRef} from "../navigationRef";

const getCurrentRouteInfo = (): {name: string; suffix: string} => {
    const currentRoute = getNavigationRef()?.getCurrentRoute();
    const currentRouteName = currentRoute?.name;
    if (!currentRouteName) {
        throw Error("route_name_undefined");
    }
    let screenNameSuffix = "";
    if (currentRoute?.params && "screenNameSuffix" in currentRoute.params) {
        screenNameSuffix = currentRoute?.params?.screenNameSuffix as string;
    }

    return {
        name: currentRouteName,
        suffix: screenNameSuffix,
    };
};

const onNavigationStateChange = (prevRouteName: string, newRouteName: string): void => {
    if (prevRouteName !== newRouteName) {
    // store.dispatch(setScreenName(newRouteName));
    }
};

let prevRouteName = "";

export const onReady = () => {
    const {name} = getCurrentRouteInfo();
    onNavigationStateChange("open_app", name);
    prevRouteName = name;
};

export const onStateChange = () => {
    const {name} = getCurrentRouteInfo();
    qq("CURRENT_SCREEN_IS = ", name);
    onNavigationStateChange(prevRouteName, name);
    prevRouteName = name;
};
