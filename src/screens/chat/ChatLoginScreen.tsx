import {BaseView, UIText, UITouch} from "@src/com";
import {CHAT_SCREENS, EXAMPLE_SCREENS, TStackScreen} from "@src/navigation";
import {NavigationService} from "@src/navigation/NavigationService";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ChatLoginScreen: TStackScreen<CHAT_SCREENS.LOGIN> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ChatLoginScreen</UIText>
                <UITouch onPress={() => NavigationService.goBack()}>
                    <UIText>goback</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate("MAIN_SCREEN")}>
                    <UIText>nav to main</UIText>
                </UITouch>
                <UITouch onPress={() => NavigationService.navigate(EXAMPLE_SCREENS.ONE)}>
                    <UIText>nav to example 1</UIText>
                </UITouch>
            </ScrollView>
        </BaseView>
    );
};
