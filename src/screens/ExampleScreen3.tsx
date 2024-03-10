import {BaseView, UIText} from "@src/com";
import {EXAMPLE_SCREENS, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen3: TStackScreen<EXAMPLE_SCREENS.THREE> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ExampleScreen3</UIText>
                <UIText>3</UIText>
            </ScrollView>
        </BaseView>
    );
};
