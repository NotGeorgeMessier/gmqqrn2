import {BaseView, UIText} from "@src/com";
import {EXAMPLE_SCREENS, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen2: TStackScreen<EXAMPLE_SCREENS.TWO> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>screen name</UIText>
                <UIText>ExampleScreen2</UIText>
                <UIText>2</UIText>
            </ScrollView>
        </BaseView>
    );
};
