import {CommonActions} from "@react-navigation/native";
import {qqe} from "@src/utils";

import {navigationRef} from "./navigationRef";
import {TRootStack} from "./params";

function navigate<T extends string>(name: T, params?: T extends keyof TRootStack ? TRootStack[T] : any, key?: string) {
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

function navigateWithReset<T extends string>(name: T, params?: T extends keyof TRootStack ? TRootStack[T] : any) {
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
    if (navigationRef.isReady()) {
        return navigationRef.getCurrentRoute()?.name;
    } else {
    // qqe('getCurrentRouteName::navigationRef isn\'t ready');
    // throw Error('navigationRef isn\'t ready');

        return "unknown_route";
    }
}

export default {
    navigate,
    navigateWithReset,
    goBack,
    getCurrentRouteName,
};
