import {BaseView, UIText, UITouch} from "@src/com";
import {EXAMPLE_SCREENS, NavigationService, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen3: TStackScreen<EXAMPLE_SCREENS.THREE> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ExampleScreen3</UIText>
                <UIText>3</UIText>
                <UITouch onPress={() => NavigationService.goBack()}>
                    <UIText>goback</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate("MAIN_SCREEN")}>
                    <UIText>nav to main</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.ONE)}>
                    <UIText>nav to example 1</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.TWO)}>
                    <UIText>nav to example 2</UIText>
                </UITouch>
            </ScrollView>
        </BaseView>
    );
};
