import {BaseView, UIText, UITouch} from "@src/com";
import {EXAMPLE_SCREENS, NavigationService, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen2: TStackScreen<EXAMPLE_SCREENS.TWO> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ExampleScreen2</UIText>
                <UIText>2</UIText>
                <UITouch onPress={() => NavigationService.goBack()}>
                    <UIText>goback</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate("MAIN_SCREEN")}>
                    <UIText>nav to main</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.ONE)}>
                    <UIText>nav to example 1</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.THREE)}>
                    <UIText>nav to example 3</UIText>
                </UITouch>
            </ScrollView>
        </BaseView>
    );
};
