import {BaseView, UIText, UITouch} from "@src/com";
import {CHAT_SCREENS, EXAMPLE_SCREENS, NavigationService, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ChatMainScreen: TStackScreen<CHAT_SCREENS.MAIN> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ChatMainScreen</UIText>
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
