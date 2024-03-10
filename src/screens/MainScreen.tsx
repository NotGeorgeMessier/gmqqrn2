import {BaseView, UIText} from "@src/com";
import {MAIN_SCREEN, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const MainScreen: TStackScreen<typeof MAIN_SCREEN> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>MainScreen</UIText>
                <UIText>0</UIText>
            </ScrollView>
        </BaseView>
    );
};
