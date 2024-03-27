import {BaseView, UIText, UITouch} from "@src/com";
import {EXAMPLE_SCREENS, MAIN_SCREEN, NavigationService, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const MainScreen: TStackScreen<typeof MAIN_SCREEN> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>MainScreen</UIText>
                <UIText>0</UIText>
                <UITouch onPress={() => NavigationService.goBack()}>
                    <UIText>goback</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.ONE)}>
                    <UIText>nav to example 1</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.TWO)}>
                    <UIText>nav to example 2</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.THREE)}>
                    <UIText>nav to example 3</UIText>
                </UITouch>
            </ScrollView>
        </BaseView>
    );
};
