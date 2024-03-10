import {BaseView, UIText} from "@src/com";
import {EXAMPLE_SCREENS, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen1: TStackScreen<EXAMPLE_SCREENS.ONE> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ExampleScreen1</UIText>
                <UIText>1</UIText>
            </ScrollView>
        </BaseView>
    );
};
