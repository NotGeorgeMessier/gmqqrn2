import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    ChatLoginScreen,
    ChatMainScreen,
    ExampleScreen1,
    ExampleScreen2,
    ExampleScreen3,
    MainScreen,
} from "@src/screens";
import {RNFC} from "@src/types";
import React from "react";

import {navigationRef} from "./navigationRef";
import {DefaultScreensParams, TRootStack} from "./params";
import {CHAT_SCREENS, EXAMPLE_SCREENS, MAIN_SCREEN, onReady, onStateChange, screenOptions} from "./utils";

const RootStack = createNativeStackNavigator<DefaultScreensParams & TRootStack>();

export const RootNavigator: RNFC = () => {
    return (
        <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange}>
            <RootStack.Navigator initialRouteName={CHAT_SCREENS.LOGIN} screenOptions={screenOptions}>
                <RootStack.Screen name={MAIN_SCREEN} component={MainScreen} />
                <RootStack.Screen name={EXAMPLE_SCREENS.ONE} component={ExampleScreen1} />
                <RootStack.Screen name={EXAMPLE_SCREENS.TWO} component={ExampleScreen2} />
                <RootStack.Screen name={EXAMPLE_SCREENS.THREE} component={ExampleScreen3} />
                <RootStack.Screen name={CHAT_SCREENS.LOGIN} component={ChatLoginScreen} />
                <RootStack.Screen name={CHAT_SCREENS.MAIN} component={ChatMainScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
