import {CommonActions} from "@react-navigation/native";
import {qqe} from "@src/utils";

import {navigationRef} from "./navigationRef";
import {TRootStack} from "./params";

function navigate<T extends keyof TRootStack>(name: T, params?: TRootStack[T], key?: string) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.navigate({
                name,
                params,
                key,
            }),
        );
    } else {
        qqe("navigate::navigationRef isn't ready");
    }
}

function navigateWithReset<T extends keyof TRootStack>(name: T, params?: TRootStack[T]) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name, params}],
            }),
        );
    } else {
        qqe("navigate::navigationRef isn't ready");
    }
}

function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack();
    }
}

function getCurrentRouteName() {
    if (!navigationRef.isReady()) {
        return "unknown_route";
    }

    return navigationRef.getCurrentRoute()?.name;
}

export const NavigationService = {
    navigate,
    navigateWithReset,
    goBack,
    getCurrentRouteName,
};
