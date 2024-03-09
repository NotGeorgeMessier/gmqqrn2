import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ExampleScreen} from "@src/screens";
import {RNFC} from "@src/types";
import React from "react";

import {navigationRef} from "./navigationRef";
import {DefaultScreensParams, TRootStack} from "./params";
import {MAIN_SCREEN, onReady, onStateChange, screenOptions} from "./utils";

const RootStack = createNativeStackNavigator<DefaultScreensParams & TRootStack>();

export const RootNavigator: RNFC = () => {

    return (
        <NavigationContainer ref={navigationRef} onReady={onReady} onStateChange={onStateChange}>
            <RootStack.Navigator initialRouteName={MAIN_SCREEN} screenOptions={screenOptions}>
                <RootStack.Screen name={MAIN_SCREEN} component={ExampleScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
