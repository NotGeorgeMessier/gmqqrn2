import {BaseView, UIText, UITouch} from "@src/com";
import {EXAMPLE_SCREENS, TStackScreen} from "@src/navigation";
import {NavigationService} from "@src/navigation/NavigationService";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen1: TStackScreen<EXAMPLE_SCREENS.ONE> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ExampleScreen1</UIText>
                <UIText>1</UIText>
                <UITouch onPress={() => NavigationService.goBack()}>
                    <UIText>goback</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate("MAIN_SCREEN")}>
                    <UIText>nav to main</UIText>
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
